import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return [
    <ToastContainer key="toasts" autoClose={ 3500 } hideProgressBar />,
    <BrowserRouter>
      <Switch>
       <Route path="/" component={ Login } exact />
       <Route path="/dashboard" component={ Dashboard } exact />
      
      </Switch>
    </BrowserRouter>
  ];
}

export default App;
