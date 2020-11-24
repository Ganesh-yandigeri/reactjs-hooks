import React,{ useReducer } from 'react';
import Header from './layouts/Header';
import Home from './Home';
import PageNotFound from './components/common-file/PageNotFound';
import CartItem from './components/cart/CartItem';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AddContact from './contacts/AddContact';
import EditContact from './contacts/EditContact';
import Products from './components/products';
import AboutUs from './components/common-file/AboutUs';
import Contact from './components/common-file/Contact';
import AddCom from './components/hookjs/AddCom';
import Reducer from './components/hookjs/appReducer';

export const Context = React.createContext();

const App = () => {

  const [state, dispatch] = useReducer(Reducer, []);
  
  return(
    <Context.Provider value={{state, dispatch}}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-contact" component={AddContact} />
          <Route exact path="/edit-contact/:id" component={EditContact} />
          <Route exact path="/cart-item" component={CartItem} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/hook-js" component={AddCom} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Context.Provider>
  )
}

export default App;