import React from "react";
import { Container } from "reactstrap";
import back from "../assets/img/antoine-barres.jpg";
import fog from "../assets/img/fog-low.png";
import clouds from "../assets/img/clouds.png";

function IndexHeader() {
    return (
      <>
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              "url(" + back+ ")",
          }}
        >
          <div className="filter" />
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h1 className="presentation-title">Carlos Pure's Project</h1>
                <div className="fog-low">
                  <img  alt="..." src={fog} />
                </div>
                <div className="fog-low right">
                  <img alt="..." src={fog} />
                </div>
              </div>
              <h2 className="presentation-subtitle text-center"  > 
              <a href="https://github.com/CPure/myrepoproject" target="_blank">myrepoproject</a>
              </h2>
            </Container>
          </div>
          <div
            className="moving-clouds"
            style={{
              backgroundImage: "url(" + clouds + ")",
            }}
          />
          <h6 className="category category-absolute">
            Fulltime Force
            
            
          </h6>
        </div>
      </>
    );
  }
  
  export default IndexHeader;