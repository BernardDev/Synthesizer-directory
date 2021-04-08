import axios from 'axios';

const acceptSuggestion = async (id, token) => {
  let data = null;

  try {
    return await axios.patch(
      `${process.env.REACT_APP_API_URL}/suggestions/${id}/accept`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log(`error.response`, error.response);
    return error.response;
  }
};

export default acceptSuggestion;
