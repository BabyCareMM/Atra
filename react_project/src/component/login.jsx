import { useState } from "react";
import { connect } from "react-redux";
import { Login as LoginService } from '../services/user';

const mapStateToProps = (state) => {
  return { ...state, user: state.userReducer.user || [] }
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function submitHandler() {
    LoginService({ email: email, password: password })
    setEmail('');
    setPassword('');
  }

  return (<>
    <div className="wrapper fadeInDown">
      <div id="formContent">
        {/* // <!-- Tabs Titles --> */}

        {/* // <!-- Icon --> */}
        <div class="fadeIn first">
          <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
        </div>

        {/* // <!-- Login Form --> */}
        <form>
          <input onChange={(e) => setEmail(e.target.value)} type="text" id="login" class="fadeIn second" name="login" placeholder="email" />
          <input onChange={(e) => setPassword(e.target.value)} type="text" id="password" class="fadeIn third" name="login" placeholder="password" />
          <input onClick={submitHandler} type="submit" class="fadeIn fourth" value="Log In" />
        </form>

        {/* // <!-- Remind Passowrd --> */}
        <div id="formFooter">
          <a class="underlineHover" href="#">Forgot Password?</a>
        </div>

      </div>
    </div>
  </>)

}

export default connect(
  mapStateToProps,
  null
)(Login);