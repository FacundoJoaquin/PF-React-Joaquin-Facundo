import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemsProvider } from "./components/utils/Context/ItemsContext";
import CartLoader from "./components/utils/CartLoader/CartLoader";
import CategoryListContainer from "./components/CategoryListContainer/CategoryListContainer";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const App = () => {
  return (
    <ItemsProvider>
      <BrowserRouter>
        <CartLoader />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route
            exact
            path="/category/:generacion"
            element={<CategoryListContainer />}
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ItemsProvider>
  );
};

export default App;
