import { Link, Outlet } from "react-router-dom";

const BarsPage = () => {
  return (
    <div>
      <h1>Bars Page</h1>
      <nav>
        <Link to="floor-bar">Floor Bar</Link>
        <Link to="live-bar">Live Bar</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default BarsPage
