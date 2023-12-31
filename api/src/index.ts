import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AddressInfo } from 'net';
import { productsRouter } from './routes/productRouter';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', productsRouter);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server running at http://localhost:${address.port}`);
  } else {
    console.error('Failure initializing server.');
  }
});
