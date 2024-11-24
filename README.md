# Stationery Shop Backend

[Live Link](https://stationery-shop-backend-five.vercel.app/)

## Overview

This project is the backend for a stationery shop application. It provides APIs for managing products, orders and other related functionalities.

## Features

- CRUD operations for stationery products and orders
- Search and filter functionalities for products
- Revenue calculation from orders
- Data integrity using Mongoose schema validation

## Technologies Used

- **Programming Language:** TypeScript
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/riasat01/stationery-shop-backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd stationery-shop-backend
   ```
3. Install dependencies:
   ```bash
   yarn
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DB_URL=<your_mongodb_url>
     PORT=<port_number_you_want_to_run_this_project>
     ```

## Usage

1. Start the development server:
   ```bash
   yarn start:dev
   ```
2. Access the server at `http://localhost:<your port number>`.

## API Endpoints

- **Products**

  - `GET /api/products` - Get all products
  - `POST /api/products` - Create a new product
  - `GET /api/products/:productId` - Get a product by ID
  - `PUT /api/products/:productId` - Update a product by ID
  - `DELETE /api/products/:productId` - Delete a product by ID

- **Orders**
  - `POST /api/orders` - Create a new order
  - `GET /api/orders/revenue` - Get total revenue
