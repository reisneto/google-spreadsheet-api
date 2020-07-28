import express, { Response, Request } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/status', (req: Request, res: Response): Response => {
    return res.json({ online: true });
});

app.listen(3333);

export default app;