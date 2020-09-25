import React from "react";
import { connect } from "react-redux";
import AUTH_ACTIONS from "../../store/actions/auth-action";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfos: [],
      email: "",
      password: "",
    };
    this.props.dispatch(AUTH_ACTIONS.logout());
  }

  login = (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    this.props.dispatch(AUTH_ACTIONS.login(email, password));
  };
  handelChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    // console.log(
    //   this.state.userInfos.access_token,
    //   this.state.userInfos.account_id
    // );
    return (
      <div
        className="col-md-4 mx-auto"
        style={{ padding: "10% 0", height: "100vh" }}
      >
        <h2 className="text-center mb-5" style={{ color: "#03A9F4" }}>
          Welcome To FoodMall!!
        </h2>
        <form
          onSubmit={this.login}
          style={{ border: "1px solid #ddd", padding: "50px 20px" }}
        >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.handelChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.password}
              onChange={this.handelChange}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <div className="form-group text-center">
            <button
              type="submit"
              className="btn btn-primary w-100"
              //   onClick={this.login}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}
let reduxLogin = connect()(Login);
export default reduxLogin;
