import { createClient } from '@supabase/supabase-js'

// 🔑 Replace these with your actual Supabase project values
const SUPABASE_URL = 'https://valvinobzhjssehlseye.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhbHZpbm9iemhqc3NlaGxzZXllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5MjgyMDYsImV4cCI6MjA5ODUwNDIwNn0.fjjoyB_X67qQ43LhSQ2vrPwBImzY9AMzL-vvbEn6IQY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
