import { Link, Outlet } from "react-router-dom";

const NestedRoute = () => {
  return (
    <div>
      <div>
        <Link to='/nestedroute/nest1'>Nest---1</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default NestedRoute
