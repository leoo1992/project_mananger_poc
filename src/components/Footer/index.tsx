import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
export default function Footer() {
  return (
    <footer className="footer items-center p-3 bg-neutral text-neutral-content bottom-0 absolute">
      <nav className="grid-flow-col gap-10 place-self-center">
        <a className="text-3xl btn btn-circle btn-ghost btn-sm p-0 m-0">
          <BsGithub />
        </a>
        <a className="text-3xl btn btn-circle btn-ghost btn-sm p-0 m-0">
          <BsLinkedin />
        </a>
      </nav>
    </footer>
  );
}
