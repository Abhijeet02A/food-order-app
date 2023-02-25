import React , {useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import CartProvider from './components/Store/CartProvider';

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const setCartShownHandler = () => {
    setIsCartShown(true);
  }

  const setHideCardHandler = () => {
    setIsCartShown(false);
  }
  return (
    <CartProvider>
    
      {isCartShown && <Cart onCartClose={setHideCardHandler} />}
      <Header onCartClick={setCartShownHandler} />
       <main>
        <Meals />
       </main>
      
       </CartProvider>
  );
}

export default App;

