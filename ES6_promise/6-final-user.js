/* eslint-disable */
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ];

  return Promise.allSettled(promises)
    .then(results => {
      return results.map(result => {
        return {
          status: result.status,
          value: result.status === 'fulfilled' ? result.value : result.reason
        };
      });
    });
}
