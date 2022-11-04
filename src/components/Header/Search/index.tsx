import React, { useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import classes from './Search.module.scss';
import { setSearchValue } from '../../../redux/slices/filterSlice';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');
  const inputEl = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    setValue('');

    dispatch(setSearchValue(''));

    inputEl.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, 500),
    [],
  );

  const onChangeInput = (event: any) => {
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
