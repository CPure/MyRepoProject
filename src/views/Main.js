import React from "react";
import IndexNavbar from "../components/IndexNavBar";
import IndexHeader from "../components/IndexHeader.js";

function Index() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("index");
      return function cleanup() {
        document.body.classList.remove("index");
      };
    });
    return (
      <>
        <IndexNavbar />
        <IndexHeader />
        <div className="main">
          
        </div>
      </>
    );
  }
  
  export default Index;