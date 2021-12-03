import instance from './axiosConfig';

export function logInRequest(email, password) {
  try {
    return instance.post('/user/login', {
      email: email,
      password: password
    });
  } catch (error) {
    console.log(error);
  }
}


export function signUpRequest(email, password, firstName, lastName, country, city, gender) {
  try {
    return instance.post('/user/registration', {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      country: country,
      city: city,
      gender: gender
    });
  } catch (error) {
    console.log(error);
  }
}