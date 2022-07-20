import imgGirl2 from "../assets/img/girl2.jpg";
const HomeComponent = () => {

    return (
        <div>
              <div className="container-fluid fh5co-home-banner">
    <div className="card"> <img className="card-img" src={require("../assets/img/banner-img.jpg")} alt=""/>
      <div className="card-img-overlay">
        <div className="center-text">
          <h2 className="card-title">A camera is the save button
          for the mind’s eye</h2>
          <a href="#" className="btn">
            <svg width="201" height="51" viewBox="0 0 201 51">
              <defs className="cls-1" >
                {/* <style>
                // .cls-1 {
                //   fill: none;
                //   stroke-width: 1px;
                //   stroke: url(#linear-gradient);
                // }
              </style> */}
              <linearGradient id="linear-gradient" x1="140.508" y1="50.5" x2="60.492" y2="0.5" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#e90e65"/>
                <stop offset="1" stopColor="#fff"/>
              </linearGradient>
            </defs>
            <rect id="Rounded_Rectangle_1" data-name="Rounded Rectangle 1" className="cls-1" x="0.5" y="0.5" width="200" height="50" rx="25" ry="25"/>
          </svg>
        Explore</a> </div>
      </div>
    </div>
  </div>
  <div className="container-fluid fh5co-two-img">
    <div className="row">
      <div className="col-sm-6 pr-0 pl-0">
        <div className="card"> <img className="card-img" src={require('../assets/img/girl1.jpg')} alt=""/>
          <div className="card-img-overlay"> </div>
        </div>
      </div>
      <div className="col-sm-6 pr-0 pl-0">
        <div className="card"> <img className="card-img" src={imgGirl2} alt=""/>
          <div className="card-img-overlay"> </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid fh5co-recent-work">
    <div className="container contact-pop">
      <div className="row">
        <div className="col-md-6  pr-0">
          <div className="card"> <img className="card-img w-100" src={require("../assets/img/girl3.jpg")} alt=""/>
            <div className="card-img-overlay"> </div>
          </div>
        </div>
        <div className="col-md-6 pl-0" id="about">
          <div className="content">
            <h3>I am Sandra Reigel</h3>
            <h4>Professional photographer</h4>
            <hr />
            <p>Sed do eiusmod tempor incididunt ut labore et dolo magna aliqua. Ut enim ad minim veniam, quis nostd exercitation ullamco laboris nisi ut aliquip ex ea mo consequat. Duis aute irure dolor in reprehenderit in ullamco.</p>
            <a href="#" className="btn">CONTACT</a> </div>
          </div>
        </div>
      </div>
      <div className="container recent" id="activity">
        <div className="row">
          <h2>Recent works</h2>
          <div className="owl-carousel owl-carousel2 owl-theme">
            <div>
              <div className="card"> <img className="card-img" src={require("../assets/img/recent-img1.jpg")} alt=""/>
                <div className="card-img-overlay"> <a href="#"><img src={require("../assets/img/heart.png")} className="heart" alt="heart icon"/></a>
                  <div className="bottom-text">
                    <h5 className="card-title">Model photography</h5>
                    <p className="card-text">Digital, Photography</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card"> <img className="card-img" src={require("../assets/img/recent-img2.jpg")} alt=""/>
                <div className="card-img-overlay"> <a href="#"><img src={require("../assets/img/heart.png")} className="heart" alt="heart icon"/></a>
                  <div className="bottom-text">
                    <h5 className="card-title">Product photography</h5>
                    <p className="card-text">Digital, Photography</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card"> <img className="card-img" src={require("../assets/img/recent-img3.jpg")} alt=""/>
                <div className="card-img-overlay"> <a href="#"><img src={require("../assets/img/heart.png")} className="heart" alt="heart icon"/></a>
                  <div className="bottom-text">
                    <h5 className="card-title">Tour and potrait</h5>
                    <p className="card-text">Digital, Photography</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card"> <img className="card-img" src={require("../assets/img/recent-img4.jpg")} alt=""/>
                <div className="card-img-overlay"> <a href="#"><img src={require("../assets/img/heart.png")} className="heart" alt="heart icon"/></a>
                  <div className="bottom-text">
                    <h5 className="card-title">Classical photography</h5>
                    <p className="card-text">Digital, Photography</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div className="container-fluid recent fh5co-portfolio" id="portfolio">
    <div className="container">
      <h2>Portfolios</h2>
      <div className="row">
        <div className="bx bx-1">
          <div className="card"> <img className="card-img" src={require("../assets/img/portfolio-img1.png")} alt=""/>
            <div className="card-img-overlay"> <a href="#"><img src={require("../assets/img/heart.png")} className="heart" alt="heart icon"/></a>
              <div className="bottom-text">
                <h5 className="card-title">Natural site</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="bx bx-2">
          <div className="card"> <img className="card-img" src={require("../assets/img/portfolio-img2.png")} alt=""/>
            <div className="card-img-overlay"> <a href="#"><img src={require("../assets/img/heart.png")} className="heart" alt="heart icon"/></a>
              <div className="bottom-text">
                <h5 className="card-title">Vacation special photography</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="bx bx-3">
          <div className="card"> <img className="card-img" src={require("../assets/img/portfolio-img3.png")} alt=""/>
            <div className="card-img-overlay"> <a href="#"><img src={require("../assets/img/heart.png")} className="heart" alt="heart icon"/></a>
              <div className="bottom-text">
                <h5 className="card-title">Product photography</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="bx bx-4">
          <div className="card"> <img className="card-img" src={require("../assets/img/portfolio-img4.png")} alt=""/>
            <div className="card-img-overlay"> <a href="#"><img src={require("../assets/img/heart.png")} className="heart" alt="heart icon"/></a>
              <div className="bottom-text">
                <h5 className="card-title">Historical place shots</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="bx bx-middle" style={{padding: '0px'}}>
          <div className="bx bx-5">
            <div className="card"> <img className="card-img" src={require("../assets/img/portfolio-img5.png")} alt=""/>
              <div className="card-img-overlay"> <a href="#"><img src={require("../assets/img/heart.png")} className="heart" alt="heart icon"/></a>
                <div className="bottom-text">
                  <h5 className="card-title">Lorem ipsum dolor</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="bx bx-6">
            <div className="card"> <img className="card-img" src={require("../assets/img/portfolio-img6.png")} alt=""/>
              <div className="card-img-overlay"> <a href="#"><img src={require("../assets/img/heart.png")} className="heart" alt="heart icon"/></a>
                <div className="bottom-text">
                  <h5 className="card-title">Lorem ipsum dolor</h5>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bx bx-7">
              <div className="card"> <img className="card-img" src={require("../assets/img/portfolio-img7.png")} alt=""/>
                <div className="card-img-overlay"> <a href="#"><img src={require("../assets/img/heart.png")} className="heart" alt="heart icon"/></a>
                  <div className="bottom-text">
                    <h5 className="card-title">Portraits</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="bx bx-8">
              <div className="card"> <img className="card-img" src={require("../assets/img/portfolio-img8.png")} alt=""/>
                <div className="card-img-overlay"> <a href="#"><img src={require("../assets/img/heart.png")} className="heart" alt="heart icon"/></a>
                  <div className="bottom-text">
                    <h5 className="card-title">Wedding photography</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid fh5co-recent-work activity">
    <div className="container recent">
      <div className="row">
        <h2>Activity of the month</h2>
        <div className="owl-carousel owl-carousel3 owl-theme">
          <div>
            <div className="card"> <img className="card-img" src={require("../assets/img/activity-img1.png")} alt=""/>
              <div className="card-img-overlay">
                <div className="bottom-text">
                  <h5 className="card-title">Sed ut perspiciatis unde &nbsp; iste natus error sit volup</h5>
                  <a href="#">Read more <img src={require("../assets/img/double-right.svg")} alt=""/></a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card"> <img className="card-img" src={require("../assets/img/activity-img2.png")}  alt=""/>
              <div className="card-img-overlay">
                <div className="bottom-text">
                  <h5 className="card-title">Sed ut perspiciatis unde &nbsp; iste natus error sit volup</h5>
                  <a href="#">Read more <img src={require("../assets/img/double-right.svg")} alt=""/></a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card"> <img className="card-img" src={require("../assets/img/activity-img3.png")} alt=""/>
              <div className="card-img-overlay">
                <div className="bottom-text">
                  <h5 className="card-title">Sed ut perspiciatis unde &nbsp; iste natus error sit volup</h5>
                  <a href="#">Read more <img src={require("../assets/img/double-right.svg")} alt=""/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid fh5co-about-me" id="testimonial">
    <div id="my-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="card"> <img className="card-img d-block w-100" src={require("../assets/img/about-me-img.jpg")} alt=""/>
          <div className="card-img-overlay">
            <h2>People says about me</h2>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption d-md-block"> <img src={require("../assets/img/quote-icon.png")} alt=""/>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
          </div>
        </div>
        <div className="carousel-item active">
          <div className="carousel-caption d-md-block"> <img src={require("../assets/img/quote-icon.png")} alt=""/>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption d-md-block"> <img src={require("../assets/img/quote-icon.png")} alt=""/>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
          </div>
        </div>
      </div>
      <ol className="carousel-indicators">
        <li data-target="#my-carousel" data-slide-to="0" > <img src={require("../assets/img/about-me-img1.png")} alt=""/> <span>Sherrie Rose</span> </li>
        <li className="active" data-target="#my-carousel" data-slide-to="1" aria-current="location"> <img src={require("../assets/img/about-me-img2.png")} alt=""/> <span>Sherrie Rose</span> </li>
        <li data-target="#my-carousel" data-slide-to="2"> <img src={require("../assets/img/about-me-img3.png")} alt=""/> <span>Sherrie Rose</span> </li>
      </ol>
    </div>
  </div>
  <div className="container-fluid fh5co-insta-feed activity">
    <div className="container recent">
      <div className="row mb-5 pb-5">
        <div className="col-lg-6">
          <div className="twit-box">
            <div className="media mb-3"> <img className="align-self-start mr-3 rounded-circle" src={require("../assets/img/twit-girl-img.png")} alt=""/>
              <div className="media-body">
                <h5 className="mb-0 mt-3">Sandra reigel</h5>
                <p>@sandraphotography</p>
              </div>
            </div>
            <p className="text-justify"> “Sed ut perspiciatis unde omnis iste nats error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut. </p>
            <div className="clearfix"> <a href="#" className="btn btn-primary mt-2 float-right">Follow</a> </div>
          </div>
        </div>
        <div className="col-lg-6 feed-caro">
          <h2>Instagram feed</h2>
          <div className="owl-carousel owl-carousel4 owl-theme">
            <div>
              <div className="card"> <img className="card-img" src={require("../assets/img/feed-img1.png")} alt=""/>
                <div className="card-img-overlay"> </div>
              </div>
            </div>
            <div>
              <div className="card"> <img className="card-img" src={require("../assets/img/feed-img2.png")}  alt=""/>
                <div className="card-img-overlay"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center d-block">Find me on social media</h2>
      <div className="row social-links">
        <ul className="nav mx-auto">
          <li className="nav-item"> <a className="nav-link" href="https://www.facebook.com/fh5co"><img src={require("../assets/img/facebook.png")} alt=""/></a> </li>
          <li className="nav-item"> <a className="nav-link" href="https://twitter.com/fh5co"><img src={require("../assets/img/twitter.png")} alt=""/></a> </li>
          <li className="nav-item"> <a className="nav-link" href="#"><img src={require("../assets/img/pinterest.png")} alt=""/></a> </li>
          <li className="nav-item"> <a className="nav-link" href="#"><img src={require("../assets/img/google-plus.png")} alt=""/></a> </li>
        </ul>
      </div>
    </div>
  </div>
        </div>
    );
}

export default HomeComponent;