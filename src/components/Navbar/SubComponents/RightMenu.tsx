import { HiX, HiUser, HiCog, HiLogout } from 'react-icons/hi';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function RightMenu() {
  const location = useLocation();
  const [active2, setActive2] = useState(true);

  const toogleMenu2 = () => {
    setActive2(!active2);
  };

  function handleItemClick2() {
    const drawerCheckbox = document.getElementById(
      'my-drawer-4'
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = !drawerCheckbox.checked;
    }
    toogleMenu2();
  }

  return (
    <div className="">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <button onClick={toogleMenu2} className="text-xl">
            <label
              htmlFor="my-drawer-4"
              className={`btn p-0 m-0 -top-1 right-0 drawer-button z-50 absolute 
              text-neutral-content btn-circle text-center
              transition-all duration-500 ease-in-out
              ${
                active2
                  ? 'text-xl sm:text-3xl btn-ghost btn-sm'
                  : 'btn-error btn-xs shadow-error right-2 font-extrabold'
              }`}
            >
              {active2 ? <HiUser /> : <HiX />}
            </label>
          </button>
        </div>
        <div className="drawer-side h-svh w-svw z-50">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay h-svh w-svw flex justify-between
                        self-center align-middle items-center content-center
                        transition-all duration-1000 ease-in-out"
            onClick={toogleMenu2}
          ></label>
          <ul className="menu pt-16 h-svh bg-neutral text-neutral-content shadow-sm shadow-primary w-48">
            <li onClick={handleItemClick2}>
              <Link
                to="/profile"
                className={`text-lg font-bold focus:text-warning 
                 selection:text-warning visited:text-base ${
                   location.pathname === '/profile'
                     ? 'text-warning'
                     : 'text-neutral-content hover:text-white'
                 }`}
              >
                <span className="rounded-badge font-bold text-base">
                  <span className="text-2xl">
                    <HiUser />
                  </span>
                </span>
                Profile
              </Link>
            </li>
            <li onClick={handleItemClick2}>
              <Link
                to="/configs"
                className={`text-lg font-bold focus:text-warning 
                 selection:text-warning visited:text-base ${
                   location.pathname === '/configs'
                     ? 'text-warning'
                     : 'text-neutral-content hover:text-white'
                 }`}
              >
                <span className="rounded-badge font-bold text-base">
                  <span className="text-2xl">
                    <HiCog />
                  </span>
                </span>
                Configs
              </Link>
            </li>
            <li onClick={handleItemClick2}>
              <Link
                to="/logout"
                className={`text-lg font-bold focus:text-warning 
                 selection:text-warning visited:text-base ${
                   location.pathname === '/logout'
                     ? 'text-warning'
                     : 'text-neutral-content hover:text-white'
                 }`}
              >
                <span className="rounded-badge font-bold text-base">
                  <span className="text-2xl">
                    <HiLogout />
                  </span>
                </span>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
