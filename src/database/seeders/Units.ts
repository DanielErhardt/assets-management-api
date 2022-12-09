import { Unit } from '../../@types/Entities';

const units: Unit[] = [
  {
    _id: '639088c6e838c434d8f62ca5',
    owner: '639088aec71fc0c60d3d5285', // Indústria Freios Supremos
    name: 'Factory',
    assets: [
      '6390890267c5563dd6f4d52e', // CNC
      '639088ffcd2288e8df9be7a7', // CNC
      '639088f6dcc92eb60d4152b1', // Lathe
      '639088f1d865a2daf2e44d97', // Lathe
    ],
  }, {
    _id: '639088d4eec32e5866a45ff2',
    owner: '639088aec71fc0c60d3d5285', // Indústria Freios Supremos
    name: 'Logistics',
    assets: [
      '639088db92c406f995c8466e', // Trasport Belt
      '639088d84378ec92bc1b3c8e', // Trasport Belt
      '639088e3af9b93f25abcf573', // Trasport Belt
      '639088ef4e784d8e1b23cd84', // Robotic Arm
      '639088fc2937add88371d89c', // Robotic Arm
      '639088fa840617b389c8003c', // Robotic Arm
    ],
  },
  {
    _id: '639088cbf836b4df7561684c',
    owner: '639088b59bd9c51e849a03ee', // TRACTIAN
    name: 'Place of Greatness',
    assets: [],
  },

];

export default units;
