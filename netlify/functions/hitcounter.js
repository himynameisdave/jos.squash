const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.API_URL,
  process.env.API_KEY
);

exports.handler = async function(event, context) {
  const { body } = await supabase.from('hitcounter').select('count').single();

  //  Increment count
  const nextCount = (body?.count ?? 0) + 1;

  await supabase.from('hitcounter').update({ count: nextCount }).match({ id: 1 });

  return {
    statusCode: 200,
    body: JSON.stringify({
      count: nextCount,
    }),
  }
}
