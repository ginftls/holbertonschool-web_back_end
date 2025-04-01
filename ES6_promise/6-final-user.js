/* eslint-disable */
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call both functions and return a Promise.allSettled result
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      // Map the results to the desired structure
      return results.map((result) => {
        if (result.status === 'fulfilled') {
          return {
            status: 'fulfilled',
            value: result.value,
          };
        } else {
          return {
            status: 'rejected',
            value: result.reason,
          };
        }
      });
    });
}
