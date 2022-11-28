import Navigation from "../navigation/Navigation";

function Header() {
  return (
    <header className="border-b-2 p-1 flex justify-between">

      <span className="font-bold">
        Cryptohawks
      </span>

      <Navigation />
    </header>
  );
};
export default Header;