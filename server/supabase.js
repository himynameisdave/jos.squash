import setupEnv from './env.js';
import supabase from '@supabase/supabase-js';
const { createClient } = supabase;
//  Setup the env
setupEnv();

export default createClient(
  process.env.API_URL,
  process.env.SUPABASE_KEY
);
