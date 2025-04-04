import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

function Layout(props: any) {
  return (
    <div>
      <Header />
      <div className="h-[calc(100vh-80px)] sm:h-[calc(100vh-64px)]">
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
