import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import classes from './Search.module.scss';

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={classes.root}>
      <FontAwesomeIcon className={classes.icon} icon={faMagnifyingGlass} size="lg" />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={classes.input}
        placeholder="Поиск пиццы..."
        type="text"
      />
      {searchValue && (
        <FontAwesomeIcon
          onClick={() => setSearchValue('')}
          className={classes.clearIcon}
          icon={faXmark}
          size="lg"
        />
      )}
    </div>
  );
};

export default Search;
