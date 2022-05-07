import "../css/App.css";
import "../css/main.css";
import { Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import First from "./First";
import Search from "./Search";
import MediaMusicians from "./MediaMusicians";
import { token } from "./App";
import MediaAlbum from "./MediaAlbum";

interface MainProps {
  page: string;
}

function Main({ page }: MainProps) {
  if (!token) {
    return <Navigate to="/" />;
  }
  /* console.log("token:", token); */
  let content = <First />;
  let main = "main ";
  if (page === "search") {
    content = <Search />;
    main += "main-search";
  } else if (page === "media") {
    content = <MediaMusicians />;
    main += "main-media";
  } else if (page === "media_album") {
    content = <MediaAlbum />;
    main += "main-media";
  } else {
    main += "main-index";
  }
  return (
    <div className="spotify">
      <div className="spotify__body">
        <Sidebar />
        <div className={main}>
          <Header page={page} />
          {content}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
