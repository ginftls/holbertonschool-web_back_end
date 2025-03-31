/*eslint-disable */
import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  // Using Promise.all to collectively resolve all promises
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      // Destructure the resolved values from the promises
      const [photoResponse, userResponse] = values;
      
      // Log the required information
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      // Handle any errors by logging the required message
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
