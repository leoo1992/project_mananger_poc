import { BsCoin } from 'react-icons/bs';
import LeftMenu from './SubComponents/LeftMenu';
import RightMenu from './SubComponents/RightMenu';
import ThemeToogle from './SubComponents/ThemeToogle';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="p-0 m-0">
      <nav
        className="navbar bg-neutral shadow-lg top-0 w-screen 
      py-0 my-0 absolute"
      >
        <div className="navbar-start p-0 m-0">
          <LeftMenu />
        </div>
        <div className="navbar-center font-bold p-0 m-0 text-warning ">
          <Link to="/" className="p-0 m-0 flex">
            <div
              className="hidden p-1 m-0 sm:text-3xl mr-1 sm:mr-2 
            min-[300px]:block"
            >
              <BsCoin />
            </div>
            <span className="p-1 m-0">Costs </span>
            <span className="p-1 m-0 hidden min-[290px]:block"> Manager </span>
          </Link>
        </div>
        <div className="navbar-end m-0 p-0 text-neutral-content">
          <ThemeToogle />
          <RightMenu />
        </div>
      </nav>
    </header>
  );
}
