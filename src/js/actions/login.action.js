import axios from 'axios';

export const loginWithEmail = (history, loginDetails) => {
    return (dispatch) => {
        console.log('Login POST Object::::::::::::::' + JSON.stringify(loginDetails));
        let url = 'http://localhost:8080/money-flux-dataservice/login-security-check';
        let requestPayload = 'username=' + loginDetails.username + '&password=' + loginDetails.password;
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        return axios.post(url, requestPayload, axiosConfig).then((response) => {
            console.log('login success response::::' + JSON.stringify(response));
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: response.data
            });
            if (response.data.success) {
                history.push('/dashboard');
            } else {
                history.push('/login');
            }
        }, error => {
            console.log('login failure response::::' + JSON.stringify(error));
            dispatch({
                type: "LOGIN_FAILURE",
                payload: error
            });
            history.push('/login#failure');
        });
    }
}
