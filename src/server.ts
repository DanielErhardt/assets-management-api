/* eslint-disable no-console */
import App from './App';
import 'dotenv/config';
import { connect } from './database';

const { API_PORT } = process.env;
const app = new App(API_PORT as string);

connect()
  .then(() => {
    app.start();
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });
