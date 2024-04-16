import ProjectForm from '../components/ProjectForm';

export default function ProjectsPage() {
  return (
    <section
      className="flex flex-col flex-grow w-full h-full
   items-center"
    >
      <h1 className="text-xl sm:text-2xl">Criar Projeto</h1>
      <p className="pt-1 text-sm sm:text-xl mb-2">
        Crie seu projeto para adicionar serviços
      </p>
      <ProjectForm />
    </section>
  );
}
