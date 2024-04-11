import { BsCoin } from 'react-icons/bs';
import LeftMenu from './SubComponents/LeftMenu';
import RightMenu from './SubComponents/RightMenu';
import ThemeToogle from './SubComponents/ThemeToogle';

export default function Navbar() {
  return (
    <nav className="navbar bg-neutral hover:opacity-100 shadow-lg top-0 w-screen h-0 py-0 my-0">
      <div className="navbar-start p-0 m-0">
        <LeftMenu />
      </div>
      <div className="navbar-center font-bold p-0 m-0 text-warning">
        <div className="text-3xl mr-2">
          <BsCoin />
        </div>
        Project Costs Manager
      </div>
      <div className="navbar-end m-0 p-0 text-neutral-content">
        <ThemeToogle />
        <RightMenu />
      </div>
    </nav>
  );
}
