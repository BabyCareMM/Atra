import { Provider } from 'react-redux';
import './App.css';
import CreateAccount from './component/CreateAccount';
import Login from './component/Login';
import store from './store/store';
import { fetchPosts } from './services/post';
import Post from './component/Posts';
import { useEffect } from 'react';
import PostHistory from './component/PostHistory';
import RouterPage from './router/routerPage';
import { LogOut } from './component/LogOut';
function App() {
  return (<>
    <Provider store={store}>
      <RouterPage>
        <div className="App">
          <Login />
          <CreateAccount />
          <Post />
          <PostHistory />
        </div>
      </RouterPage>
    </Provider>
  </>);
}

export default App;

{/* {CreateAccountF({ name: 'Eli', email: 'fjdhjd@gmail.com', password: '567' })} */ }

{/* {LoginF()} */ }

