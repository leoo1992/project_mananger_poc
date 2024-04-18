export default function readCategories(
  SelectRef: React.MutableRefObject<HTMLSelectElement | null>,
  setOptions: (data: any) => void
) {
  fetch('http://localhost:5000/categories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (SelectRef.current) {
        setOptions(data);
      }
    })
    .catch((er) => console.log(er));
}
