import { NavLink } from 'react-router-dom';
import '../header.css';

export default function Nav() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? 'nav-link pending'
            : isActive
              ? 'nav-link active'
              : 'nav-link'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending
            ? 'nav-link pending'
            : isActive
              ? 'nav-link active'
              : 'nav-link'
        }
      >
        About
      </NavLink>
    </nav>
  );
}
