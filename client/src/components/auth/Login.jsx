import React, { Component } from 'react';
//  libs
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
//  components
import TextFieldGroup from '../common/TextFieldGroup';
//  actions
import { loginUser } from '../../actions/authActions';

class Login extends Component {
  static propTypes = {
    loginUser: func.isRequired,
    auth: object.isRequired,
    errors: object,
    history: object.isRequired
  };

  state = {
    email: '',
    password: '',
    errors: {}
  };

  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  };

  UNSAFE_componentWillReceiveProps = nextProps => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { email, password, errors } = this.state;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your DevConnector account
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Email Address"
                  type="email"
                  value={email}
                  error={errors.email}
                  name="email"
                  onChange={this.onChange}
                />
                <TextFieldGroup
                  placeholder="Password"
                  type="password"
                  value={password}
                  error={errors.password}
                  name="password"
                  onChange={this.onChange}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
