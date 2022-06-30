import './App.css';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Screens
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import BillScreen from './screens/BillScreen';
import PaymentScreen from './screens/PaymentScreen';
import DeliveryScreen from './screens/DeliveryScreen';

// Components 
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>}/>
          <Route exact path="/categories" element={<CategoriesScreen/>}/>
          <Route exact path="/product/:id" element={<ProductScreen/>}/>
          <Route exact path="/cart" element={<CartScreen/>} />
          <Route exact path="/payment" element={<PaymentScreen/>} />
          <Route exact path="/registration" element={<DeliveryScreen/>} />
          <Route exact path="/bill" element={<BillScreen/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;