import React, { useState } from 'react'
import { connect } from "react-redux";
import { CreateAccount as createAccountService } from '../services/user'
import { actions } from '../store/actions';
import { Redirect, withRouter } from "react-router-dom";
import { useHistory } from 'react-router-dom';


const mapStateToProps = (state) => {
  return { ...state, user: state.userReducer.user || [] }
}
const mapDispatchToProps = (dispatch) => ({
  setUser: (loggedUser) => dispatch(actions.setUser(loggedUser))
})

const CreateAccount = withRouter(function CreateAccount(props) {
  const history = useHistory();
  const [nameI, setName] = useState('');
  const [emailI, setEmail] = useState('');
  const [passwordI, setPassword] = useState('');

  function createAccountHandler(e) {
    e.preventDefault();
    createAccountService({ name: nameI, email: emailI, password: passwordI })
      .then(res => {
        props.setUser({ name: res.data.name, id: res.data._id });
        history.push('/posts')
      })
      .catch((err) => {
        alert('err in createAccount' + err)
      })
    setName('')
    setEmail('')
    setPassword('')
  }
  function redirectHandler() {
    history.push('/login');
  }
  return (<>
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <form>
          <input type="text" id="name" class="fadeIn first" name="name" placeholder="name" onChange={e => setName(e.target.value)} />
          <input type="text" id="email" class="fadeIn second" name="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
          <input type="text" id="password" class="fadeIn third" name="createAccount" placeholder="password" onChange={e => setPassword(e.target.value)} />
          <input onClick={(e) => createAccountHandler(e)} type="submit" class="fadeIn fourth" value="Create Account" />
        </form>
        <div id="formFooter">
          <a onClick={redirectHandler} class="underlineHover" href="#">Back to login</a>
        </div>
      </div>
    </div>
  </>)

}
)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccount);