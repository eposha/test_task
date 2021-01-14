import { Link, useLocation } from 'react-router-dom';

import './Navigation.scss';

const Navigation = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <nav className='navigation'>
      <ul className='navList'>
        <li className={`navItem ${pathname === '/' ? 'active' : ''}`}>
          <Link to='/'>Popular</Link>
          <div className={`borderBottom ${pathname === '/' ? '' : 'hide'}`} />
        </li>
        <li className={`navItem ${pathname === '/favorite' ? 'active' : ''}`}>
          <Link to='/favorite'>Favorite</Link>
          <div
            className={`borderBottom ${pathname === '/favorite' ? '' : 'hide'}`}
          />
        </li>
        <li className={`navItem ${pathname === '/new' ? 'active' : ''}`}>
          <Link to='/new'>New</Link>
          <div
            className={`borderBottom ${pathname === '/new' ? '' : 'hide'}`}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
