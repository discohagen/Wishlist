import { createClient } from '@supabase/supabase-js';
import { Database } from './types';

export const supabase = createClient<Database>(
    'https://kvynocorlbepxoryntug.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2eW5vY29ybGJlcHhvcnludHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ4MTgwNDUsImV4cCI6MjAyMDM5NDA0NX0.8UHe4BTRgy8KdDsGja7YZOngbE_lu3VQ5lq8XBb0iUk'
);
