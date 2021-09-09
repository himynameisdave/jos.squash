const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.API_URL,
  process.env.API_KEY
);

exports.handler = async function(event, context) {
  if (event.httpMethod === 'POST') {
    const body = JSON.parse(event.body);
    if (!body.name || !body.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'You must supply a name + message',
        })
      };
    }
    const { name, message } = body;
    await supabase.from('guestbook').insert([
      { name, message }
    ]);
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: 'Created entry!',
      }),
    };
  }

  //  Assume GET request, return all guestbook entries.
  const { body } = await supabase.from('guestbook').select('*');
  return {
    statusCode: 200,
    body: JSON.stringify(body),
  };
};
