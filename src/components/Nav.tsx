import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
        Dashboard
      </NavLink>
      <NavLink to="/savings" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
        Savings
      </NavLink>
      <NavLink to="/allowance" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
        Allowance
      </NavLink>
      <NavLink to="/learn" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
        Learn
      </NavLink>
    </nav>
  );
}
