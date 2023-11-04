import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zasenemslvhczdrsbuwq.supabase.co';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inphc2VuZW1zbHZoY3pkcnNidXdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MzkxMjQsImV4cCI6MjAxMzMxNTEyNH0.FLt80dKFIE98ZErZsuY2qPtWat81-TkmuvPsPFqSVPk';
const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

export default supabase;










