import Navigation from "../navigation/Navigation";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="border-b-2 p-1 flex justify-between">
      <Link to="/" >
        <span className="font-bold">
          Cryptohawks
        </span>             
      </Link>
      <Navigation />
    </header>
  );
};
export default Header;