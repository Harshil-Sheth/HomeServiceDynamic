import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/HomePage.jsx';
import 'antd/dist/antd.css';
import BookServicePage from './views/BookServicePage/BookServicePage';
import SignInPage from './views/sign-in-sign-up-page/sign-in.component';
import SignUpPage from './views/sign-in-sign-up-page/sign-up.component';
import SubServeicePage from './views/subServicePage/subServicePage'
import Profile from './components/porfile/profile.component';
import Orders from './components/orders/orders.components';
import OrderPage from './views/ordersPage/orderPage';
// import SubserveiceList from './components/subserviceList/subservicelist.component';
// import SignInAndSignUpPage from './views/sign-in-sign-up-page/sign-in-sign-up.components';

function App() {
  return (
    <Router>
      {/* <Home /> */}
      <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/book' component={BookServicePage} />
    <Route path='/signin' component={SignInPage} />
    <Route path='/signup' component={SignUpPage} />
    <Route path='/profile' component={Profile} />
    <Route path='/orders' component={OrderPage} />
    <Route path='/subservices' component={(props) => <SubServeicePage {...props}/>} />
    {/* <Route path='/signin' component={SignInAndSignUpPage} /> */}
      {/* <BookServicePage /> */}
      </Switch>
    </Router>
  );
}

export default App;
