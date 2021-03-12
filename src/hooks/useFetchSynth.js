import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const useFetchManufacturers = () => {
  const params = useParams();
  const [synth, setSynth] = useState({});

  console.log('params', params);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://synthesizer-api.herokuapp.com/api/synths/${params.synth_id}`,
      params: {
        key: `${process.env.REACT_APP_API_KEY}`,
      },
    })
      .then((res) => {
        setSynth(res.data);
      })
      .catch((e) => {
        console.log('error', e);
      });
  }, [params.synth_id]);
  return synth;
};

export default useFetchManufacturers;
