import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const useFetchManufacturers = () => {
  const [synth, setSynth] = useState({});
  const params = useParams();

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}/api/synths/${params.synth_id}`,
      params: {
        key: `${process.env.REACT_APP_API_KEY}`,
      },
    })
      .then((res) => {
        setSynth(res.data);
      })
      .catch((error) => {
        console.log('error', error);
        // @todo: return error.response
      });
  }, [params.synth_id]);
  return synth;
};

export default useFetchManufacturers;
