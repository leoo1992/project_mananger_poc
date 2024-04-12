import { HiMoon, HiSun } from 'react-icons/hi';
export default function ThemeToogle() {
  return (
    <label className="swap swap-rotate p-0 m-0 btn btn-circle btn-ghost py-0 my-0 mr-14 text-xl sm:text-3xl">
      <input type="checkbox" className="theme-controller " value="dark" />
      <div className="swap-off fill-current m-0 p-0 ">
        <HiMoon />
      </div>
      <div className="swap-on fill-current m-0 p-0 ">
        <HiSun />
      </div>
    </label>
  );
}
