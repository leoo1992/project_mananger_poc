export default function readAllProjects(setProjects: (data: any) => void) {
  fetch('http://localhost:5000/projects', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      setProjects(data);
    })
    .catch((er) => console.log(er));
}
