import { Routes, Route } from "react-router-dom";
// import { Suspense } from "react";
// import Loadable from "react-loadable";
import Home from "../../pages/Home/Home";
import Header from "../Header/Header";
import Cart from "../../pages/Cart/Cart";
import NotFoundPage from "../../pages/NotFound/NotFound";

// const Cart = Loadable({
//   loader: () => import(/* webpackChunkName: "Cart" */ "../../pages/Cart/Cart"),
//   loading: () => <div>Загрузка...</div>,
// });

// const NotFound = Loadable({
//   loader: () => import(/* webpackChunkName: "NotFound" */ "../../pages/NotFound/NotFound"),
//   loading: () => <div>Загрузка...</div>,
// });

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
