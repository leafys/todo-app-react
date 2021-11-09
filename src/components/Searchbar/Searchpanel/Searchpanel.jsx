import React from 'react';
import './Searchpanel.scss';

const Searchpanel = ({ setValue }) => {
  return (
    <div className="search-input">
      <input
        onChange={(event) => setValue(event.target.value)}
        className="search-input"
        placeholder="Search..."
      />
    </div>
  );
};

export default Searchpanel;
