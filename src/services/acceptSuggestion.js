import axios from 'axios';

const acceptSuggestion = async (id) => {
  try {
    return await axios.patch(
      `${process.env.REACT_APP_API_URL}/suggestions/${id}/accept`
    );
  } catch (error) {
    return error.response;
  }
};

export default acceptSuggestion;
