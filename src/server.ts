import cors from 'cors';
import dotenv from 'dotenv';
import express from "express";
import "./database/index";
import routes from "./routes/routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('Server started on port 3333');
});
