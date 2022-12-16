/* eslint-disable no-console */
import AssetModel from '../../models/AssetModel';
import CompanyModel from '../../models/CompanyModel';
import UnitModel from '../../models/UnitModel';
import UserModel from '../../models/UserModel';
import assets from './Assets';
import companies from './Companies';
import units from './Units';
import users from './Users';
import { connect, disconnect, MONGO_URI_DEV } from '..';

const seed = async (mongoURI = MONGO_URI_DEV) => {
  const userModel = new UserModel();
  const companyModel = new CompanyModel();
  const assetModel = new AssetModel();
  const unitModel = new UnitModel();

  try {
    await connect(mongoURI);

    console.log('Seeding users collection.');
    await userModel.seed(users);

    console.log('Seeding companies collection.');
    await companyModel.seed(companies);

    console.log('Seeding assets collection.');
    await assetModel.seed(assets);

    console.log('Seeding units collection.');
    await unitModel.seed(units);

    console.log('Database seeding completed successfully.');
    await disconnect();
  } catch (error) {
    console.log('An error occurred while seeding.');
    console.log(error);
  }
};

export default seed;
