require('./env.js');
const supabase = require('@supabase/supabase-js');
const { createClient } = supabase;

module.exports = createClient(
  process.env.API_URL,
  process.env.SUPABASE_KEY
);
