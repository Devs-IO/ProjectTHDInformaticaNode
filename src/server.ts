import dotenv from 'dotenv';
import express from "express";
import routes from "./routes/routes"
import "./database/index";


dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🎃Server started on port 3333🎊');
});
