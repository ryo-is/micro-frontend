import express from 'express';
import cors from 'cors';
import { startApolloServer } from './graphql';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

startApolloServer(app);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
