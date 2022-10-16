import React from 'react';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Sort from './components/Sort/Sort';

import './scss/app.scss';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Мексиканская" price={525} />
            <PizzaBlock title="Чизбургер-пицца" price={395} />
            <PizzaBlock title="BBG" price={620} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
