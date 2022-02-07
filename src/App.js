import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./logo.png";
import NordicRose from "./NORDICROSE.png";
import girl from "./girl.png";
import facebook from "./facebook.png";
import whatsapp from "./whatsapp.png";
import twitter from "./twitter.png";
import mummy from "./mummy.png";
import eyes from "./eyes.png";
import img1 from "./Rectangle4.png";
import img2 from "./Rectangle11.png";
import img3 from "./Rectangle10.png";
import img4 from "./Rectangle37.png";
import img5 from "./Rectangle39.png";
import img6 from "./Rectangle38.png";
import footer from "./footer.png";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <img src={logo} alt="" width="200px" />
          <button
            className="navbar-toggler navbar-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse custam-nav" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  LINKS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">PROJECT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Top Text */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <p id="toptext">
              A few words about this blog platform, Ghost, and how this site was
              made
            </p>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
      {/* Text before top images */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-xs-2"></div>
          <div className="col-lg-6 col-xs-8">
            <p id="textbfrimg">
              Why Ghost (and Figma) instead of Medium,WordPress or other
              options?
            </p>
          </div>
          <div className="col-lg-3 col-xs-2"></div>
        </div>
      </div>
      {/* Image */}
      <img src={NordicRose} class="img-fluid" alt="..." width="100% " />
      {/* Line  */}
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-lg-8  col-sm-12 col-xs-12">
            <hr id="hr" />
          </div>
          <div className="col-2"></div>
        </div>
      </div>

      {/* Below Image Social Media icons   */}

      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-1 col-sm-2 col-xs-2">
                {" "}
                <img
                  className="img-round"
                  src={girl}
                  height="56px"
                  width="56px"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-10">
                <b id="imgtxt">Mika Matikainen</b> <br />
                <p id="paraimg">Apr 15, 2020 · 4 min read </p>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-3 col-sm-4">
                <div className="btn-group ">
                  <button
                    type="button"
                    className="btn btn-default btn-light btn-outline-secondary"
                  >
                    <img src={facebook} alt="" height="20px" width="20px" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-default btn-light btn-outline-secondary"
                  >
                    <img src={whatsapp} alt="" height="20px" width="20px" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-default btn-light btn-outline-secondary"
                  >
                    <img src={twitter} alt="" height="20px" width="20px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>

      {/* <!-- below icons --> */}
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-lg-6 col-sm-12">
            <p id="textaftericon">
              This lovely web is full of everything which is created I don't
              know what in mind, considering that sometimes totally bonkers
              stuff might be highly relevant if it has the right kind of
              thinking behind it.
            </p>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      {/* <!-- before image  --> */}
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-lg-6 col-sm-12">
            <h1 id="head1S">Next On Pipeline</h1>

            <p id="para1">
              Duis eu velit tempus erat egestas efficitur. In hac habitasse
              platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
              pharetra quis lacus at viverra. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              <br />
              <br />
              Morbi efficitur auctor metus, id mollis lorem pellentesque id.
              Nullam posuere maximus dui et fringilla.
            </p>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      {/* <!-- Mummy image --> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-lg-8 col-sm-12 col-xs-12">
            <img src={mummy} className="img-fluid" />
          </div>

          <div class="col-2"></div>
        </div>
      </div>
      {/* <!-- text below image --> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 col-sm-12">
            <p id="imgcaption">
              Image caption centered this way and I’ll make this a bit longer to
              indicate the amount of line-height.
            </p>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
      {/* <!-- after iamge or caption text --> */}
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-lg-6 col-sm-12">
            <p id="para1">
              Duis eu velit tempus erat egestas efficitur. In hac habitasse
              platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
              pharetra quis lacus at viverra. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              <br />
              <br />
              Morbi efficitur auctor metus, id mollis lorem pellentesque id.
              Nullam posuere maximus dui et fringilla.
            </p>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      {/* <!--  list Text --> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 col-sm-12">
            <p>A list looks like this:</p>
            <ul id="lists">
              <li>First item in the list</li>
              <li>
                Second item in the list lorem ipsum dolor sit amet nunc felis
                dolor lorem ipsum sit amet
              </li>
              <li>Third item in the list</li>
            </ul>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
      {/* <!-- Text After List --> */}
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-lg-6 col-sm-12">
            <p id="para1">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
              <br />
              <br />
              Thanks for Reading.
              <br />
              Mika
            </p>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      {/* <!-- Buttons Social Media --> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary iconpad">
                <img src={facebook}></img>
                <i className="fab fa-facebook-square"></i>
                <span className="icontxt">Share on Facebook</span>
              </button>
              <button type="button" className="btn btn-secondary iconpad">
                <img src={twitter}></img>
                <i className="fab fa-twitter-square"></i>
                <span className="icontxt">Share on Twitter</span>
              </button>
              <button type="button" className="btn btn-secondary iconpad">
                <img src={whatsapp}></img>
                <i className="fab fa-whatsapp-square"></i>
                <span className="icontxt">Share on Whatsapp</span>
              </button>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
      {/* <!-- Tags --> */}
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-lg-6 col-sm-12">
            <p id="parah">
              Tags:
              <u>product design,</u> <u>culture</u>
            </p>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      {/* <!-- Line --> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-lg-6  col-sm-12 col-xs-12">
            <hr id="hr2" />
          </div>
          <div className="col-3"></div>
        </div>
      </div>
      {/* <!-- pic with text before eyes --> */}
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-lg-2 col-sm-2 col-xs-2">
                {" "}
                <img id="img-round" src={girl} />
              </div>
              <div class="col-lg-10 col-sm-10 col-xs-10">
                <p>
                  {" "}
                  <b>Mika Matikainen</b> is a Design Founder and Advisor, Berlin
                  School of Creative Leadership Executive MBA participant,
                  Zippie advisor, Wolt co-founder, and Nordic Rose stakeholder.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3"></div>
        </div>
      </div>
      {/* <!-- eyes line --> */}
      <div class="container-fluid ">
        <hr class="hr--logo" />
      </div>
      {/* <!-- Heading --> */}
      <div class="container">
        <div class="row">
          <div class="col-3"></div>
          <div class="col-lg-6 col-sm-12">
            <h1 id="parahh">What To Read Next</h1>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
      {/* <!-- Images gallery 1 --> */}
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-12 col-xs-12 d-flex ">
            <img src={img1} alt="" />
            <div class="row">
              <div class="col-lg-2 "></div>
              <div class="col-lg-8">
                <p class="imgtxtt  col-lg-12 gridfont ">
                  Connecting artificial intelligence with digital product design
                </p>
                <div class="col-lg-2"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 col-xs-12">
            <img src={img2} alt="" />
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-8">
                <p class="imgtxtt  col-lg-12 text-center ">
                  Hello world, or, in other words, why this blog exists
                </p>
                <div class="col-lg-2"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 col-xs-12">
            <img src={img3} alt="" />
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-8">
                <p class="imgtxtt  col-lg-12 text-center ">
                  Here are some things you should know regarding how we work
                </p>
                <div class="col-lg-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Images gallery 2 --> */}
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-12 col-xs-12 ">
            <img src={img4} alt="" />
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-8">
                <p class="imgtxtt  col-lg-12 text-center ">
                  A few words about this blog platform, Ghost, and how this site
                  was made
                </p>
                <div class="col-lg-2"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 col-xs-12">
            <img src={img5} alt="" />
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-8">
                <p class="imgtxtt  col-lg-12 text-center ">
                  Updating list of 50+ sources on distributed teams, remote
                  work, and how to make it all work better
                </p>
                <div class="col-lg-2"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12 col-xs-12">
            <img src={img6} alt="" />
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-8">
                <p class="imgtxtt  col-lg-12 text-center ">
                  How modern remote working tools get along with Old School
                  Cowboy's methods
                </p>
                <div class="col-lg-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Form --> */}

      <div class="container">
        <div class="row">
          <div class="col-lg-2"></div>
          <div class="col-lg-8 col-sm-12" id="border">
            <h2 id="formhead">Sign up for the newsletter</h2>

            <p id="formparah">
              If you want relevant updates occasionally, sign up for the private
              newsletter. Your email is never shared.{" "}
            </p>
            <div class="input-group col-sm-8 p-4">
              <input
                type="text"
                class="form-control btn-outline-dark"
                placeholder="Enter Your Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append  col-sm-2">
                <span class="input-group-text btn-dark" id="basic-addon2">
                  Sign UP
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-2"></div>
      </div>

      {/* <!-- Footer --> */}

      <div class="container-fluid samefont divcolor footer">
        <div class="row footerletter m-4">
          <img class="img-fluid" src={footer} />
        </div>
        <div class="row footerletter">
          <div class="col-4"></div>
          <div class="col-lg-4 col-sm-10 text-center">
            <br />
            <br />
            <br />
            <h1>Nordic Rose</h1>
            <br />
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              omnis dolorum harum quidem officiis nemo, doloremque cupiditate
              itaque odio a, ea doloribus! Doloremque ullam eius illo ipsum
              fugit cumque qui?
            </p>
            <br />
            <br />
            <div class="row">
              <div class="col-lg-2"></div>
              <div class="col-lg-3">
                <a href="" className="footerlist">
                  <u>Twitter</u>
                </a>
              </div>
              <div class="col-lg-4">
                <a href="" className="footerlist">
                  {" "}
                  <u>Linked iN</u>
                </a>
              </div>
              <div class="col-lg-3">
                <a href="" className="footerlist">
                  <u>Rss</u>{" "}
                </a>
              </div>
              <div class="col-lg-2"></div>
              <br />
              <br />
              <br />
            </div>
            <div class="row">
              <div class="col-lg-3"></div>
              <div class="col-lg-6">
                © 2012–2020 Nordic Rose Co. <br /> All rights reserved.
                <br />
              </div>
              <div class="col-lg-3"></div>
              <br />
            </div>
          </div>
          <div class="col-4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
