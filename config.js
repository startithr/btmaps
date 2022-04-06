'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/infostartit/cl0l3y9l6000b14n2qnjsfik6',
  accessToken:
    'pk.eyJ1IjoiaW5mb3N0YXJ0aXQiLCJhIjoiY2t6MnFkb3NxMDBmYjJudG00dDlodWl6cSJ9.8ABWFSKEAzbuVzZcwkbxfQ',
  CSV: './Data.csv',
  center: [16.06730449563833, 43.13126470163047],
  zoom: 7,
  title: 'Karta Trebinjsko-mrkanske biskupije',
  description:
    'Popis i položaj župnih ureda. ',
  sideBarInfo: ['Zupni_ured', 'Naziv', 'Mjesto'],
  popupInfo: ['URL'],
  filters: [
   {
      type: 'dropdown',
      title: 'Odaberite dekanat: ',
      columnHeader: 'Dekanat',
      listItems: [
        'Stolački dekanat',
        'Trebinjski dekanat',
      ],
    },
  ],
};
