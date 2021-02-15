import { Provider } from 'react-redux';
import './App.css';
import CreateAccount from './component/CreateAccount';
import Login from './component/Login';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
        <CreateAccount />
      </div>
    </Provider>
  );
}

export default App;
