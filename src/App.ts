import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler';

class App {
  private _port: string;
  private _instance: express.Express;

  constructor(port: string) {
    this._port = port;
    this._instance = express();

    this.config();

    this._instance.get('/', (_req, res) => res.json('OK'));
  }

  private async config(): Promise<void> {
    this._instance.use(express.json());
    this._instance.use(cors());

    this._instance.use(errorHandler);
  }

  public start(): void {
    // eslint-disable-next-line no-console
    this._instance.listen(this._port, () => console.log(`Running on port ${this._port}`));
  }
}

export default App;
