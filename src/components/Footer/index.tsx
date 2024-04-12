import { BsLinkedin, BsGithub } from 'react-icons/bs';
export default function Footer() {
  return (
    <footer className="footer items-center p-3 bg-neutral text-neutral-content bottom-0 absolute">
      <nav className="grid-flow-col gap-10 place-self-center">
        <a
          href="https://github.com/leoo1992"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl btn btn-circle btn-ghost btn-sm p-0 m-0"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/leocustodio1992/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl btn btn-circle btn-ghost btn-sm p-0 m-0"
        >
          <BsLinkedin />
        </a>
      </nav>
    </footer>
  );
}
