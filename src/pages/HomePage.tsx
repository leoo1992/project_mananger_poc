import { Link } from 'react-router-dom';
import ImgBg from '../components/ImgContainer/ImgBg';

export default function HomePage() {
  return (
    <section
      className="flex flex-col flex-grow w-full h-full
     self-center items-center justify-center content-center text-center py-10 sm:py-16"
    >
      <h1 className="text-xl sm:text-2xl">
        Bem-vindo ao
        <span className="text-warning p-1">Costs</span>
      </h1>
      <p className="pt-4 text-sm sm:text-xl">
        Começe a gerenciar seus projetos
      </p>
      <Link
        to="/projects"
        className="btn btn-warning btn-sm sm:btn-md w-32 flex self-center items-center mt-6 border-0"
      >
        Criar Projeto
      </Link>
      <ImgBg />
    </section>
  );
}
