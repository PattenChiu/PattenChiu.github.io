import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo">Patten Chiu</Link>
        <ul className="nav-links" style={{ display: 'flex' }}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>關於我</NavLink>
          </li>
          <li>
            <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''}>經歷</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>專案</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
