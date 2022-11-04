import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import { selectFilter, setCategoryId, setFilters } from '../redux/slices/filterSlice';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort, { list } from '../components/Sort';

import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzasSlice';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef<boolean>(false);
  const isMounted = useRef<boolean>(false);

  const { categoryId, sort, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);

  const sortType = sort.sortProperty;

  const onClickCategory = (index: number) => {
    dispatch(setCategoryId(index));
  };

  const getPizzas = async () => {
    const sortBy = `sortBy=${sortType}`;
    const order = '&order=desc';
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      // @ts-ignore
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
      }),
    );
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortBy: sortType,
        order: 'desc',
        category: categoryId,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [categoryId, sortType]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = list.find((obj) => obj.sortProperty === params.sortBy);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );

      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  const skeletons = [...new Array(6)].map((val, index) => <Skeleton key={index} />);
  const pizzas = items.map((obj: any) => <PizzaBlock {...obj} key={obj.id} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить пиццы. Попробуйте повторите попытку позже!</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}
    </div>
  );
};

export default Home;
