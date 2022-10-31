import React, { useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId } from '../redux/slices/filterSlice';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';

import { AppContext } from '../App';

const Home = () => {
  const dispatch = useDispatch();

  const { categoryId, sort } = useSelector((state) => state.filter);
  const sortType = sort.sortProperty;

  const { searchValue } = useContext(AppContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setIsLoading(true);

    const sortBy = `sortBy=${sortType.sortProperty}`;
    const order = 'order=desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    fetch(
      `https://635ad7456f97ae73a637df53.mockapi.io/items?${sortBy}&${order}&${category}&${search}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  const skeletons = [...new Array(6)].map((val, index) => <Skeleton key={index} />);
  const pizzas = items.map((obj) => <PizzaBlock {...obj} key={obj.id} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
    </div>
  );
};

export default Home;
