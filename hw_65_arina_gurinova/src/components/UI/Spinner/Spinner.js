import React from 'react';
import { Spinner } from 'reactstrap';

const SpinnerShow = () => {
  return (
    <div>
      <Spinner color="info" style={{position:"fixed", top:"50%", left:"50%"}}/>
    </div>
  );
}

export default SpinnerShow;