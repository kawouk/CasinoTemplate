import React from "react";
import TopNav from "../Layout/TopNav";
import Preloder from "../Layout/Preloder";
import Footer from "../Layout/Footer";
import HomeBanner from "./Components/HomeBanner";

function Home(props) {
  return (
    <>
      {/* <!-- preloader begin --> */}
      <Preloder/>
      {/* <!-- preloader end --> */}

      {/* <!-- header section begin --> */}
      <TopNav auth={props.auth} setIsAuth={props.setIsAuth}/>
      {/* <!-- header section end --> */}

      {/* <!-- banner section begin --> */}
      <HomeBanner/>
      {/* <!-- banner section end --> */}

      {/* <!-- about section begin --> */}
      <div className="about" id="about">
        <div className="container">
          <div className="feature">
            <div className="row">
              <div className="col-xl-3 col-lg-3">
                <div className="single-feature">
                  <div className="part-icon">
                    <img src="assets/img/games/assets-1.png" alt="" />
                  </div>
                  <h4 className="feature-title">Online Casino</h4>
                  <a href="#0" className="def-btn def-small">
                    Play Now{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="long-arrow-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="svg-inline--fa fa-long-arrow-right fa-w-14 fa-fw fa-2x"
                    >
                      <path
                        fill="currentColor"
                        d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"
                        className=""
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="single-feature">
                  <div className="part-icon">
                    <img src="assets/img/games/assets-3.png" alt="" />
                  </div>
                  <h4 className="feature-title">Club Poker</h4>
                  <a href="#0" className="def-btn def-small">
                    Play Now{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="long-arrow-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="svg-inline--fa fa-long-arrow-right fa-w-14 fa-fw fa-2x"
                    >
                      <path
                        fill="currentColor"
                        d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"
                        className=""
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="single-feature">
                  <div className="part-icon">
                    <img src="assets/img/games/assets-7.png" alt="" />
                  </div>
                  <h4 className="feature-title">Royal casino</h4>
                  <a href="#0" className="def-btn def-small">
                    Play Now{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="long-arrow-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="svg-inline--fa fa-long-arrow-right fa-w-14 fa-fw fa-2x"
                    >
                      <path
                        fill="currentColor"
                        d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"
                        className=""
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="single-feature">
                  <div className="part-icon">
                    <img src="assets/img/games/assets-6.png" alt="" />
                  </div>
                  <h4 className="feature-title">Slots 375</h4>
                  <a href="#0" className="def-btn def-small">
                    Play Now{" "}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="long-arrow-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="svg-inline--fa fa-long-arrow-right fa-w-14 fa-fw fa-2x"
                    >
                      <path
                        fill="currentColor"
                        d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"
                        className=""
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-xl-between justify-content-lg-between justify-content-sm-center">
            <div className="col-xl-4 col-lg-4 col-sm-10 col-md-6">
              <div className="part-txt">
                <h2>Games are fun with Misco</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipis icing elit.
                  Distinctio architecto nobis totam odio aliquam repellat quam
                  rem harum alias animi ducimus quibusdam, sint placeat{" "}
                  <span>
                    "omnis dolores odit ipsum ut autem! quam rem harum alias
                    animi ducimus quibusdam, sint placeat omnis dolores odit
                    ipsum ut autem!"
                  </span>
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 d-xl-block d-lg-block d-md-none">
              <div className="part-img">
                <div className="single-img">
                  <img src="assets/img/about-img.jpg" alt="img" />
                  <a
                    href="#"
                    data-video-id="5hhlW_SYJBA"
                    className="js-video-button play-button"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="play"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="svg-inline--fa fa-play fa-w-14 fa-fw fa-2x"
                    >
                      <path
                        fill="currentColor"
                        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6zm-16.2 55.1l-352 208C45.6 483.9 32 476.6 32 464V47.9c0-16.3 16.4-18.4 24.1-13.8l352 208.1c10.5 6.2 10.5 21.4.1 27.6z"
                        className=""
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-10 col-md-6">
              <div className="part-txt right">
                <h3>So, You should choose it </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipis icing elit.
                  Distinctio architecto nobis totam odio aliquam repellat quam
                  rem harum alias animi ducimus quibusdam, sint placeat omnis
                  dolores odit ipsum ut autem! quam rem harum alias animi
                  ducimus quibusdam, sint placeat omnis dolores odit ipsum ut
                  autem!
                </p>
                <a href="#0" className="def-btn">
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- about section end --> */}

      {/* <!-- iq feature begin --> */}
      <div className="iq-feature" id="feature">
        <div className="container">
          <div className="row justify-content-xl-end justify-content-lg-end justify-content-sm-center">
            <div className="col-xl-5 col-lg-6 col-sm-10 col-md-7 d-xl-flex d-lg-flex d-block align-items-center">
              <div className="part-text">
                <h2>Use IQN easily in Misco</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi iusto, fuga consequuntur laudantium porro suscipit
                  minima, delectus commodi possimus animi nesciunt neque hic
                  fugiat. Alias sequi consectetur voluptate voluptatum quaerat.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam reprehenderit molestiae in, illo similique.
                </p>
                <a href="#0" className="def-btn">
                  play now
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-sm-10 col-md-5 offset-xl-1 offset-lg-1 offset-0">
              <div className="part-img">
                {/* <img src="./ssets/img/iq-img.jpg" alt="" /> */}
                <img
                  src="https://i1.sndcdn.com/artworks-000089005582-vr2gbk-t500x500.jpg"
                  alt=""
                />

                <div className="part-video">
                  <a
                    href="#"
                    data-video-id="5hhlW_SYJBA"
                    className="js-video-button play-button"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fal"
                      data-icon="play"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="svg-inline--fa fa-play fa-w-14 fa-fw fa-2x"
                    >
                      <path
                        fill="currentColor"
                        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6zm-16.2 55.1l-352 208C45.6 483.9 32 476.6 32 464V47.9c0-16.3 16.4-18.4 24.1-13.8l352 208.1c10.5 6.2 10.5 21.4.1 27.6z"
                        className=""
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="part-features">
            <div className="row justify-content-sm-center justify-content-md-start">
              <div className="col-xl-4 col-lg-4 col-sm-10 col-md-6">
                <div className="single-feature">
                  <img
                    className="icon"
                    src="assets/img/svg/money-exchange.svg"
                    alt=""
                  />
                  <h3 className="title">Trading Exchanges</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-10 col-md-6">
                <div className="single-feature">
                  <img
                    className="icon"
                    src="assets/img/svg/wallet.svg"
                    alt=""
                  />
                  <h3 className="title">Crypto Wallets</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-10 col-md-6">
                <div className="single-feature">
                  <img
                    className="icon"
                    src="assets/img/svg/analytics.svg"
                    alt=""
                  />
                  <h3 className="title">Portfolio & Trackers</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- iq feature end --> */}

      {/* <!-- game begin --> */}
      <div className="games" id="games">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-sm-10">
              <div className="section-title style-2">
                <h2>thousands of free online games</h2>
                <p>
                  Misco has thousands of free online games for all generation.
                  Play action, racing, sports, and other fun games for free at
                  Misco
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="game-menu">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#0">
                      <span className="icon icon-1">s</span>
                      <span className="text">All Genres</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-2">
                        <img src="assets/img/svg/casino.svg" alt="" />
                      </span>
                      <span className="text">Slots</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-3"></span>
                      <span className="text">Mega Matrix</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-4"></span>
                      <span className="text">Casino & Poker</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-5">
                        <img src="assets/img/svg/power-ball.svg" alt="" />
                      </span>
                      <span className="text">Lottery</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-6">
                        <img src="assets/img/svg/jackpot.svg" alt="" />
                      </span>
                      <span className="text">Jackpot Slots</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-7"></span>
                      <span className="text">Trending Now</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-8"></span>
                      <span className="text">New Release</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-9"></span>
                      <span className="text">Most Popular</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-8">
              <div className="all-games anim-change">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img
                          src="https://i1.sndcdn.com/artworks-000089005582-vr2gbk-t500x500.jpg"
                          alt=""
                        />
                        <img
                          className="icon-img"
                          //   src="assets/img/games/icon-1.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-2.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-2.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-3.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-5.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-4.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-3.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-5.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-4.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-6.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-6.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="https://unsplash.com/s/photos/human" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-2.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-8.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-5.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="single-game">
                      <div className="part-img">
                        <img src="assets/img/games/assets-7.jpg" alt="" />
                        <img
                          className="icon-img"
                          src="assets/img/games/icon-1.png"
                          alt=""
                        />
                      </div>
                      <div className="part-text">
                        <h4 className="game-title">IceBall 71</h4>
                        <a href="#0" className="def-btn def-small">
                          Play Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- game end --> */}

      {/* <!-- recent activity begin --> */}
      <div className="recent-activity">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-sm-10">
              <div className="section-title">
                <h2>Our recent mobility</h2>
                <p>
                  Misco has thousands of free online games for all generation.
                  Play action, racing, sports, and other fun games for free at
                  Misco
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="single-col">
                <h3 className="title">Our latest winners</h3>
                <div className="activity-list">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-6">
                      <div className="single-activity">
                        <div className="part-img">
                          <img src="assets/img/games/assets-1.jpg" alt="" />
                        </div>
                        <div className="part-text">
                          <p>
                            <span className="player-name">Mukta</span> won 2
                            minutes ago
                            <br /> on game of{" "}
                            <a href="#0" className="game-name">
                              Mega Matrix
                            </a>
                          </p>
                          <span className="winning-amount">$42.02</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6">
                      <div className="single-activity">
                        <div className="part-img">
                          <img src="assets/img/games/assets-2.jpg" alt="" />
                        </div>
                        <div className="part-text">
                          <p>
                            <span className="player-name">Shehwar</span> won 2
                            minutes ago
                            <br /> on game of{" "}
                            <a href="#0" className="game-name">
                              Royal Casino
                            </a>
                          </p>
                          <span className="winning-amount">$35.20</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6">
                      <div className="single-activity">
                        <div className="part-img">
                          <img src="assets/img/games/assets-3.jpg" alt="" />
                        </div>
                        <div className="part-text">
                          <p>
                            <span className="player-name">Maria</span> won 2
                            minutes ago
                            <br /> on game of{" "}
                            <a href="#0" className="game-name">
                              Poker Club
                            </a>
                          </p>
                          <span className="winning-amount">$21.41</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6">
                      <div className="single-activity">
                        <div className="part-img">
                          <img src="assets/img/games/assets-4.jpg" alt="" />
                        </div>
                        <div className="part-text">
                          <p>
                            <span className="player-name">Drubo</span> won 2
                            minutes ago
                            <br /> on game of{" "}
                            <a href="#0" className="game-name">
                              Slots 375
                            </a>
                          </p>
                          <span className="winning-amount">$10.50</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="single-col">
                <h3 className="title">Jackpot trigger wins</h3>
                <div className="activity-list jackpot-triggers-win">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-6">
                      <div className="single-activity">
                        <div className="part-img">
                          <img src="assets/img/games/assets-3.jpg" alt="" />
                        </div>
                        <div className="part-text">
                          <span className="winning-amount">$4,500.05</span>
                          <p>
                            Player ID:{" "}
                            <span className="player-name">Mukta</span> <br />{" "}
                            Game:{" "}
                            <a href="#0" className="game-name">
                              Jackpot Club
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6">
                      <div className="single-activity">
                        <div className="part-img">
                          <img src="assets/img/games/assets-3.jpg" alt="" />
                        </div>
                        <div className="part-text">
                          <span className="winning-amount">$3,505.30</span>
                          <p>
                            Player ID:{" "}
                            <span className="player-name">Sraddha</span> <br />{" "}
                            Game:{" "}
                            <a href="#0" className="game-name">
                              Jackpot Club
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6">
                      <div className="single-activity">
                        <div className="part-img">
                          <img src="assets/img/games/assets-3.jpg" alt="" />
                        </div>
                        <div className="part-text">
                          <span className="winning-amount">$2,100.11</span>
                          <p>
                            Player ID:{" "}
                            <span className="player-name">Anushka</span> <br />{" "}
                            Game:{" "}
                            <a href="#0" className="game-name">
                              Jackpot Club
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6">
                      <div className="single-activity">
                        <div className="part-img">
                          <img src="assets/img/games/assets-3.jpg" alt="" />
                        </div>
                        <div className="part-text">
                          <span className="winning-amount">$1,002.02</span>
                          <p>
                            Player ID:{" "}
                            <span className="player-name">Genelia</span> <br />{" "}
                            Game:{" "}
                            <a href="#0" className="game-name">
                              Jackpot Club
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="single-col">
                <h3 className="title">All Time Top Winners</h3>
                <div className="activity-list top-winner">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-6">
                      <div className="single-activity">
                        <div className="part-img">
                          <img src="assets/img/user-icon/icon-1.png" alt="" />
                        </div>
                        <div className="part-text">
                          <p>
                            Name:{" "}
                            <span className="player-name">Mukta Martin</span>{" "}
                            <br /> Game:{" "}
                            <a href="#0" className="game-name">
                              Mega Matrix
                            </a>
                          </p>
                          <span className="winning-amount">$4,200.02</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6">
                      <div className="single-activity">
                        <div className="part-img">
                          <img src="assets/img/user-icon/icon-2.png" alt="" />
                        </div>
                        <div className="part-text">
                          <p>
                            <span className="player-name">Mukta</span> won 2
                            minutes ago
                            <br /> on game of{" "}
                            <a href="#0" className="game-name">
                              Mega Matrix
                            </a>
                          </p>
                          <span className="winning-amount">$3,500.20</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6">
                      <div className="single-activity">
                        <div className="part-img">
                          <img src="assets/img/user-icon/icon-3.png" alt="" />
                        </div>
                        <div className="part-text">
                          <p>
                            <span className="player-name">Mukta</span> won 2
                            minutes ago
                            <br /> on game of{" "}
                            <a href="#0" className="game-name">
                              Mega Matrix
                            </a>
                          </p>
                          <span className="winning-amount">$2,100.41</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6">
                      <div className="single-activity">
                        <div className="part-img">
                          <img src="assets/img/user-icon/icon-4.png" alt="" />
                        </div>
                        <div className="part-text">
                          <p>
                            <span className="player-name">Mukta</span> won 2
                            minutes ago
                            <br /> on game of{" "}
                            <a href="#0" className="game-name">
                              Mega Matrix
                            </a>
                          </p>
                          <span className="winning-amount">$1,000.50</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- recent activity end --> */}

      {/* <!-- cta begin --> */}
      <div className="cta">
        <div className="container">
          <div className="row justify-content-xl-between justify-content-lg-between justify-content-sm-center">
            <div className="col-xl-7 col-lg-7 col-md-8 col-sm-10">
              <h2>
                Miscoo - Where everything are
                <br /> possible with crypto gaming
              </h2>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10">
              <a href="#0" className="def-btn play-now-btn">
                Play Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- cta end --> */}

      {/* <!-- latest summury begin --> */}
      <div className="latest-summury">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-sm-10">
              <div className="section-title style-2">
                <h2>Latest Bets summery</h2>
                <p>
                  Misco has thousands of free online games for all generation.
                  Play action, racing, sports, and other fun games for free at
                  Misco
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <div className="game-menu">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#0">
                      <span className="icon icon-1">s</span>
                      <span className="text">All Bets</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-2">
                        <img src="assets/img/svg/casino.svg" alt="" />
                      </span>
                      <span className="text">High Rolls</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-3"></span>
                      <span className="text">Statics</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#0">
                      <span className="icon icon-4"></span>
                      <span className="text">Top Players</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9">
              <div className="all-bets">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="single-result">
                      <div className="part-top">
                        <div className="user-img">
                          <img src="assets/img/games/assets-7.jpg" alt="" />
                        </div>
                        <div className="part-info">
                          <span className="name">Nilidiano Junior</span>
                          <span className="bet-id">Bet ID : 32,156,52</span>
                          <span className="game">Mega Matrix</span>
                        </div>
                      </div>
                      <div className="part-bottom">
                        <ul>
                          <li>
                            <span className="title">Coin:</span>
                            <span className="descr">BTC</span>
                          </li>
                          <li>
                            <span className="title">Bet:</span>
                            <span className="descr">0.1500</span>
                          </li>
                          <li>
                            <span className="title">Win:</span>
                            <span className="descr">0.1750</span>
                          </li>
                          <li>
                            <span className="title">Profit</span>
                            <span className="descr">0.0250</span>
                          </li>
                          <li>
                            <span className="title">Payout</span>
                            <span className="descr">2.0x</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="single-result">
                      <div className="part-top">
                        <div className="user-img">
                          <img src="assets/img/games/assets-2.jpg" alt="" />
                        </div>
                        <div className="part-info">
                          <span className="name">Mukta Marten</span>
                          <span className="bet-id">Bet ID : 32,156,52</span>
                          <span className="game">Royal Casino</span>
                        </div>
                      </div>
                      <div className="part-bottom">
                        <ul>
                          <li>
                            <span className="title">Coin:</span>
                            <span className="descr">BTC</span>
                          </li>
                          <li>
                            <span className="title">Bet:</span>
                            <span className="descr">0.1500</span>
                          </li>
                          <li>
                            <span className="title">Win:</span>
                            <span className="descr">0.1750</span>
                          </li>
                          <li>
                            <span className="title">Profit</span>
                            <span className="descr">0.0250</span>
                          </li>
                          <li>
                            <span className="title">Payout</span>
                            <span className="descr">2.0x</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="single-result">
                      <div className="part-top">
                        <div className="user-img">
                          <img src="assets/img/games/assets-3.jpg" alt="" />
                        </div>
                        <div className="part-info">
                          <span className="name">Saif Al huda</span>
                          <span className="bet-id">Bet ID : 32,156,52</span>
                          <span className="game">Poker Club</span>
                        </div>
                      </div>
                      <div className="part-bottom">
                        <ul>
                          <li>
                            <span className="title">Coin:</span>
                            <span className="descr">BTC</span>
                          </li>
                          <li>
                            <span className="title">Bet:</span>
                            <span className="descr">0.1500</span>
                          </li>
                          <li>
                            <span className="title">Win:</span>
                            <span className="descr">0.1750</span>
                          </li>
                          <li>
                            <span className="title">Profit</span>
                            <span className="descr">0.0250</span>
                          </li>
                          <li>
                            <span className="title">Payout</span>
                            <span className="descr">2.0x</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="single-result">
                      <div className="part-top">
                        <div className="user-img">
                          <img src="assets/img/games/assets-4.jpg" alt="" />
                        </div>
                        <div className="part-info">
                          <span className="name">Jordan Smell</span>
                          <span className="bet-id">Bet ID : 32,156,52</span>
                          <span className="game">Slots 375</span>
                        </div>
                      </div>
                      <div className="part-bottom">
                        <ul>
                          <li>
                            <span className="title">Coin:</span>
                            <span className="descr">BTC</span>
                          </li>
                          <li>
                            <span className="title">Bet:</span>
                            <span className="descr">0.1500</span>
                          </li>
                          <li>
                            <span className="title">Win:</span>
                            <span className="descr">0.1750</span>
                          </li>
                          <li>
                            <span className="title">Profit</span>
                            <span className="descr">0.0250</span>
                          </li>
                          <li>
                            <span className="title">Payout</span>
                            <span className="descr">2.0x</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="single-result">
                      <div className="part-top">
                        <div className="user-img">
                          <img src="assets/img/games/assets-5.jpg" alt="" />
                        </div>
                        <div className="part-info">
                          <span className="name">Jonathan Djerby</span>
                          <span className="bet-id">Bet ID : 32,156,52</span>
                          <span className="game">Poker Club</span>
                        </div>
                      </div>
                      <div className="part-bottom">
                        <ul>
                          <li>
                            <span className="title">Coin:</span>
                            <span className="descr">BTC</span>
                          </li>
                          <li>
                            <span className="title">Bet:</span>
                            <span className="descr">0.1500</span>
                          </li>
                          <li>
                            <span className="title">Win:</span>
                            <span className="descr">0.1750</span>
                          </li>
                          <li>
                            <span className="title">Profit</span>
                            <span className="descr">0.0250</span>
                          </li>
                          <li>
                            <span className="title">Payout</span>
                            <span className="descr">2.0x</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-sm-6">
                    <div className="single-result">
                      <div className="part-top">
                        <div className="user-img">
                          <img src="assets/img/games/assets-6.jpg" alt="" />
                        </div>
                        <div className="part-info">
                          <span className="name">Nilidiano Junior</span>
                          <span className="bet-id">Bet ID : 32,156,52</span>
                          <span className="game">Poker Club</span>
                        </div>
                      </div>
                      <div className="part-bottom">
                        <ul>
                          <li>
                            <span className="title">Coin:</span>
                            <span className="descr">BTC</span>
                          </li>
                          <li>
                            <span className="title">Bet:</span>
                            <span className="descr">0.1500</span>
                          </li>
                          <li>
                            <span className="title">Win:</span>
                            <span className="descr">0.1750</span>
                          </li>
                          <li>
                            <span className="title">Profit</span>
                            <span className="descr">0.0250</span>
                          </li>
                          <li>
                            <span className="title">Payout</span>
                            <span className="descr">2.0x</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="table-cover">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Coin</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Predict</th>
                        <th scope="col">Payout</th>
                        <th scope="col">Profit</th>
                        <th scope="col">Reward</th>
                        <th scope="col">Account ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <img src="assets/img/coin/coin-1.png" alt="" />
                        </th>
                        <td>Tanun07</td>
                        <td>12.245.0</td>
                        <td>252.5</td>
                        <td className="profit">5112.5</td>
                        <td>001.52.80</td>
                        <td>ID250001</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img src="assets/img/coin/coin-2.png" alt="" />
                        </th>
                        <td>Tanun07</td>
                        <td>12.245.0</td>
                        <td>252.5</td>
                        <td className="profit">5112.5</td>
                        <td>001.52.80</td>
                        <td>ID250001</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img src="assets/img/coin/coin-3.png" alt="" />
                        </th>
                        <td>Tanun07</td>
                        <td>12.245.0</td>
                        <td>252.5</td>
                        <td className="profit">5112.5</td>
                        <td>001.52.80</td>
                        <td>ID250001</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img src="assets/img/coin/coin-4.png" alt="" />
                        </th>
                        <td>Tanun07</td>
                        <td>12.245.0</td>
                        <td>252.5</td>
                        <td className="profit">5112.5</td>
                        <td>001.52.80</td>
                        <td>ID250001</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img src="assets/img/coin/coin-5.png" alt="" />
                        </th>
                        <td>Tanun07</td>
                        <td>12.245.0</td>
                        <td>252.5</td>
                        <td className="profit">5112.5</td>
                        <td>001.52.80</td>
                        <td>ID250001</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img src="assets/img/coin/coin-1.png" alt="" />
                        </th>
                        <td>Tanun07</td>
                        <td>12.245.0</td>
                        <td>252.5</td>
                        <td className="profit">5112.5</td>
                        <td>001.52.80</td>
                        <td>ID250001</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <img src="assets/img/coin/coin-2.png" alt="" />
                        </th>
                        <td>Tanun07</td>
                        <td>12.245.0</td>
                        <td>252.5</td>
                        <td className="profit">5112.5</td>
                        <td>001.52.80</td>
                        <td>ID250001</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="view-more-btn text-center">
                  {/* <a href="#0" className="def-btn">Refresh Data<span className="icon-10"></span></span></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- latest summery end --> */}

      {/* <!-- partner begin --> */}
      <div className="partner">
        <div className="container">
          <div className="row justify-content-xl-between justify-content-lg-between justify-content-sm-center justify-content-md-start">
            <div className="col-xl-5 col-lg-6 col-md-9 col-sm-10 d-xl-flex d-lg-flex d-block align-items-center">
              <div className="part-text">
                <h2 className="title">Partnered with Misco</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia minima animi fugit qui, tenetur laudantium a sint at
                  aliquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  fugit qui, tenetur laudantium a sint at aliquam mollitia.
                </p>
                <a href="#0" className="def-btn">
                  Join WIth Us
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-10">
              <div className="part-partner-logo">
                <div className="row no-gutters">
                  <div className="col-xl-4 col-lg-4 col-sm-6 col-md-4">
                    <div className="single-logo">
                      <a href="#0">
                        <img src="assets/img/partner/sponsor-1.png" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-sm-6 col-md-4">
                    <div className="single-logo">
                      <a href="#0">
                        <img src="assets/img/partner/sponsor-2.png" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-sm-6 col-md-4">
                    <div className="single-logo">
                      <a href="#0">
                        <img src="assets/img/partner/sponsor-3.png" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-sm-6 col-md-4">
                    <div className="single-logo">
                      <a href="#0">
                        <img src="assets/img/partner/sponsor-5.png" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-sm-6 col-md-4">
                    <div className="single-logo">
                      <a href="#0">
                        <img src="assets/img/partner/sponsor-4.png" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-sm-6 col-md-4">
                    <div className="single-logo">
                      <a href="#0">
                        <img src="assets/img/partner/sponsor-6.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- partner end --> */}

      {/* <!-- blog begin --> */}
      <div className="news" id="blog">
        <div className="container news-container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-sm-10">
              <div className="section-title style-2">
                <h2>Misco Latest News</h2>
                <p>
                  Misco has thousands of free online games for all generation.
                  Play action, racing, sports, and other fun games for free at
                  Misco
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-sm-center justify-content-md-start">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
              <div className="single-news">
                <div className="part-img">
                  <img src="assets/img/news/news-1.jpg" alt="" />
                </div>
                <div className="part-text">
                  <h3 className="title">
                    Horizon: 0 Dawn system requirements are here
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eitse
                    labore et dolore magna aliqua. Ut enim ad minim veniam
                    laboris nisi ut aliquip exea commodo.
                  </p>
                  <a href="#0" className="def-btn def-small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
              <div className="single-news">
                <div className="part-img">
                  <img src="assets/img/news/news-3.jpg" alt="" />
                </div>
                <div className="part-text">
                  <h3 className="title">
                    A new mod adds the classic blocky sword into Witcher
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eitse
                    labore et dolore magna aliqua. Ut enim ad minim veniam
                    laboris nisi ut aliquip exea commodo.
                  </p>
                  <a href="#0" className="def-btn def-small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
              <div className="single-news">
                <div className="part-img">
                  <img src="assets/img/news/news-2.jpg" alt="" />
                </div>
                <div className="part-text">
                  <h3 className="title">
                    Marvel's Spider-Man: Game of the Year Edition Game{" "}
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing eitse
                    labore et dolore magna aliqua. Ut enim ad minim veniam
                    laboris nisi ut aliquip exea commodo.
                  </p>
                  <a href="#0" className="def-btn def-small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- blog end --> */}

      {/* <!-- payment gateways begin --> */}
      <div className="payment-gateway" id="payment">
        <div className="container">
          <div className="row justify-content-xl-between justify-content-lg-around justify-content-sm-center">
            <div className="col-xl-4 col-lg-4 col-sm-10 col-md-4 offset-xl-1 offset-lg-0 order-xl-0 order-lg-0 order-1">
              <div className="all-gateways">
                <img src="assets/img/crypto-currency.png" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-sm-10 col-md-7 d-xl-flex d-lg-flex d-sm-block d-md-block d-block align-items-center order-xl-2 order-lg-2 order-0">
              <div className="part-text">
                <h2 className="title">Wanna pay with Crytocurrency</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem placeat, iure possimus provident dicta dolorum? Rem
                  velit eius ipsam eligendi recusandae! Tempore magnam
                  exercitationem recusandae alias consectetur ipsa quibusdam
                  veniam?
                </p>
                <a href="#0" className="def-btn">
                  Pay Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- payment gateways end --> */}

      {/* <!-- testimonial begin --> */}
      <div className="testimonial" id="testimonial">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-sm-10">
              <div className="section-title style-2">
                <h2>Feedback to Misco</h2>
                <p>
                  Misco has thousands of free online games for all generation.
                  Play action, racing, sports, and other fun games for free at
                  Misco
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8 col-sm-10">
              <div className="testimonial-slider owl-carousel owl-theme">
                <div className="single-testimonial">
                  <div className="part-img">
                    <img
                      src="assets/img/testimonial/comment-user-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="part-text">
                    <i className="icon-for-quot fas fa-quote-left"></i>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sint nesciunt dignissimos laborum praesentium illo
                      dolorem, fuga commodi? Laudantium totam porro quod nihil
                      eius!
                    </p>
                    <span className="position">Player</span>
                    <span className="user-name">Illustino Calibia</span>
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="part-img">
                    <img
                      src="assets/img/testimonial/comment-user-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="part-text">
                    <i className="icon-for-quot fas fa-quote-left"></i>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sint nesciunt dignissimos laborum praesentium illo
                      dolorem, fuga commodi? Laudantium totam porro quod nihil
                      eius!
                    </p>
                    <span className="position">Player</span>
                    <span className="user-name">Illustino Calibia</span>
                  </div>
                </div>
                <div className="single-testimonial">
                  <div className="part-img">
                    <img
                      src="assets/img/testimonial/comment-user-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="part-text">
                    <i className="icon-for-quot fas fa-quote-left"></i>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sint nesciunt dignissimos laborum praesentium illo
                      dolorem, fuga commodi? Laudantium totam porro quod nihil
                      eius!
                    </p>
                    <span className="position">Player</span>
                    <span className="user-name">Illustino Calibia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- testimonial end --> */}

      {/* <!-- contact begin --> */}
      <div className="contact" id="contact">
        <div className="container container-contact">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-sm-10">
              <div className="section-title">
                <h2>Get in touch with us</h2>
                <p>
                  Misco has thousands of free online games for all generation.
                  Play action, racing, sports, and other fun games for free at
                  Misco
                </p>
              </div>
            </div>
          </div>
          <div className="bg-tamim">
            <div className="row justify-content-around">
              <div className="col-xl-6 col-lg-6 col-sm-10 col-md-6">
                <div className="part-form">
                  <form>
                    <input type="text" placeholder="Players Name" />
                    <input type="text" placeholder="Players Email" />
                    <textarea placeholder="Write to Us..."></textarea>
                    <button className="submit-btn def-btn" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-sm-10 col-md-6">
                <div className="part-address">
                  <div className="addressing">
                    <div className="single-address">
                      <h4>Our Office</h4>
                      <p>
                        1941 Romines Mill Road Irving, TX 75062
                        <br />
                        Texas, United States
                      </p>
                    </div>
                    <div className="single-address">
                      <h4>Email</h4>
                      <p>
                        DanielleHButeau@teleworm.us
                        <br />
                        CharlesTPride@armyspy.com
                      </p>
                    </div>
                    <div className="single-address">
                      <h4>Phone</h4>
                      <p>
                        +1 318-342-7639
                        <br />
                        +1 530-259-4087
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- contact end --> */}

      {/* <!-- footer begin --> */}
      <Footer/>
      {/* <!-- footer end --> */}
    </>
  );
}

export default Home;
