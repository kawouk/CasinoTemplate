import React from 'react'

function FaqSection() {
  return (
    <div className="faq">
    <div className="container">
        <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-4">
                <div className="faq-sidebar">
                    <div className="search-widget">
                        <form>
                            <input type="text" placeholder="Search here"/>
                            <button type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">General Questions</a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">How to play</a>
                        <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Results and winnings</a>
                        <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Your account</a>
                    </div>
                </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8">
                <div className="faq-content">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div className="single-faq">
                                <h4>Can I participate in a national lottery of a foreign country?</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page whene at
                                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters too
                                    using eader will be distracted by the readable conten.</p>
                            </div>

                            <div className="single-faq">
                                <h4>How old do I need to be to play the lottery?</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page whene at
                                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters too
                                    using eader will be distracted by the readable conten.</p>
                            </div>

                            <div className="single-faq">
                                <h4>What is the life cycle of my entry?</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page whene at
                                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters too
                                    using eader will be distracted by the readable conten.</p>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <div className="single-faq">
                                <h4>What is the deadline for buying a ticket for the drawing?</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page whene at
                                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters too
                                    using eader will be distracted by the readable conten.</p>
                            </div>
                            <div className="single-faq">
                                <h4>How many tickets can I buy for one draw in each lottery?</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page whene at
                                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters too
                                    using eader will be distracted by the readable conten.</p>
                            </div>
                            <div className="single-faq">
                                <h4>Can I play if I don’t have a bank card?</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page whene at
                                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters too
                                    using eader will be distracted by the readable conten.</p>
                            </div>
                        </div>
                        
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                            <div className="single-faq">
                                <h4>When are the results published?</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page whene at
                                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters too
                                    using eader will be distracted by the readable conten.</p>
                            </div>

                            <div className="single-faq">
                                <h4>How do I check if I’ve won?</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page whene at
                                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters too
                                    using eader will be distracted by the readable conten.</p>
                            </div>

                            <div className="single-faq">
                                <h4>Is there automatic notification of winnings?</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page whene at
                                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters too
                                    using eader will be distracted by the readable conten.</p>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                            <div className="single-faq">
                                <h4>Do I need to register to play?</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page whene at
                                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters too
                                    using eader will be distracted by the readable conten.</p>
                            </div>

                            <div className="single-faq">
                                <h4>How do I register?</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page whene at
                                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters too
                                    using eader will be distracted by the readable conten.</p>
                            </div>

                            <div className="single-faq">
                                <h4>Do I need to confirm my email address?</h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page whene at
                                    layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters too
                                    using eader will be distracted by the readable conten.</p>
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

export default FaqSection