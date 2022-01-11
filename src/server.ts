import express from 'express';
import 'reflect-metadata';

const app = express();
app.use(express.json());

app.listen(3333, () => {
  console.log('🎃Server started on port 3333🎊');
});
