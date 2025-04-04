import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

function Layout(props: any) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
