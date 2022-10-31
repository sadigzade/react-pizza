import React, { useState, useContext, useRef } from 'react';
import debounce from 'lodash.debounce';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from '../../../App';

import classes from './Search.module.scss';
import { useCallback } from 'react';

const Search = () => {
  const [value, setValue] = useState('');
  const { setSearchValue } = useContext(AppContext);
  const inputEl = useRef(null);

  const onClickClear = () => {
    setValue('');
    setSearchValue('');
    inputEl.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((value) => {
      setSearchValue(value);
    }, 1000),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <FontAwesomeIcon className={classes.icon} icon={faMagnifyingGlass} size="lg" />
      <input
        ref={inputEl}
        value={value}
        onChange={onChangeInput}
        className={classes.input}
        placeholder="Поиск пиццы..."
        type="text"
      />
      {value && (
        <FontAwesomeIcon
          onClick={onClickClear}
          className={classes.clearIcon}
          icon={faXmark}
          size="lg"
        />
      )}
    </div>
  );
};

export default Search;
