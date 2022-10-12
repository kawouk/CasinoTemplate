import React from 'react'

function TopNav(props) {

  return (<div className="header">
  <div className="row">
    <div className="overflow-hidden col-xl-3 col-lg-3 d-xl-flex d-lg-flex d-block align-items-center">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-7 d-xl-block d-lg-block">
          <div className="logo">
            <a href="index.html">
              <img src="assets/img/logo.png" alt="LOGO" />
            </a>
          </div>
        </div>
        <div className="d-xl-none d-lg-none col-5 d-flex align-items-center justify-content-end">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
    <div className="col-xl-9 col-lg-9">
      <div className="top-header">
        <div className="row justify-content-end">
          <div className="col-xl-8 col-lg-8">
            <div className="top-right">
              <div className="buttons">
                <a href="#">support</a>
                <a href="register.html">
                  <i className="fas fa-sign-in-alt"></i> signup
                </a>
              </div>
              <form className="part-searchBar">
                <input type="text" placeholder="Search Games" />
                <button>
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <nav
              className="navbar navbar-expand-lg navbar-light"
              id="navbar"
            >
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="index.html">
                      home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      about
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="games.html">
                      Games
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contest.html">
                      Contest
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="blog.html">
                        Blog Post
                      </a>
                      <a
                        className="dropdown-item"
                        href="blog-details.html"
                      >
                        Blog Details
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown2"
                    >
                      <a className="dropdown-item" href="promotion.html">
                        Promotion
                      </a>
                      <a
                        className="dropdown-item"
                        href="affiliate-programming.html"
                      >
                        Affilite Program
                      </a>
                      <a
                        className="dropdown-item"
                        href="game-details.html"
                      >
                        Games Details
                      </a>
                      <a className="dropdown-item" href="faq.html">
                        Faq
                      </a>
                      {props.auth === true && <a className="dropdown-item" href="account.html">
                        My Account
                      </a>}
                      {props.auth === false && <a className="dropdown-item" href="register.html">
                        Register
                      </a>}
                      {props.auth === false && <a className="dropdown-item" href="login.html">
                        Login
                      </a>}
                    </div>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default TopNav