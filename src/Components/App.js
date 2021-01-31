import React, { useReducer } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Components
import Header from './Layouts/Header'
// Context 
import ProductContext from './../Contexts/products'
// Reducers
import AppReducer from '../Reducers/AppReducer'
// Routes
import loadable from '@loadable/component'
const Home = loadable(() => import('./../Routes/Home'));
const ProductDetails = loadable(() => import('./../Routes/ProductDetails'));
const CartRoute = loadable(() => import('./../Routes/Cart'));
const NotFound = loadable(() => import('./../Routes/NotFound'));
function App() {
  const [state, dispatch] = useReducer(AppReducer, {
    products: [],
    tempProducts: [],
    tempDetails: [],
  })
  return (
    <BrowserRouter>
      <ProductContext.Provider value={{
        products: state.products,
        tempProducts: state.tempProducts,
        tempDetails: state.tempDetails,
        dispatch
      }}>
        <div className="container-fluid p-0">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/details" component={ProductDetails} />
            <Route path="/cartroute" component={CartRoute} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}
export default App;
