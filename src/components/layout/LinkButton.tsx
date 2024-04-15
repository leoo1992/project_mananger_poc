import { Link } from 'react-router-dom';

type LinkProps = {
  routeTo: string;
  tittleBtn: string;
  children?: React.ReactNode;
};

export default function LinkButton({
  routeTo,
  tittleBtn,
  children,
}: LinkProps) {
  return (
    <Link
      to={routeTo}
      className="btn btn-warning btn-sm sm:btn-md w-32 flex self-center 
      items-center mt-6 border-0  hover:bg-yellow-400
       hover:scale-110 transition-all duration-500 
       ease-in-out hover:shadow-warning hover:shadow-md"
    >
      {tittleBtn}
      {children}
    </Link>
  );
}
