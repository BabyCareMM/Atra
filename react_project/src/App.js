import { Provider } from 'react-redux';
import './App.css';
import CreateAccount from './component/CreateAccount';
import Login from './component/Login';
import store from './store/store';


// import { post } from './services/post'
import { CreateAccount as CreateAccountF, hello, Login as LoginF } from './services/user'
import { useEffect } from 'react';
import PostHistory from './component/PostHistory';
function App() {
  return (<>
    <Provider store={store}>
      <div className="App">
        <Login />
        <CreateAccount />
        {/* <PostHistory/> */}
      </div>
    </Provider>
  </>);
}

export default App;

{/* {CreateAccountF({ name: 'Eli', email: 'fjdhjd@gmail.com', password: '567' })} */ }

{/* {LoginF()} */ }

