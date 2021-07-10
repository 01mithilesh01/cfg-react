import React, {useState} from 'react'

const Validate = () => {
  let formStyle={
    background: 'white',
    padding: '1.5em',
    borderRadius: '1em'
  }
  let formGroupStyle={
    justifyContent:'center',
    alignItems: 'center'
  }
  let labelStyle={
    float: 'left',
    margin: '7px 0px',
    fontWeight: '500',
    fontFamily: 'Fira Sans, sans-serif'
  }
  let textStyle={
    width: '95%'
  }
  let headingStyle={
    fontWeight: '500',
    fontFamily: 'Fira Sans, sans-serif'
  }
  let containerStyle={
    display: 'flex',
    fontWeight: '400',
    fontFamily: 'Fira Sans, sans-serif',
    width: '100%',
    height: '100%'
  }
  let rootStyle={
    width: '29vw',
    margin: '55px 490px',
    background: '#e1edf7',
    borderRadius:'1em',
    padding: '30px 20px'
  }
  let buttonStyle={
    width:'40%',
    margin:'5px',
    display:'inline'
  }

  return (
    <div style={rootStyle}>
    <div className='container' style={containerStyle}>
    <form className="register" id="register" style = {formStyle}>
      <h2 className="form-title" style={headingStyle}>Contribution</h2><br /><br />

      <div className="form-group" style = {formGroupStyle}>
        <label htmlFor="" style={labelStyle}>
          &nbsp; Event Details
        </label>
      </div>
      <br />

      <div className="form-group" style = {formGroupStyle}>
        <label htmlFor="name" style={labelStyle}>
        &nbsp; Your Contribution  
        </label>
        <input
          type="text"
          name="username"
          className="form-control username"
          autoComplete="off"
          placeholder="Describe your work" 
          style={textStyle}
        />
      </div>

      <div className="form-group" style = {formGroupStyle}>
        <label htmlFor="hours" style={labelStyle}>
          &nbsp; Number of hours contributed
        </label>
        <input
          type="password"
          name="password"
          className="form-control password"
          autoComplete="off"
          placeholder="Enter no. of hours"
          style={textStyle}
        ></input>
      </div>
      <br />
      <div className='button'>
      <button type="submit" className="btn btn-secondary btn-block" style={buttonStyle}>
          Choose Image
      </button>
      <button type="submit" className="btn btn-primary btn-block" style={buttonStyle}>
          Upload Image
      </button>  
      <div className="form-group" style = {formGroupStyle}>
      <br /><button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        </div>
        <p className="text-right"><br />
          Your work will be reviewed shortly. <br/>
          <a href="/">Check out other events to volunteer</a>
        </p>
      </div>
    </form>
    </div>
    </div>
  )
}

export default Validate;

