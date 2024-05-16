import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Cats } from "./components/Cat";
import snyggstilen from "./App.module.css";

const App = () => (
  <div>
    <h1>Min sida med routing</h1>
    <h2>Länkmeny</h2>
    <ul>
      <li>
        <NavLink to="/About/heybaberiba">Om</NavLink>
      </li>
      <li>
        <NavLink
          to="/cat/bosse"
          className={({ isActive }) =>
            isActive ? snyggstilen.activeLink : snyggstilen.inactiveLink
          }
        >
          Bosse
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cat/misse"
          className={({ isActive }) =>
            isActive ? snyggstilen.activeLink : snyggstilen.inactiveLink
          }
        >
          Misse
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cat/sanson"
          className={(props) => {
            const { isActive } = props;
            return isActive ? snyggstilen.activeLink : snyggstilen.inactiveLink;
          }}
        >
          Sanson
        </NavLink>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About/:secretParameter?" element={<About />} />
      <Route path="Cat/:catName" element={<Cats />} />
    </Routes>
  </div>
);

export default App;
