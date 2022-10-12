import React from 'react'

function GamesComponent() {
  return (
    <div className="games game-page">
    <div className="container">
           
        
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
                                <span className="icon icon-2"><img src="assets/img/svg/casino.svg" alt=""/></span>
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
                                    <img src="assets/img/svg/power-ball.svg" alt=""/>
                                </span>
                                <span className="text">Lottery</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#0">
                                <span className="icon icon-6">
                                    <img src="assets/img/svg/jackpot.svg" alt=""/>
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
                <div className="games-filter-area">
                    <div className="blog-search">
                        <form>
                            <input type="text" placeholder="seach the blog..."/>
                            <button><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                    <div className="filtering">
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter By Category
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action Games</a>
                                <a className="dropdown-item" href="#">Intellectual</a>
                                <a className="dropdown-item" href="#">Online Casino</a>
                                <a className="dropdown-item" href="#">Lottery Draw</a>
                                <a className="dropdown-item" href="#">Chess Master</a>
                            </div>
                        </div>
                    </div>
                    <div className="filtering">
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter By Tags
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                <a className="dropdown-item" href="#">blog</a>
                                <a className="dropdown-item" href="#">games</a>
                                <a className="dropdown-item" href="#">casino</a>
                                <a className="dropdown-item" href="#">racing</a>
                                <a className="dropdown-item" href="#">fighting</a>
                                <a className="dropdown-item" href="#">action</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-8">
                <div className="all-games anim-change">
                    <div className="title-cover">
                        <h4 className="games-title"><span className="icon icon-1"></span> All Games</h4>
                    </div>
                    <div className="row miscoo-row">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-1.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-1.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-2.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-2.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-3.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-5.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-4.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-3.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-5.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-4.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-6.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-6.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-9.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-2.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-8.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-5.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="all-games anim-change">
                    <div className="title-cover">
                        <h4 className="games-title"><span className="icon icon-8"></span> New Release</h4>
                    </div>
                    <div className="row miscoo-row">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-9.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-2.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-8.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-5.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-7.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-1.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-1.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-1.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-2.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-2.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-3.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-5.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-8.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-5.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-7.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-1.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="all-games anim-change">
                    <div className="title-cover">
                        <h4 className="games-title"><span className="icon icon-9"></span> Most Popular</h4>
                    </div>
                    <div className="row miscoo-row">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-4.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-3.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-5.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-4.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-6.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-6.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-9.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-2.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-8.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-5.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-7.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-1.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-2.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-2.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-game">
                                <div className="part-img">
                                    <img src="assets/img/games/assets-3.jpg" alt=""/>
                                    <img className="icon-img" src="assets/img/games/icon-5.png" alt=""/>
                                </div>
                                <div className="part-text">
                                    <h4 className="game-title">
                                        IceBall 71
                                    </h4>
                                    <a href="#0" className="def-btn def-small">Play Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default GamesComponent