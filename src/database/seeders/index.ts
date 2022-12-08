/* eslint-disable no-console */
/**
 * 639088c07a0bea78c3f81bd0
 * 6390885a58bab41f176373a2
 * 639088aec71fc0c60d3d5285
 * 639088b929622c38b62a05b3
 * 639088b59bd9c51e849a03ee
 * 639088c6e838c434d8f62ca5
 * 639088cbf836b4df7561684c
 * 639088d4eec32e5866a45ff2
 * 639088db92c406f995c8466e
 * 639088d84378ec92bc1b3c8e
 * 639088e3af9b93f25abcf573
 * 639088e61f990713687b5a09
 * 639088ec3e430351d9b98578
 * 639088e99a332de811a5ff70
 * 639088ef4e784d8e1b23cd84
 * 639088f1d865a2daf2e44d97
 * 639088f6dcc92eb60d4152b1
 * 639088fc2937add88371d89c
 * 639088fa840617b389c8003c
 * 639088ffcd2288e8df9be7a7
 * 63908905e35a25a431a62a87
 * 6390890267c5563dd6f4d52e
 * 63908907288cbda108fe7199
 * */

import AssetModel from '../models/AssetModel';
import CompanyModel from '../models/CompanyModel';
import UnitModel from '../models/UnitModel';
import UserModel from '../models/UserModel';
import assets from './Assets';
import companies from './Companies';
import units from './Units';
import users from './Users';
import { connect, disconnect } from '..';

const seed = async () => {
  const userModel = new UserModel();
  const companyModel = new CompanyModel();
  const assetModel = new AssetModel();
  const unitModel = new UnitModel();

  try {
    await connect();

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
