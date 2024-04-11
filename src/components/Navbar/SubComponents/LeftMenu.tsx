import { HiPhone } from 'react-icons/hi';
import { HiOfficeBuilding } from 'react-icons/hi';
import { HiMap } from 'react-icons/hi';
import { HiHome } from 'react-icons/hi';
import { HiX, HiMenu } from 'react-icons/hi';
import { useState } from 'react';

export default function LeftMenu() {
  const [active, setActive] = useState(true);
  return (
    <div className="navbar-start p-0 m-0">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <button
            onClick={() => setActive(!active)}
            className="transition-all duration-1000 ease-in-out"
          >
            <label
              htmlFor="my-drawer"
              className={`btn p-0 m-0 -top-3 drawer-button z-50 absolute 
              text-neutral-content btn-circle 
              transition-all duration-500 ease-in-out
              ${
                active
                  ? 'text-xl sm:text-3xl btn-ghost'
                  : 'btn-error btn-xs left-36 ml-2 shadow-error font-extrabold'
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
              <div className="text-2xl">
                <HiHome />
                <a className="rounded-badge font-bold text-base">Home</a>
              </div>
            </li>
            <li>
              <div className="text-2xl">
                <HiMap />
                <a className="rounded-badge font-bold text-base">Projects</a>
              </div>
            </li>
            <li>
              <div className="text-2xl">
                <HiOfficeBuilding />
                <a className="rounded-badge font-bold text-base">Company</a>
              </div>
            </li>
            <li>
              <div className="text-2xl">
                <HiPhone />
                <a className="rounded-badge font-bold text-base">Contact</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
