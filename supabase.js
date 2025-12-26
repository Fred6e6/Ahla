import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const supabase = createClient(
  "https://agncqhmynyzwrljszkfs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbmNxaG15bnl6d3JsanN6a2ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY3Njk3NDcsImV4cCI6MjA4MjM0NTc0N30.l3kpzB2rK3Dsr-ZeqWZ-NxygvVYxfrrapGwLNpbGSEE"
);
