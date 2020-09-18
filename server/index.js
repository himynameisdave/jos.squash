import express from 'express';
import bodyParser from 'body-parser';
import asyncHandler from 'express-async-handler';

import db from './supabase.js';
import publicPath from './public-path.js';
import { PORT } from './constants.js'

const app = express();
//  Able to parse JSON, for post requests
app.use(bodyParser.json());
//  Serve the public folder
app.use('/', express.static(publicPath))


//  TODO: move this somewhere, perhaps ./supabase.js
async function getHitsCount() {
  const { body } = await db
    .from('hits')
    .select('hits_count');
  const { hits_count: hitsCount } = body[0]; // Returns every row, but we're only storing in the first row.
  return hitsCount;
}

//  GET /hits
app.get('/api/hits', asyncHandler(async (req, res, next) => {
  //  Get the data from the DB
  const hitsCount = await getHitsCount();
  //  Send the response
  res.send({ hitsCount });
}));

//  PUT /hits
app.put('/api/hits', asyncHandler(async (req, res, next) => {
  const hitsCount = await getHitsCount();
  const { body } = await db
    .from('hits')
    .update({ hits_count: hitsCount + 1 })
    .eq('id', 1); // TODO: Store this as a const somewhere
  const { hits_count: updatedHitsCount } = body[0]
  res.send({
    hitsCount: updatedHitsCount,
  });
  return next();
}));

// GET /guestbook
app.get('/api/guestbook', asyncHandler(async (req, res, next) => {
  //  Get the data from the DB
  const { body: entries } = await db
    .from('guestbook')
    .select('*');
  //  Send the response
  res.send({ entries });
}));


//  POST /guestbook
app.post('/api/guestbook', asyncHandler(async (req, res, next) => {
  const { name, text } = req.body;
  if (!name) {
    return res.send({
      error: `🙅‍♀️ Bad request! No name provided!`,
      code: 400,
    });
  }
  if (!text) {
    return res.send({
      error: `🙅‍♀️ Bad request! No text provided!`,
      code: 400,
    });
  }
  await db
    .from('guestbook')
    .insert([
      {
        name,
        text,
        created_at: new Date(),
      }
    ]);
  res.sendStatus(200);
}));

app.listen(process.env.PORT || PORT, () => {
  console.log(`🍕 Come get some pizza at http://localhost:6969/`)
});
