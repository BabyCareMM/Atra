import { Provider } from 'react-redux';
import './App.css';
import CreateAccount from './component/CreateAccount';
import Login from './component/Login';
import store from './store/store';


// import { post } from './services/post'
import { CreateAccount as CreateAccountF, hello, Login as LoginF } from './services/user'
import { useEffect } from 'react';
function App() {
  return (<>
  <Provider store={store}>
      <div className="App">
      <CreateAccount />

      </div>
    </Provider>
    {/* {LoginF()} */}
{/* {post.addChosenPost({ postId:1, title:'test', body:'test', date:Date.now(),users:0 })} */ }
{/* <Login />
      

    {/* {useEffect(() => {
      { CreateAccountF({ name: 'Yehuda', email: 'yehuda@gmail.com', password: '0293' }) }
    })} */}
  </>);
}

export default App;

{/* {CreateAccountF({ name: 'Eli', email: 'fjdhjd@gmail.com', password: '567' })} */ }

{/* {LoginF()} */ }

