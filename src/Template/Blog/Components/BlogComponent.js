import React from 'react'

function BlogComponent() {
  return (
    <div className="news blog-page" id="blog">
    <div className="container">
        <div className="blog-filter-area">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 col-sm-10 col-md-4">
                    <div className="blog-search">
                        <form>
                            <input type="text" placeholder="seach the blog..."/>
                            <button><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-10 col-md-4">
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
                </div>
                <div className="col-xl-3 col-lg-3 col-sm-10 col-md-4">
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
        </div>

        <div className="row justify-content-sm-center justify-content-md-start">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
                <div className="single-news">
                    <div className="part-img">
                        <img src="assets/img/news/news-1.jpg" alt=""/>
                    </div>
                    <div className="part-text">
                        <h3 className="title">Horizon: 0 Dawn system requirements are here</h3>
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
                        <img src="assets/img/news/news-3.jpg" alt=""/>
                    </div>
                    <div className="part-text">
                        <h3 className="title">A new mod adds the classic blocky sword into Witcher</h3>
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
                        <img src="assets/img/news/news-2.jpg" alt=""/>
                    </div>
                    <div className="part-text">
                        <h3 className="title">Marvel's Spider-Man: Game of the Year Edition Game </h3>
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
                        <img src="assets/img/news/news-4.jpg" alt=""/>
                    </div>
                    <div className="part-text">
                        <h3 className="title">Horizon: 0 Dawn system requirements are here</h3>
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
                        <img src="assets/img/news/news-5.jpg" alt=""/>
                    </div>
                    <div className="part-text">
                        <h3 className="title">A new mod adds the classic blocky sword into Witcher</h3>
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
                        <img src="assets/img/news/news-6.jpg" alt=""/>
                    </div>
                    <div className="part-text">
                        <h3 className="title">Marvel's Spider-Man: Game of the Year Edition Game </h3>
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
        <div className="row justify-content-xl-start justify-content-lg-start justify-content-sm-center justify-content-md-start">
            <div className="col-xl-10 col-lg-10 col-sm-10">
                <div className="misco-pagination">
                    <ul>
                        <li>
                            <a href="#0"><i className="fas fa-chevron-left"></i></a>
                            <a href="#0" className="active">1</a>
                            <a href="#0">2</a>
                            <a href="#0">3</a>
                            <a href="#0"><i className="fas fa-chevron-right"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default BlogComponent