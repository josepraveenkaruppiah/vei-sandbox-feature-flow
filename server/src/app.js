const express = require('express');
const cors = require('cors');

function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const appointments = [];

  app.get('/api/appointments', (req, res) => {
    res.json(appointments);
  });

  app.post('/api/appointments', (req, res) => {
    const { title, time } = req.body || {};
    if (!title || !time) {
      return res.status(400).json({ error: 'title and time required' });
    }
    const appt = { id: Date.now().toString(), title, time };
    appointments.push(appt);
    res.status(201).json(appt);
  });

  app.get('/api/health', (_req, res) => res.json({ ok: true }));

  return app;
}

module.exports = { createApp };