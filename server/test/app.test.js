const request = require('supertest');
const { createApp } = require('../src/app');

describe('appointments API', () => {
  const app = createApp();

  it('GET /api/appointments returns array', async () => {
    const res = await request(app).get('/api/appointments');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/appointments creates an appointment', async () => {
    const payload = { title: 'Test', time: '2025-09-09T10:00' };
    const res = await request(app).post('/api/appointments').send(payload);
    expect(res.status).toBe(201);
    expect(res.body.title).toBe('Test');
  });
});