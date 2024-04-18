import { HiCheckCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm';
import toast from 'react-hot-toast';

const notify = () =>
  toast.custom(
    <div
      className="shadow-2xl backdrop-blur-sm bg-base-300 text-sm
     text-success font-extrabold bg-opacity-50 p-4 mt-16 rounded-3xl
     flex align-center self-center justify-center content-center 
     text-center items-center border border-success"
    >
      <div className="text-3xl pr-4">
        <HiCheckCircle />
      </div>
      <div>
        <span>Projeto adicionado com sucesso !</span>
      </div>
    </div>,
    {
      duration: 3000,
      position: 'top-center',
    }
  );

export default function CreateUpdateProjectsPage() {
  let navigate = useNavigate();

  function createPost(project: any) {
    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        notify();
        //  O argumento do tipo 'string' não é atribuível ao parâmetro do tipo 'NavigateOptions'.ts(2345)
        // const notify: () => string
        navigate('/projects');
      })
      .catch((error) => console.log(error));
  }

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
        handleSubmit={createPost}
        btnText="Cadastrar"
        projectData={undefined}
      />
    </section>
  );
}
