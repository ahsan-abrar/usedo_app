const BASE_URL = 'https://usedo.herokuapp.com/api/v1';

export const fetchData = async payload => {
  let param = `${payload?.skip}/${payload?.limit}`;

  try {
    const response = await fetch(`${BASE_URL}/list/${param}`);
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
