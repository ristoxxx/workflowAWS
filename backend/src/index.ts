/*
 * File: index.ts
 * Created Date: Sunday January 26th 2025 12:42:14
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Sunday January 26th 2025 12:42:24
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'API is running!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});