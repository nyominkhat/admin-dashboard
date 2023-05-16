import { faker } from "@faker-js/faker";

export const chart_data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 43000,
    userLost: 234,
  },
  {
    id: 6,
    year: 2021,
    userGain: 40000,
    userLost: 500,
  },
  {
    id: 7,
    year: 2022,
    userGain: 60000,
    userLost: 1000,
  },
];

export const top_card_data = [
  {
    label: "Daily Revenue",
    price: "7,586",
    percent: "15",
  },
  {
    label: "YTD Revenue",
    price: "5,245,657",
    percent: "40",
  },
  {
    label: "Customers",
    price: "11,445",
    percent: "18",
  },
];

// recent data and users data
export let recent_req_data = Array.apply(null, Array(60));

let idCounter = 1;

const generateSequentialId = () => {
  const id = idCounter;
  idCounter++;
  return id;
};

recent_req_data.forEach((e, index) => {
  recent_req_data[index] = {
    id: generateSequentialId(),
    customer: {
      img: faker.image.avatarLegacy(),
      name: faker.internet.userName(),
    },
    purchase_date: faker.date.weekday(),
    purchase_id: faker.number.int({ min: 1000000000, max: 9999999999 }),
    phone_no: faker.phone.number(),
    email: faker.internet.email(),
  };

  return recent_req_data;
});
