/*
# Create shared hazard reports

1. New Tables
- `hazard_reports` stores public safety reports submitted by signed-in users.
- `id` is the unique report identifier.
- `user_id` links each report to its creator and defaults to the current signed-in user.
- `category` stores `furto`, `assalto`, or `tiroteio`.
- `description` stores the report details.
- `address` stores an optional manually entered location label.
- `latitude` and `longitude` store the map position.
- `photo_url` stores an optional image reference for future photo uploads.
- `created_at` stores when the report was submitted.

2. Security
- Row level security is enabled on `hazard_reports`.
- Authenticated users can read all reports so the shared danger map works.
- Authenticated users can create reports owned by themselves.
- Authenticated users can update and delete only reports they created.

3. Notes
- The table is intentionally shared for map visibility, while write actions remain owner-scoped.
- No existing tables or user data are modified.
*/

CREATE TABLE IF NOT EXISTS public.hazard_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  category text NOT NULL CHECK (category IN ('furto', 'assalto', 'tiroteio')),
  description text NOT NULL,
  address text,
  latitude double precision NOT NULL,
  longitude double precision NOT NULL,
  photo_url text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS hazard_reports_created_at_idx ON public.hazard_reports (created_at DESC);
CREATE INDEX IF NOT EXISTS hazard_reports_category_idx ON public.hazard_reports (category);

ALTER TABLE public.hazard_reports ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Authenticated users can view hazard reports" ON public.hazard_reports;
CREATE POLICY "Authenticated users can view hazard reports"
  ON public.hazard_reports FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Users can create own hazard reports" ON public.hazard_reports;
CREATE POLICY "Users can create own hazard reports"
  ON public.hazard_reports FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own hazard reports" ON public.hazard_reports;
CREATE POLICY "Users can update own hazard reports"
  ON public.hazard_reports FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own hazard reports" ON public.hazard_reports;
CREATE POLICY "Users can delete own hazard reports"
  ON public.hazard_reports FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
