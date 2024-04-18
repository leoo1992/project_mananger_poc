import { notifyError } from '../../components/layout/ToastError';
import { notifySuccess } from '../../components/layout/ToastSuccess';

export default function createProject(
  project: any,
  navigate: (location: any) => void
) {
  fetch('http://localhost:5000/projects', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(project),
  })
    .then((resp) => resp.json())
    .then((data) => {
      notifySuccess({ text: 'Projeto criado com sucesso!' });
      console.log(data);
      navigate('/projects');
    })
    .catch((error) => {
      notifyError({ text: 'Erro ao criar projeto' });
      console.log(error);
    });
}
