import React from 'react'

function GameDetailsComp() {
  return (
    <div className="game-details">
    <div className="container">
        <div className="row">
            <div className="col-xl-8 col-lg-8">
                <div className="part-prev">
                    <img className="w-100" src="assets/img/games/game-details.jpg" alt=""/>
                    <a href="#0" className="play-btn">Play The Game</a>
                </div>
                <div className="game-descr">
                    <div className="details-tabs-menu">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="manual-bet-tab" data-toggle="tab" href="#manual-bet" role="tab" aria-controls="manual-bet" aria-selected="true">Mnaual Bet</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="provably-fair-tab" data-toggle="tab" href="#provably-fair" role="tab" aria-controls="provably-fair" aria-selected="false">Provably Fair</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="how-play-tab" data-toggle="tab" href="#how-play" role="tab" aria-controls="how-play" aria-selected="false">How To Play</a>
                            </li>
                        </ul>
                    </div>
                    <div className="details-tab-pan">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="manual-bet" role="tabpanel" aria-labelledby="manual-bet-tab">
                                <h3>manual bet</h3>
                                <form>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <label htmlFor="inlineFormInputGroupUsername01">Bet amount</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="inlineFormInputGroupUsername01" placeholder="Bet Amount" value="01.2221"/>
                                                <div className="input-group-append">
                                                    <div className="input-group-text">BTC</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <label htmlFor="inlineFormInputGroupUsername02">Payout</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="inlineFormInputGroupUsername02" placeholder="Payout" value="102.28"/>
                                                <div className="input-group-append">
                                                    <div className="input-group-text">x</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <label htmlFor="inlineFormInputGroupUsername03">Win Amount</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="inlineFormInputGroupUsername03" placeholder="Win Amount" value="256.0202" readOnly/>
                                                <div className="input-group-append">
                                                    <div className="input-group-text">BTC</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <label htmlFor="inlineFormInputGroupUsername04">Chance</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="inlineFormInputGroupUsername04" placeholder="Chance" value="70"/>
                                                <div className="input-group-append">
                                                    <div className="input-group-text">%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 text-xl-right text-lg-right text-center">
                                        <div className="bet-control">
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn btn-secondary">Min</button>
                                                <button type="button" className="btn btn-secondary">1/2</button>
                                                <button type="button" className="btn btn-secondary">x2</button>
                                                <button type="button" className="btn btn-secondary">Max</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="roll-controlling">
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn btn-secondary roll-ctrl-btn"> Over <span className="arrowIcon"></span> </button>
                                                <button type="button" className="btn btn-secondary roll-ctrl-btn under"> <span className="arrowIcon"></span>  Under </button>
                                            </div>
                                            <div className="number">
                                                <span className="text under">12008</span>
                                                <span className="text over d-none">10008</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="place-bet-btn def-btn def-small">Place a bet</button>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="provably-fair" role="tabpanel" aria-labelledby="provably-fair-tab">
                                <div className="provably-fair">
                                    <h3>provably fair</h3>
                                    <ul>
                                        <li>
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    <div className="input-group-text">Server Hash</div>
                                                </div>
                                                <input readOnly value="32xG94PiUCr5AXKQX1ot0UEyamUFv6T1JfyIu0uv" type="text" className="form-control" id="inlineFormInputGroupUsername05" placeholder="Username"/>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    <div className="input-group-text">Client Seed</div>
                                                </div>
                                                <input readOnly value="32xG94PiUCr5AXKQX1ot0UEyamUFv6T1JfyIu0uv" type="text" className="form-control" id="inlineFormInputGroupUsername06" placeholder="Username"/>
                                            </div>
                                        </li>
                                        
                                        <li>
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    <div className="input-group-text">Next Client Seed</div>
                                                </div>
                                                <input readOnly value="32xG94PiUCr5AXKQX1ot0UEyamUFv6T1JfyIu0uv" type="text" className="form-control" id="inlineFormInputGroupUsername07" placeholder="Username"/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="how-play" role="tabpanel" aria-labelledby="how-play-tab">
                                <div className="how-to-play">
                                    <h3>How to play it!</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae provident dolorem molestiae quasi, dolorum doloremque nam enim veritatis fugit sequi aperiam, non quo maxime odit quam harum cum expedita? Delectus.
                                        
                                    </p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum nihil dicta, doloremque perferendis veniam esse beatae cumque quisquam eligendi, similique porro expedita iste maxime. Harum sequi repellat voluptatibus! Molestiae, ratione.</p>
                                    <ul>
                                        <li>1. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                        <li>2. Libero eum qui consequuntur reiciendis.</li>
                                        <li>3. Delectus, eveniet? Nam dolores dolorum laborum.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4">
                <div className="recent-activity p-0">
                    <div className="single-col">
                        <div className="activity-list">
                            <div className="row">
                                <div className="col-xl-12 col-lg-12 col-md-6">
                                    <div className="single-activity">
                                        <div className="part-img">
                                            <img src="assets/img/games/assets-1.jpg" alt=""/>
                                        </div>
                                        <div className="part-text">
                                            <p><span className="player-name">Mukta</span> won 2 minutes ago<br/> on game of <a href="#0" className="game-name">Mega Matrix</a></p>
                                            <span className="winning-amount">$42.02</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-6">
                                    <div className="single-activity">
                                        <div className="part-img">
                                            <img src="assets/img/games/assets-2.jpg" alt=""/>
                                        </div>
                                        <div className="part-text">
                                            <p><span className="player-name">Shehwar</span> won 2 minutes ago<br/> on game of <a href="#0" className="game-name">Royal Casino</a></p>
                                            <span className="winning-amount">$35.20</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-6">
                                    <div className="single-activity">
                                        <div className="part-img">
                                            <img src="assets/img/games/assets-3.jpg" alt=""/>
                                        </div>
                                        <div className="part-text">
                                            <p><span className="player-name">Maria</span> won 2 minutes ago<br/> on game of <a href="#0" className="game-name">Poker Club</a></p>
                                            <span className="winning-amount">$21.41</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-6">
                                    <div className="single-activity">
                                        <div className="part-img">
                                            <img src="assets/img/games/assets-4.jpg" alt=""/>
                                        </div>
                                        <div className="part-text">
                                            <p><span className="player-name">Drubo</span> won 2 minutes ago<br/> on game of <a href="#0" className="game-name">Slots 375</a></p>
                                            <span className="winning-amount">$10.50</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-6">
                                    <div className="single-activity">
                                        <div className="part-img">
                                            <img src="assets/img/games/assets-1.jpg" alt=""/>
                                        </div>
                                        <div className="part-text">
                                            <p><span className="player-name">Mukta</span> won 2 minutes ago<br/> on game of <a href="#0" className="game-name">Mega Matrix</a></p>
                                            <span className="winning-amount">$42.02</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-6">
                                    <div className="single-activity">
                                        <div className="part-img">
                                            <img src="assets/img/games/assets-2.jpg" alt=""/>
                                        </div>
                                        <div className="part-text">
                                            <p><span className="player-name">Shehwar</span> won 2 minutes ago<br/> on game of <a href="#0" className="game-name">Royal Casino</a></p>
                                            <span className="winning-amount">$35.20</span>
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
</div>
  )
}

export default GameDetailsComp