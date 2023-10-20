import React from "react";

import SideBar from "../components/SideBar";
import Chat from "../components/Chat";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MessagePage() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-4 gap-4" style={{height:'75vh'}}>
        <div className="bg-violet-600 m-4 rounded-xl overflow-hidden">
          <SideBar />
        </div>
        <div className="col-span-3">
          <Chat />
        </div>
      </div>

      <Footer />
    </>
  );
}
