import React from 'react';
import Filterpanel from './Filterpanel/Filterpanel';
import Searchpanel from './Searchpanel/Searchpanel';
import './Searchbar.scss';

const Searchbar = ({ setValue, setStatus }) => {
  return (
    <div className="searchbar d-flex">
      <Searchpanel setValue={setValue} />
      <Filterpanel setStatus={setStatus} />
    </div>
  );
};

export default Searchbar;
