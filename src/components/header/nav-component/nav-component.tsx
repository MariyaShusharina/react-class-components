import { NavLink } from 'react-router-dom';
import '../header.css';

export default function Nav() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
      >
        About
      </NavLink>
    </nav>
  );
}
