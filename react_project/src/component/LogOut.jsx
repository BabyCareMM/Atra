import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actions } from "../store/actions";



const mapStateToProps = (state) => {
    return { ...state, user: state.userReducer.user || [] }
}

//component
const LogOut = withRouter(function LogOut(props) {
    const { history } = props;
    const user = props.user.name;

    return (<>
        <h1 style={{'color':'#e78f09', 'textAlign':"center"}}>Hello {user} 😍</h1>
        <main>
            {props.children}
        </main>
    </>)
})
export default connect(
    mapStateToProps,
    null
)(LogOut);