import cors from 'cors';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from "express";
import 'express-async-errors';
import "./database/";
import AppError from './errors/AppError';
import routes from "./routes/routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ status: 'error', message: err.message, });
  }

  console.error(err);
  return response.status(500).json({ status: 'error', message: 'Internal server error' });
});

app.listen(process.env.PORT || 3333, () => {
  console.log('🚀 Server started on port 3333');
});
