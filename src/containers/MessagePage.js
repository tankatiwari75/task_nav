import SideBar from "../components/SideBar";
import Chat from "../components/Chat";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MessagePage() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-4 gap-2" style={{ height: "75vh" }}>
        <div className="bg-violet-600 m-4 mr-2 rounded-xl overflow-hidden">
          <SideBar />
        </div>
        <div className=" relative col-span-3 mt-4 mr-4 mb-4 border-2 rounded-xl overflow-hidden">
          <Chat />
        </div>
      </div>

      <Footer />
    </>
  );
}
