import { BsCoin } from 'react-icons/bs';
import LeftMenu from './SubComponents/LeftMenu';
import RightMenu from './SubComponents/RightMenu';
import ThemeToogle from './SubComponents/ThemeToogle';

export default function Navbar() {
  return (
    <header className="p-0 m-0">
      <nav className="navbar bg-neutral shadow-lg top-0 w-screen py-0 my-0 absolute">
        <div className="navbar-start p-0 m-0">
          <LeftMenu />
        </div>
        <div className="navbar-center font-bold p-0 m-0 text-warning">
          <div className="hidden sm:text-3xl mr-1 sm:mr-2">
            <BsCoin />
          </div>
          Costs Manager
        </div>
        <div className="navbar-end m-0 p-0 text-neutral-content">
          <ThemeToogle />
          <RightMenu />
        </div>
      </nav>
    </header>
  );
}
