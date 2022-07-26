const BASE_URL = 'http://192.168.0.102:5000/api/v1/list';
const END_POINTS = '';

export const fetchData = async action => {
  try {
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
