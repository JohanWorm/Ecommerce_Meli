import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonIcon } from 'src/components/ButtonIcon';
import iconSearch from 'assets/images/ic_Search.png';
import './style.scss';

const SearchBox = () => {

  let history = useHistory();
  const pathItems = 'items';
  const params = new URLSearchParams();
  const [searchValue, setSearchValue] = useState('');

  const onSubmit = ($event) => {
    $event.preventDefault();
    if (searchValue.trim().length) {
      setSearchValue(searchValue.trim());
      params.set('search', searchValue.trim());
      history.push(`/${pathItems}?${params.toString()}`);
    }
  };

  const onChangeInputValue = ($event) => {
    setSearchValue($event.target.value)
  };

  return (
    <form className='search__box' onSubmit={onSubmit}>
      <input type='text' placeholder='Nunca dejes de buscar' value={searchValue} onChange={onChangeInputValue} />
      <ButtonIcon
        type='submit'
        color=''
        contentType='img'
        src={iconSearch} />
    </form>
  );
}

export { SearchBox };