import React, { Component } from 'react';
import '../../styles/index.css';
import './index.css';

class References extends Component {
  render() {
    return (
      <div className="jumbotron text-center">
        <h3>References</h3>
        <div className="jumbotron white">


          <div className="container">
            <div className="row">

              {/* First Card */}
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-img-top" src="https://images.pexels.com/photos/157023/pexels-photo-157023.jpeg?h=350&auto=compress&cs=tinysrgb" />
                  <div className="card-block">
                    <h4 className="card-title">Manny Manny</h4>
                    <div className="card-text">
                      I am a software engineer based in Orlando, Florida.
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="float-right">ref1_fake@gmail.com</span>
                    <span><i className=""></i>email: </span>
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-img-top" src="https://images.pexels.com/photos/428339/pexels-photo-428339.jpeg?h=350&auto=compress&cs=tinysrgb" />
                  <div className="card-block">
                    <h4 className="card-title">John Johnny</h4>
                    <div className="card-text">
                      I am a software engineer based in Orlando, Florida.
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="float-right">ref2_fake@gmail.com</span>
                    <span><i className=""></i>email: </span>
                  </div>
                </div>
              </div>

              {/* Third Card */}
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-img-top" src="https://images.pexels.com/photos/7110/desk-office-workspace-coworking.jpg?h=350&auto=compress&cs=tinysrgb" />
                  <div className="card-block">
                    <h4 className="card-title">Kel Bel</h4>
                    <div className="card-text">
                      I am a software engineer based in Miami, Florida.
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="float-right">ref3_fake@gmail.com</span>
                    <span><i className=""></i>email: </span>
                  </div>
                </div>
              </div>

              {/* Fourth Card */}
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-img-top" src="https://images.pexels.com/photos/450271/pexels-photo-450271.jpeg?h=350&auto=compress&cs=tinysrgb" />
                  <div className="card-block">
                    <h4 className="card-title">Danny Danny</h4>
                    <div className="card-text">
                      I am a software engineer based in St. Petersburg, Florida.
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="float-right">ref4_fake@gmail.com</span>
                    <span><i className=""></i>email: </span>
                  </div>
                </div>
              </div>


            </div>
          </div>




        </div>
      </div>
    );
  }
}

export default References;
