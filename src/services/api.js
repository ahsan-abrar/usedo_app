const BASE_URL = 'http://192.168.0.102:5000/api/v1';
const END_POINTS = '';

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
