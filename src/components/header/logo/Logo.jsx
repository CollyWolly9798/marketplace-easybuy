import { NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo/logo.png';

const Logo = () => {
  return (
    <div className='header__logo'>
      <NavLink to='/'>
        <img src={logo} alt='logotypes' />
      </NavLink>
    </div>
  );
};

export default Logo;
