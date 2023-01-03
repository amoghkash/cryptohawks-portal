import Navigation from './Navigation';
import { Link } from 'react-router-dom'
import { Cookies } from 'react-cookie'
import logo from '../../assets/cryptohawks_logo.svg'
import { logout } from '../../scripts/auth';

function Header() {
  const cookies = new Cookies();
  var name = cookies.get('name')

  return (
    <header className="border-b-2 p-1 flex justify-between">
      <Link to="/" >
        <span className="inline-flex font-bold ml-4">
          <img src={logo} width={35}></img>
          <div className='self-center ml-3 text-3xl'>
            Cryptohawks
          </div>
        </span>             
      </Link>
      <span className='inline-flex items-center'>
        <div className='text-xl inline-flex mr-10'>
          <div className='text-xs text-red-400 mr-3 mt-1.5'>
            <button className='self-center hover:text-red-600 hover:underline' onClick={logout}>logout</button>
          </div>
          {name}
        </div>
        <Navigation />
      </span>
      
    </header>
  );
};
export default Header;