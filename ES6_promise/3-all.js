/*eslint-disable */
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  // Use Promise.all to resolve both promises
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      // Log the result to the console
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      // Log an error message in case of failure
      console.log('Signup system offline');
    });
}
