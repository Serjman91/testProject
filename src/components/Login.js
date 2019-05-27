import React, {Component} from "react";
import history from '../utils/history';
import FacebookLogin from 'react-facebook-login';

class Login extends Component {
  responseFacebook(response) {
    localStorage.setItem('userToken', response.accessToken);
    history.push('/');
  };

  render() {
    return (
      <div className="page-container">
        <div className="title">
          Please, Login!
        </div>
        <div className="content-container">
          <FacebookLogin
            appId="488849558521724"
            fields="name,email,picture"
            callback={this.responseFacebook}
          />
        </div>

      </div>
    );
  }
}

export default Login;