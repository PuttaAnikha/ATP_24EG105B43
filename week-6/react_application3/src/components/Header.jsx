import { NavLink } from "react-router"


function Header() {
  return (
    <nav >
      <ul className="flex justify-end gap-5">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>HOME</NavLink>
          </li>
          <li>
          <NavLink to="/Register" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>REGISTER</NavLink>
          </li>
          <li>
          <NavLink to="/Login" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>LOGIN</NavLink>
          </li>
          <li>
          <NavLink to='/Technologies' className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>TECHNOLOGIES</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header