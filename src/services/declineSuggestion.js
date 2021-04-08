import axios from 'axios';

const declineSuggestion = async (id, token) => {
  try {
    return await axios.delete(
      `${process.env.REACT_APP_API_URL}/suggestions/${id}/decline`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    return error.response;
  }
};

export default declineSuggestion;
