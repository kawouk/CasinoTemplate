import React from 'react'

function Register() {
  return (
    <div className="register login-page">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 col-md-8">
                    <div className="reg-body">
                        <form>
                            <h4 className="sub-title">Login to your account</h4>
                            <input type="text" placeholder="User Name*"/>
                            <input type="password" placeholder="Password*"/>
                            <button className="btn-form def-btn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register