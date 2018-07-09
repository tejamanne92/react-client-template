import { connect } from 'react-redux';
import LoginComponent from './login.component';
import { loginWithEmail } from '../../actions/login.action';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  return state.login;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        doLoginWithEmail: (loginDetails)=>{
          dispatch(loginWithEmail(ownProps.history, loginDetails));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent));
