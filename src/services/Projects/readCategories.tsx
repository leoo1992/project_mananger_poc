import { MutableRefObject } from 'react';

export default function readCategories(
  SelectRef: MutableRefObject<HTMLSelectElement>,
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
