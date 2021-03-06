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

const removeStuff = (stuffId) => axios.delete(`${baseUrl}/items/${stuffId}.json`);

const postStuff = (newStuff) => axios.post(`${baseUrl}/items.json`, newStuff);

const putStuff = (stuffId, newStuff) => axios.put(`${baseUrl}/items/${stuffId}.json`, newStuff);

export default {
  getStuffByUid, getSingleStuff, removeStuff, postStuff, putStuff,
};
