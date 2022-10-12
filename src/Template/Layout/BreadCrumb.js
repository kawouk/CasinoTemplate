import React from 'react'

function BreadCrumb(props) {
  return (
    <div className="breadcrumb-miscoo">
            <div className="breadcrumb-img">
                <img src="assets/img/breadcrumb.png" alt=""/>
                <img src="assets/img/breadcrumb.png" alt=""/>
                <img src="assets/img/breadcrumb.png" alt=""/>
                <img src="assets/img/breadcrumb.png" alt=""/>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="breadcrumb-content">
                            <h2 className="title">{props.Title}</h2>
                            <p>{props.SubTitle}</p>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li className="arrow">
                                    <i className="fas fa-angle-right"></i>
                                </li>
                                <li>
                                    Login
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BreadCrumb