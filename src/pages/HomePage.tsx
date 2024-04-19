import ImgBg from '../components/ImgHomeContainer/ImgBg';
import LinkButton from '../components/layout/LinkButton';

export default function HomePage() {
  return (
    <section
      className="flex flex-col w-full h-full
      items-center justify-center text-center"
    >
      <h1 className="text-xl sm:text-2xl">
        Bem-vindo ao
        <span className="text-warning p-1">Costs</span>
      </h1>
      <p className="pt-4 text-sm sm:text-xl">
        Começe a gerenciar seus projetos
      </p>
      <span className="mt-4 flex text-center justify-center">
        <LinkButton routeTo="/projects" tittleBtn="Gerenciar" />
      </span>
      <ImgBg />
    </section>
  );
}
