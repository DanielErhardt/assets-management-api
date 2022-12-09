import { Company } from '../../@types/Entities';

const companies: Company[] = [
  {
    _id: '639088aec71fc0c60d3d5285',
    name: 'Indústria Freios Supremos',
    employees: [
      '6392710928e8c0e0fc0a8d63', // João das Neves
      '6392722a28e8c0e0fc0a8d66', // Emerson
      '6392726e28e8c0e0fc0a8d69', // Roberta
    ],
    assets: [
      '639088db92c406f995c8466e', // Trasport Belt
      '639088d84378ec92bc1b3c8e', // Trasport Belt
      '639088e3af9b93f25abcf573', // Trasport Belt
      '639088ef4e784d8e1b23cd84', // Robotic Arm
      '639088fc2937add88371d89c', // Robotic Arm
      '639088fa840617b389c8003c', // Robotic Arm
      '6390890267c5563dd6f4d52e', // CNC
      '639088ffcd2288e8df9be7a7', // CNC
      '639088f6dcc92eb60d4152b1', // Lathe
      '639088f1d865a2daf2e44d97', // Lathe
    ],
    units: [
      '639088c6e838c434d8f62ca5', // Factory
      '639088d4eec32e5866a45ff2', // Logistics
    ],
  }, {
    _id: '639088b59bd9c51e849a03ee',
    name: 'TRACTIAN',
    employees: ['6392731128e8c0e0fc0a8d6c'], // Juvenal
    assets: [],
    units: [
      '639088cbf836b4df7561684c', // Place of Greatness
    ],
  },
];

export default companies;
