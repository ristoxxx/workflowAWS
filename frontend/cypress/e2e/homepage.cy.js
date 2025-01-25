/*
 * File: homepage.cy.js
 * Created Date: Saturday January 25th 2025 10:52:17
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Saturday January 25th 2025 10:52:23
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

describe('Homepage', () => {
    it('should load the homepage with correct text', () => {
      cy.visit('http://localhost:3000');
      cy.contains('Hello, World!');
      cy.contains('Welcome to your React + JavaScript project.');
    });
  });
  