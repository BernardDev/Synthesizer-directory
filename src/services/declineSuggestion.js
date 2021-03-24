import axios from 'axios';

const declineSuggestion = async (id) => {
  try {
    return await axios.delete(
      `${process.env.REACT_APP_API_URL}/admin/${id}/decline`
    );
  } catch (error) {
    return error.response;
  }
};

export default declineSuggestion;
