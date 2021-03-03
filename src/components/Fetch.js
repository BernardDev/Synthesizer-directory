import './Fetch.scss';

import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Fetch = () => {
  const BASEURL =
    'https://synthesizer-api.herokuapp.com/api/synths?key=C6T2MA6-8B54BSG-GZKKV0F-MFKC1S1';
  const INITIALSTATE = {status: 'idle', code: null, message: null};
  const [synths, setSynths] = useState([]);
  const [data, setData] = useState(INITIALSTATE);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`${BASEURL}`);
      setData({
        ...data,
        status: 'done',
        code: result.status,
        message: result.statusText,
      });
      setSynths(result.data.synths);
    }
    fetchData();
  }, []);

  console.log('synths', synths);
  // console.log('data', data);

  return (
    <div>
      {synths.map((synth, index) => {
        return <div key={index}> {<img key={index} src={synth.img} />}</div>;
      })}
      <br />
    </div>
  );
};

export default Fetch;
