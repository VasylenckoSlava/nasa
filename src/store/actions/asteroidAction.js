const api = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=';

const apiKey = '39wu75hyYLe3sHTs4zB9NuFpUrgT3X0hgeSjnKuL';

export const GET_ASTEROID_BY_ID = 'GET_ASTEROID_BY_ID';
export const GET_ASTEROID_RANDOMLY = 'GET_ASTEROID_RANDOMLY';

export const getAsteroidById = (id, move) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${apiKey}`,
    );
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    const resData = await response.json();
    console.log(resData);

    dispatch({
      type: GET_ASTEROID_BY_ID,
      payload: resData,
    });
    move && move();
  } catch (e) {
    throw e;
  }
};

export const getAsteroidRandomly = (move) => async (dispatch) => {
  try {
    const response = await fetch(`${api}${apiKey}`);
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    const resData = await response.json();
    const index = Math.floor(Math.random() * 20);
    console.log(resData.near_earth_objects);
    dispatch({
      type: GET_ASTEROID_RANDOMLY,
      payload: resData.near_earth_objects[index],
    });
    move && move();
  } catch (e) {
    throw e;
  }
};
