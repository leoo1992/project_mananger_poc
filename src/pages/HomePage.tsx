import ImgBg from '../components/ImgHomeContainer/ImgBg';
import LinkButton from '../components/layout/LinkButton';

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
      <LinkButton routeTo="/projects" tittleBtn="Criar Projeto" />
      <ImgBg />
    </section>
  );
}
