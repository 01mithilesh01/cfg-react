import React from "react";

const SignIn = () => {
  let formStyle = {
    background: "white",
    padding: "1.5em",
    borderRadius: "1em",
  };
  let formGroupStyle = {
    justifyContent: "center",
    alignItems: "center",
  };
  let labelStyle = {
    float: "left",
    margin: "7px 0px",
    fontWeight: "500",
    fontFamily: "Fira Sans, sans-serif",
  };
  let textStyle = {
    width: "95%",
  };
  let headingStyle = {
    fontWeight: "500",
    fontFamily: "Fira Sans, sans-serif",
  };
  let containerStyle = {
    display: "flex",
    fontWeight: "400",
    fontFamily: "Fira Sans, sans-serif",
    width: "100%",
    height: "100%",
  };
  let rootStyle = {
    width: "29vw",
    margin: "55px 490px",
    background: "#e1edf7",
    borderRadius: "1em",
    padding: "30px 20px",
  };
  const handleSubmit = () => {};
  return (
    <div style={rootStyle}>
      <div className="container" style={containerStyle}>
        <form className="register" id="register" style={formStyle}>
          <h2 className="form-title" style={headingStyle}>
            Sign In
          </h2>
          <br />
          <br />

          <div className="form-group" style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>
              <i class="zmdi zmdi-email material-icons-name"></i>
              &nbsp; Email Address
            </label>
            <input
              type="email"
              name="email"
              className="form-control email"
              autoComplete="off"
              placeholder="Your email"
              style={textStyle}
            />
          </div>
          <br />

          <div className="form-group" style={formGroupStyle}>
            <label htmlFor="name" style={labelStyle}>
              <i class="zmdi zmdi-account material-icons-name"></i>
              &nbsp; Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control username"
              autoComplete="off"
              placeholder="Username"
              style={textStyle}
            />
          </div>
          <br />

          <div className="form-group" style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>
              <i class="zmdi zmdi-lock material-icons-name"></i>
              &nbsp; Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control password"
              autoComplete="off"
              placeholder="Enter your password"
              style={textStyle}
            ></input>
          </div>
          <br />

          <div className="form-group" style={formGroupStyle}>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onSubmit={handleSubmit}
            >
              Sign In
            </button>
            <p className="text-right">
              Not registered? <a href="/">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
