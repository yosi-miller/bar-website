import React from 'react';
import ViewComponent from '../components/ViewComponent';
import { bat_mitzvah } from '../data';

const BatMitzvahPage = () => {
  return (
    <div>
      <ViewComponent images={bat_mitzvah} />
    </div>
  );
};

export default BatMitzvahPage;