import React from "react";

import classnames from "classnames";

import { 
    
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
  } from "reactstrap";

  function IndexNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarCollapse] = React.useState(false);
  
    
    React.useEffect(() => {
      const updateNavbarColor = () => {
        if (
          document.documentElement.scrollTop > 299 ||
          document.body.scrollTop > 299
        ) {
          setNavbarColor("");
        } else if (
          document.documentElement.scrollTop < 300 ||
          document.body.scrollTop < 300
        ) {
          setNavbarColor("navbar-transparent");
        }
      };
  
      window.addEventListener("scroll", updateNavbarColor);
  
      return function cleanup() {
        window.removeEventListener("scroll", updateNavbarColor);
      };
    });
    return (
      <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              href="https://github.com/CPure?tab=repositories"
              target="_blank"
              
            >
              Carlos Pure
            </NavbarBrand>
           
          </div>
        
        </Container>
      </Navbar>
    );
  }
  
  export default IndexNavbar;