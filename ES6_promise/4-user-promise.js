/*eslint-disable */
export default signUpUser;

function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
