import { Link } from 'react-router-dom';

type LinkProps = {
  routeTo?: string | null | undefined;
  tittleBtn: string;
  children?: React.ReactNode;
  type?: string;
  OnClickEvent?: () => void;
};

export default function LinkButton({
  routeTo,
  tittleBtn,
  children = null,
  type = 'button',
  OnClickEvent,
}: LinkProps) {
  if (!routeTo)
    return (
      <button
        onClick={OnClickEvent}
        className="btn btn-warning btn-sm sm:btn-md w-32 flex self-center 
      items-center mt-6 border-0  hover:bg-yellow-400
       hover:scale-110 transition-all duration-500 
       ease-in-out hover:shadow-warning hover:shadow-md text-black"
      >
        {tittleBtn}
        {children}
      </button>
    );
  return (
    <Link
      to={routeTo}
      type={type}
      onClick={OnClickEvent}
      className="btn btn-warning btn-sm sm:btn-md w-32 flex self-center 
      items-center mt-6 border-0  hover:bg-yellow-400
       hover:scale-110 transition-all duration-500 
       ease-in-out hover:shadow-warning hover:shadow-md text-black"
    >
      {tittleBtn}
      {children ? children : null}
    </Link>
  );
}
