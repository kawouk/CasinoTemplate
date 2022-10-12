import React from 'react'

function Contact() {
  return (
    <div className="contact">
    <div className="container container-contact">
        <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-sm-10">
                <div className="section-title">
                    <h2>Get in touch with us</h2>
                    <p>Misco has thousands of free online games for all generation. Play action, racing, sports, and other fun games for free at Misco</p>
                </div>
            </div>
        </div>
        <div className="bg-tamim">
            <div className="row justify-content-around">
                <div className="col-xl-6 col-lg-6 col-sm-10 col-md-6">
                    <div className="part-form">
                        <form>
                            <input type="text" placeholder="Players Name"/>
                            <input type="text" placeholder="Players Email"/>
                            <textarea placeholder="Write to Us..."></textarea>
                            <button className="submit-btn def-btn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-sm-10 col-md-6">
                    <div className="part-address">
                        <div className="addressing">
                            <div className="single-address">
                                <h4>Our Office</h4>
                                <p>1941 Romines Mill Road
                                    Irving, TX 75062<br/>Texas, United States</p>
                            </div>
                            <div className="single-address">
                                <h4>Email</h4>
                                <p>DanielleHButeau@teleworm.us<br/>
                                    CharlesTPride@armyspy.com</p>
                            </div>
                            <div className="single-address">
                                <h4>Phone</h4>
                                <p>+1 318-342-7639<br/>
                                    +1 530-259-4087</p>
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

export default Contact