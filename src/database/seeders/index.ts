/* eslint-disable no-console */
import assets from './Assets';
import companies from './Companies';
import units from './Units';
import users from './Users';
import { connect, disconnect, MONGO_URI_DEV } from '..';
import {
  Asset, Company, User, Unit,
} from '../models';

const seed = async (mongoURI = MONGO_URI_DEV) => {
  try {
    await connect(mongoURI);

    console.log('Seeding users collection.');
    await User.insertMany(users);

    console.log('Seeding companies collection.');
    await Company.insertMany(companies);

    console.log('Seeding assets collection.');
    await Asset.insertMany(assets);

    console.log('Seeding units collection.');
    await Unit.insertMany(units);

    console.log('Database seeding completed successfully.');
    await disconnect();
  } catch (error) {
    console.log('An error occurred while seeding.');
    console.log(error);
  }
};

export default seed;
