import { useNavigate } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm';
import createProject from '../services/Projects/createProject';

export default function CreateUpdateProjectsPage() {
  const navigate = useNavigate();
  return (
    <section
      className="flex flex-col flex-grow w-full h-full
   items-center"
    >
      <h1 className="text-xl sm:text-2xl">Criar Projeto</h1>
      <p className="pt-1 text-sm sm:text-xl mb-2">
        Crie seu projeto para adicionar serviços
      </p>
      <ProjectForm
        handleSubmit={(project) => createProject(project, navigate)}
        btnText="Cadastrar"
      />
    </section>
  );
}
