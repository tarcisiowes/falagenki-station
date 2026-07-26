import { createClient } from '@supabase/supabase-js'

// Supabase publishable keys are intentionally safe to expose in browser apps.
// Database authorization is enforced by Row Level Security, never by this key.
const DEFAULT_SUPABASE_URL = 'https://yfhilncuzdfzezkrotrg.supabase.co'
const DEFAULT_SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_w0NmUTlnyAN1-t3NJvBmtw_6LuOOeS_'

export const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL?.trim() || DEFAULT_SUPABASE_URL
export const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim() ||
  DEFAULT_SUPABASE_PUBLISHABLE_KEY

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
})
