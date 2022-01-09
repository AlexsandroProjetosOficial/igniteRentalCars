import cors from "cors";
import express from "express";
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import { ensureError } from "./middlewares/ensureError";
import { router } from "./routes";
import swaggerFile from './swagger.json';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);
app.use(ensureError);

app.listen(3333, () => console.log("Server is running on port 3333"));
