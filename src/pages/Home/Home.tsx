import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import qs from "qs";

import Skeleton from "../../components/PizzaBlock/Skeleton";
import SortPopup, { list } from "../../components/SortPopup/SortPopup";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import Categories from "../../components/Categories/Categories";

import { SearchPizzaParams, TPizza } from "../../services/types/data";
import { useSelector } from "../../hooks/useSelectore";
import { useDispatch } from "../../hooks/useDispatch";
import { setCategoryId, setFilters } from "../../services/actions/filter";
import { pizzasRequestFetch } from "../../services/actions/pizzas";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef<boolean>(false);
  const isMounted = useRef<boolean>(false);

  const sort = useSelector((state) => state.filter.sort);
  const status = useSelector((state) => state.pizzas.status);
  const pizzas = useSelector((state) => state.pizzas.pizzas);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const searchValue = useSelector((state) => state.filter.searchValue);

  const sortType = sort.sortProperty;

  const onChangeCategory = useCallback((index: number) => {
    dispatch(setCategoryId(index));
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortBy: sortType,
        order: "desc",
        category: categoryId,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [categoryId, sortType]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
      const sort = list.find((obj) => obj.sortProperty === params.sortBy);

      dispatch(
        setFilters({
          searchValue: params.search,
          categoryId: Number(params.category),
          sort: sort || list[0],
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

  const getPizzas = async () => {
    const sortBy = `sortBy=${sortType}`;
    const order = "order=desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `search=${searchValue}` : "";

    dispatch(
      pizzasRequestFetch({
        sortBy,
        order,
        category,
        search,
      }),
    );
  };

  const skeletons = [...new Array(6)].map((val, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <SortPopup value={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить пиццы. Попробуйте повторите попытку позже!</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading"
            ? skeletons
            : pizzas.map((pizza: TPizza) => <PizzaBlock key={pizza.id} pizza={pizza} />)}
        </div>
      )}
    </div>
  );
};

export default Home;
