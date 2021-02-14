import {connect } from "react-redux";

function CreateAccount(){

  const mapStateToProps = (state) =>{
    return {...state, user: state.userReducer.user || [] }
}

    return (<>
        <div className="wrapper fadeInDown">
            <div id="formContent">
        {/* // <!-- Tabs Titles --> */}
    
        {/* // <!-- Icon --> */}
            <div class="fadeIn first">
            <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
            </div>
    
        {/* // <!-- createAccount Form --> */}
            <form>
            <input type="text" id="name" class="fadeIn first" name="name" placeholder="name"/>
            <input type="text" id="email" class="fadeIn second" name="email" placeholder="email"/>
            <input type="text" id="password" class="fadeIn third" name="createAccount" placeholder="password"/>
            <input type="submit" class="fadeIn fourth" value="Create Account"/>
            </form>
    
        {/* // <!-- Remind Passowrd --> */}
        {/* <div id="formFooter">
          <a class="underlineHover" href="#">Forgot Password?</a>
        </div> */}
    
      </div>
    </div> 
    </>)
    
    }

    export default connect(
      mapStateToProps,
      null
  )(Items);