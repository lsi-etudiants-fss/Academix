// Import the necessary libraries
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with your Supabase URL and anon key
const supabaseUrl = 'your_supabase_url';
const supabaseAnonKey = 'your_supabase_anon_key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);