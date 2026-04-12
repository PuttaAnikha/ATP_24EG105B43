import { NavLink, Outlet } from "react-router";

function Techonologies() {
return(
    <div >
      <nav >
        <ul className="flex justify-center gap-5">
          <li>
            <NavLink to="/java">JAVA</NavLink>
          </li>
          <li>
            <NavLink to="/reactjs">REACTJS</NavLink>
          </li>
          <li>
            <NavLink to="/vue">VUE</NavLink>
          </li>
        </ul>
      </nav>
    <Outlet/>
    </div>
)
}

export default Techonologies