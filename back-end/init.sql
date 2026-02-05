CREATE TABLE IF NOT EXISTS profiles (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL
);

INSERT INTO profiles (name, email)
VALUES ('test user', 'test@example.com')
ON CONFLICT DO NOTHING;
