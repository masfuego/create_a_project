
import { createClient } from '@supabase/supabase-js';

const supabaseURL = 'https://dzjcqvbqnlmhzdcdwhxu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6amNxdmJxbmxtaHpkY2R3aHh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5NjEyNzUsImV4cCI6MTk5OTUzNzI3NX0.mCisvufrXXQD5ifTOxDhnp_ghovlfmUM8NRlyUAJY0U'

export const supabase = createClient(supabaseURL, supabaseAnonKey)