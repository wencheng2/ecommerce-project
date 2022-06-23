import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import InvoiceScreen from './screens/InvoiceScreen';
import PaymentScreen from './screens/PaymentScreen';
import RegistrationScreen from './screens/RegistrationScreen';

// Components 
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
function App() {
  return (
    <Router>
      <Navbar />
      {/*SideDrawer */}
      <Backdrop />
      <main>
        <Routes>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/payment" component={PaymentScreen} />
          <Route exact path="/registration" component={RegistrationScreen} />
          <Route exact path="/invoice" component={InvoiceScreen} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;