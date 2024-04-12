import {
  HiPhone,
  HiOfficeBuilding,
  HiMap,
  HiHome,
  HiX,
  HiMenu,
} from 'react-icons/hi';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function LeftMenu() {
  const location = useLocation();
  const [active, setActive] = useState(true);

  return (
    <div className="navbar-start p-0 m-0">
      <div className="drawer p-0 m-0">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle m-0 p-0"
        />
        <div className="drawer-content p-0 m-0">
          <button
            onClick={() => setActive(!active)}
            className="transition-all duration-1000 ease-in-out"
          >
            <label
              htmlFor="my-drawer"
              className={`btn p-0 m-0 -top-1 drawer-button z-50 absolute 
              text-neutral-content btn-circle 
              transition-all duration-500 ease-in-out
              ${
                active
                  ? 'btn-sm text-lg sm:text-3xl btn-ghost'
                  : 'btn-error btn-xs left-36 shadow-error font-extrabold'
              }`}
            >
              {active ? <HiMenu /> : <HiX />}
            </label>
          </button>
        </div>
        <div className="drawer-side h-svh w-svw">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay h-svh w-svw flex justify-between
                        self-center align-middle items-center content-center
                        transition-all duration-1000 ease-in-out"
            onClick={() => setActive(!active)}
          ></label>
          <ul className="menu pt-16 h-svh bg-neutral text-neutral-content shadow-sm shadow-primary w-48">
            <li>
              <Link
                to="/"
                className={`text-2xl focus:text-warning 
                 selection:text-warning visited:text-base ${
                   location.pathname === '/'
                     ? 'text-warning'
                     : 'text-neutral-content hover:text-white'
                 }`}
              >
                <HiHome />
                <span className="rounded-badge font-bold text-base">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`text-2xl focus:text-warning 
                 selection:text-warning visited:text-base ${
                   location.pathname === '/projects'
                     ? 'text-warning'
                     : 'text-neutral-content hover:text-white'
                 }`}
              >
                <HiMap />
                <span className="rounded-badge font-bold text-base">
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/company"
                className={`text-2xl focus:text-warning 
                 selection:text-warning visited:text-base ${
                   location.pathname === '/company'
                     ? 'text-warning'
                     : 'text-neutral-content hover:text-white'
                 }`}
              >
                <HiOfficeBuilding />
                <span className="rounded-badge font-bold text-base">
                  Company
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className={`text-2xl focus:text-warning 
                 selection:text-warning visited:text-base ${
                   location.pathname === '/contacts'
                     ? 'text-warning'
                     : 'text-neutral-content hover:text-white'
                 }`}
              >
                <HiPhone />
                <span className="rounded-badge font-bold text-base">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
