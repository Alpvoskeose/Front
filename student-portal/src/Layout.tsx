import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
      </nav>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}