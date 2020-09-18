const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const asyncHandler = require('express-async-handler');
const serverless = require('serverless-http');

const db = require('./supabase.js');
// const publicPath = require('./public-path.js');
const publicPath = path.resolve(__dirname, '../', 'public');

// import { PORT } from './constants.js'

const app = express();
const router = express.Router();

//  Able to parse JSON, for post requests
// app.use(bodyParser.json());
//  Serve the public folder
// app.use('/', express.static(publicPath))


//  TODO: move this somewhere, perhaps ./supabase.js
async function getHitsCount() {
  const { body } = await db
    .from('hits')
    .select('hits_count');
  const { hits_count: hitsCount } = body[0]; // Returns every row, but we're only storing in the first row.
  return hitsCount;
}

//  GET /hits
router.get('/api/hits', asyncHandler(async (req, res, next) => {
  //  Get the data from the DB
  const hitsCount = await getHitsCount();
  //  Send the response
  res.send({ hitsCount });
}));

//  PUT /hits
router.put('/api/hits', asyncHandler(async (req, res, next) => {
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
router.get('/api/guestbook', asyncHandler(async (req, res, next) => {
  //  Get the data from the DB
  const { body: entries } = await db
    .from('guestbook')
    .select('*');
  //  Send the response
  res.send({ entries });
}));


//  POST /guestbook
router.post('/api/guestbook', asyncHandler(async (req, res, next) => {
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

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', express.static(publicPath))

// app.listen(process.env.PORT || PORT, () => {
//   console.log(`🍕 Come get some pizza at http://localhost:6969/`)
// });

module.exports.handler = serverless(app);

module.exports = app;
