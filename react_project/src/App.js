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
    {useEffect(() => {
      { CreateAccountF({ name: 'Eli', email: 'okfd@gmail.com', password: '567' }) }
    })}
  </>);
}

export default App;

{/* {CreateAccountF({ name: 'Eli', email: 'fjdhjd@gmail.com', password: '567' })} */ }

{/* {LoginF()} */ }

{/* <Provider store={store}>
      <div className="App">
    {/* {LoginF()} */}
{/* {post.addChosenPost({ postId:1, title:'test', body:'test', date:Date.now(),users:0 })} */ }
{/* <Login />
        <CreateAccount />
      </div>
    </Provider> */}
