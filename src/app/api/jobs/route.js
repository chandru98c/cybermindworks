// src/app/api/jobs/route.js
export const dynamic = 'force-dynamic';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASEURL,
});

// POST /api/jobs
export async function POST(req) {
  const data = await req.json();
  const {
    jobTitle,
    companyName,
    location,
    jobType,
    salaryMin,
    salaryMax,
    applicationDeadline,
    description,
  } = data;
  const result = await pool.query(
    `INSERT INTO jobs (job_title, company_name, location, job_type, salary_min, salary_max, application_deadline, description, posted_at)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,NOW()) RETURNING *`,
    [jobTitle, companyName, location, jobType, salaryMin, salaryMax, applicationDeadline, description]
  );
  return new Response(JSON.stringify(result.rows[0]), { status: 201 });
}

// GET /api/jobs
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const filters = [];
  const values = [];
  let idx = 1;

  if (searchParams.get('jobTitle')) {
    filters.push(`job_title ILIKE $${idx++}`);
    values.push(`%${searchParams.get('jobTitle')}%`);
  }
  if (searchParams.get('location')) {
    filters.push(`location = $${idx++}`);
    values.push(searchParams.get('location'));
  }
  if (searchParams.get('jobType')) {
    filters.push(`job_type = $${idx++}`);
    values.push(searchParams.get('jobType'));
  }
  if (searchParams.get('minSalary')) {
    filters.push(`salary_min >= $${idx++}`);
    values.push(Number(searchParams.get('minSalary')));
  }
  if (searchParams.get('maxSalary')) {
    filters.push(`salary_max <= $${idx++}`);
    values.push(Number(searchParams.get('maxSalary')));
  }

  let query = 'SELECT * FROM jobs';
  if (filters.length) {
    query += ' WHERE ' + filters.join(' AND ');
  }
  query += ' ORDER BY posted_at DESC';

  const result = await pool.query(query, values);
  return new Response(JSON.stringify(result.rows), { status: 200 });
}
