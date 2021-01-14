import { Link, useLocation } from 'react-router-dom';
import { dashboard } from '../svg/dashboard';
import { shopping } from '../svg/shopping';
import { customer } from '../svg/customer';

import './SideBar.scss';

const SideBar = () => {
  const location = useLocation();
  const { pathname } = location;
  const isActiveDashboard =
    pathname === '/' || pathname === '/favorite' || pathname === '/new';
  const isCustomerPage = pathname === '/customer';
  const isShoppingPage = pathname === '/shopping';

  return (
    <div className='side_bar'>
      <div className={`img_wrap ${isActiveDashboard ? 'active' : ''}`}>
        <Link to='/'>{dashboard}</Link>
        <div className={`border_left ${isActiveDashboard ? '' : 'hide'}`} />
      </div>
      <div className={`img_wrap ${isShoppingPage ? 'active' : ''}`}>
        <Link to='/shopping'>{shopping}</Link>
        <div className={`border_left ${isShoppingPage ? '' : 'hide'}`} />
      </div>
      <div className={`img_wrap ${isCustomerPage ? 'active' : ''}`}>
        <Link to='/customer'>{customer}</Link>
        <div className={`border_left ${isCustomerPage ? '' : 'hide'}`} />
      </div>
    </div>
  );
};

export default SideBar;
