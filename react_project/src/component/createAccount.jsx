import React, { useState } from 'react'
import {connect } from "react-redux";
import {CreateAccount as createAccountService} from '../services/user'

const mapStateToProps = (state) =>{
  return {...state, user: state.userReducer.user || [] }
}

function CreateAccount(){

const [nameI,setName]=useState('');
const [emailI,setEmail]=useState('');
const [passwordI,setPassword]=useState('');

function createAccountHandler(){
  createAccountService({name:nameI,email:emailI,password:passwordI})
  setName('')
  setEmail('')
  setPassword('')
}

    return (<>
        <div className="wrapper fadeInDown">
            <div id="formContent">
        {/* // <!-- Tabs Titles --> */}
    
        {/* // <!-- Icon --> */}
            {/* <div class="fadeIn first">
            <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />
            </div> */}
    
        {/* // <!-- createAccount Form --> */}
            <form>
            <input type="text" id="name" class="fadeIn first" name="name" placeholder="name" onChange={e=> setName(e.target.value)}/>
            <input type="text" id="email" class="fadeIn second" name="email" placeholder="email" onChange={e=> setEmail(e.target.value)}/>
            <input type="text" id="password" class="fadeIn third" name="createAccount" placeholder="password" onChange={e=> setPassword(e.target.value)}/>
            <input onClick={createAccountHandler} type="submit" class="fadeIn fourth" value="Create Account"/>
            </form>
    
      </div>
    </div> 
    </>)
    
    }

    export default connect(
      mapStateToProps,
      null
  )(CreateAccount);