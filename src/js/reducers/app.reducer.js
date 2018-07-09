import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { Login } from './login.reducer';
import { Signup } from './signup.reducer';


export default combineReducers({
    routing: routerReducer,
    form: formReducer,
    login: Login,
    signup: Signup
});
