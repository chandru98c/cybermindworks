-- jobs table for unified job structure
CREATE TABLE IF NOT EXISTS jobs (
  id SERIAL PRIMARY KEY,
  job_title VARCHAR(100) NOT NULL,
  company_name VARCHAR(100) NOT NULL,
  location VARCHAR(50) NOT NULL,
  job_type VARCHAR(50) NOT NULL,
  salary_min INTEGER NOT NULL,
  salary_max INTEGER NOT NULL,
  application_deadline DATE,
  description TEXT,
  posted_at TIMESTAMP DEFAULT NOW()
);
