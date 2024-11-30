import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();


app.use(express.static(path.join(__dirname, 'src')));
console.log(path.join(__dirname, 'src'));

app.use(cors( 
    {
        origin: `${process.env.SITE_URL}`,
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    }, 
));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});