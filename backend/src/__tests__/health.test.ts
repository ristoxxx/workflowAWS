/*
 * File: health.test.ts
 * Created Date: Sunday January 26th 2025 12:44:07
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Sunday January 26th 2025 12:44:12
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

import request from 'supertest';
import express from 'express';

const app = express();
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'API is running!' });
});

describe('GET /health', () => {
  it('should return API status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'API is running!' });
  });
});