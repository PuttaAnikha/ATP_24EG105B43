import { NavLink } from "react-router"


function Header() {
  return (
    <div>
      <nav className="flex justify-end text-1xl p-7 gap-3 bg-blue-500">
        <NavLink  to="" className={({isActive})=>isActive?"text-red-200":" "}>HOME</NavLink>
          <NavLink  to="createemps" className={({isActive})=>isActive?"text-red-200":" "}>CreateEmployee</NavLink>
          <NavLink  to="listofemps" className={({isActive})=>isActive?"text-red-200":" "}>ListOfEmployees</NavLink>
      </nav>
    </div>
  )
}

export default Header