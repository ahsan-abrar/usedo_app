const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
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
