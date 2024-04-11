import { HiX, HiUser, HiCog, HiLogout } from 'react-icons/hi';
import { useState } from 'react';

export default function RightMenu() {
  const [active2, setActive2] = useState(true);

  return (
    <div className="">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <button onClick={() => setActive2(!active2)} className="text-xl">
            <label
              htmlFor="my-drawer-4"
              className={`btn p-0 m-0 -top-3 right-1 drawer-button z-50 absolute 
              text-neutral-content btn-circle 
              transition-all duration-500 ease-in-out
              ${
                active2
                  ? 'text-xl sm:text-3xl btn-ghost'
                  : 'btn-error btn-xs shadow-error font-extrabold'
              }`}
            >
              {active2 ? <HiUser /> : <HiX />}
            </label>
          </button>
        </div>
        <div className="drawer-side h-svh w-svw">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay h-svh w-svw flex justify-between
                        self-center align-middle items-center content-center
                        transition-all duration-1000 ease-in-out"
            onClick={() => setActive2(!active2)}
          ></label>
          <ul className="menu pt-16 h-svh bg-neutral text-neutral-content shadow-sm shadow-primary w-48">
            <li>
              <a className="rounded-badge font-bold text-base">
                <div className="text-2xl">
                  <HiUser />
                </div>
                Profile
              </a>
            </li>
            <li>
              <a className="rounded-badge font-bold text-base">
                <div className="text-2xl">
                  <HiCog />
                </div>
                Configs
              </a>
            </li>
            <li>
              <button className="rounded-badge font-bold text-base">
                <div className="text-2xl">
                  <HiLogout />
                </div>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
