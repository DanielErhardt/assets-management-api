import { User } from '../../@types/Entities';

const users: User[] = [
  {
    _id: '6392710928e8c0e0fc0a8d63',
    name: 'João das Neves',
    email: 'joao@freiossupremos.com',
    password: '$2a$10$JeXptCgxJlkZ4NSwBGZhL.mK8avEtBTUuSEp878LjeH4VYsStVtXm', // sabe-nada
    role: 'user',
    company: '639088aec71fc0c60d3d5285', // Indústria Freios Supremos
  }, {
    _id: '6392722a28e8c0e0fc0a8d66',
    name: 'Emerson',
    email: 'emerson@freiossupremos.com',
    password: '$2a$10$.ewwiDTzXlSs0Ch7VB94ruOcQ1F/iFdVu86fQ5z1OZEkzmUna8v.O', // emersinho-gerente
    role: 'manager',
    company: '639088aec71fc0c60d3d5285', // Indústria Freios Supremos
  }, {
    _id: '6392726e28e8c0e0fc0a8d69',
    name: 'Roberta',
    email: 'roberta@freiossupremos.com',
    password: '$2a$10$EPd/aDUU1XjPcc8lBtOhKO2elFsDFbHD54xg2oElXu9GZP56sclRC', // robertinha-gerente
    role: 'manager',
    company: '639088aec71fc0c60d3d5285', // Indústria Freios Supremos
  }, {
    _id: '6392731128e8c0e0fc0a8d6c',
    name: 'Juvenal dos Dados',
    email: 'juvenal@tractian.com',
    password: '$2a$10$ycWR5UYPra8raNbzvVaO7OyUnxv240As..HwyATpSWLKpOJl2smVW', // data-grandmaster
    role: 'admin',
    company: '639088b59bd9c51e849a03ee', // TRACTIAN
  },
];

export default users;
