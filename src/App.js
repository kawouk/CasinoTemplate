
import "./App.css";
import "./assets/css/bootstrap.min.css";
// import "./assets/css/fontawesome.min.css";
// import "./assets/fonts/flaticon.css";
import "./assets/css/animate.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/modal-video.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/custom.css";
import Account from "./Template/Account/Account";
import Home from "./Template/Home/Home";
import Login from "./Template/Login/Login";
import About from "./Template/About/About";
import AffliateProgramming from "./Template/AffliateProgramming/AffliateProgramming";
import BlogDetails from "./Template/BlogDetails/BlogDetails";
import Blog from "./Template/Blog/Blog";
import Contact from "./Template/Contact/Contact";
import Contest from "./Template/Contest/Contest";
import FAQ from "./Template/FAQ/FAQ";
import GameDetails from "./Template/GameDetails/GameDetails";
import Games from "./Template/Games/Games";
import Promotion from "./Template/Promotion/Promotion";
import Register from "./Template/Register/Register";
import { useState } from "react";


function App() {

  const [auth,setIsAuth] = useState(false);
  return (
    <div className="App">
      <Home auth={auth} setIsAuth={setIsAuth}/>
      {/* <Login/> */}
      {/* <About/> */}
      {/* <Account/> */}
      {/* <AffliateProgramming/> */}
      {/* <BlogDetails/> */}
      {/* <Blog/> */}
      {/* <Contact/> */}
      {/* <Contest/> */}
      {/* <FAQ/> */}
      {/* <GameDetails/> */}
      {/* <Games/> */}
      {/* <Promotion /> */}
      {/* <Register/> */}
    </div>
  );
}

export default App;
