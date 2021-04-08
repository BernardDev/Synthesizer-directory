import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetchManufacturers = () => {
  const [manufacturers, setManufacturers] = useState();

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/api/manufacturers`,
      params: {
        offset: 0,
        limit: 500,
        key: `${process.env.REACT_APP_API_KEY}`,
      },
    })
      .then((res) => {
        setManufacturers(res.data.manufacturers);
      })
      .catch((error) => {
        console.log('error', error);
        // @todo: return error.response
      });
  }, []);

  return manufacturers;
};

export default useFetchManufacturers;
