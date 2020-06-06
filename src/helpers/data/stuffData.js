import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getStuffByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/items.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const stuffObject = response.data;
      const stuff = [];
      if (stuffObject !== null) {
        Object.keys(stuffObject).forEach((stuffId) => {
          stuffObject[stuffId].id = stuffId;
          stuff.push(stuffObject[stuffId]);
        });
      }
      resolve(stuff);
    })
    .catch((err) => reject(err));
});

const getSingleStuff = (stuffId) => axios.get(`${baseUrl}/items/${stuffId}.json`);

export default { getStuffByUid, getSingleStuff };
