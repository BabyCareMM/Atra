import { Provider } from 'react-redux';
import './App.css';
import CreateAccount from './component/CreateAccount';
import Login from './component/Login';
import store from './store/store';

// import { post } from './services/post'
import { CreateAccount as CreateAccountF, hello, Login as LoginF } from './services/user'
function App() {
  return (<>
    {hello()}
    {/* {LoginF()} */}

    {/* <Provider store={store}>
      <div className="App">
        {/* {CreateAccountF()} */}
    {/* {LoginF()} */}
    {/* {post.addChosenPost({ postId:1, title:'test', body:'test', date:Date.now(),users:0 })} */}
    {/* <Login />
        <CreateAccount />
      </div>
    </Provider> */}
  </>);
}

export default App;
