import instance from './axiosConfig';


function createSearchQuery(page, firstName, lastName, country, city) {
  let queryParameter = {}
  if (page !== "") queryParameter.page = page;
  if (firstName !== "") queryParameter.firstName = firstName;
  if (lastName !== "") queryParameter.lastName = lastName;
  if (country !== "") queryParameter.country = country;
  if (city !== "") queryParameter.city = city;
  return queryParameter;
}

export function getPeople(token, page, firstName, lastName, country, city) {
  try {
    return instance.get('/people', {
      params: createSearchQuery(page, firstName, lastName, country, city),
      headers: {"Authorization" : `Bearer ${token}`}
    });
  } catch (error) {
    console.log(error);
  }
}