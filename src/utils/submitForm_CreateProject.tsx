import { Dispatch, MutableRefObject } from 'react';
import getColorByID from '../services/Projects/getColorByID';
import validateForm from './validateForm';

export const submitForm_CreateProject = (
  e: any,
  NameRef: React.MutableRefObject<HTMLInputElement | null>,
  OrçamentoRef: MutableRefObject<HTMLInputElement | null>,
  SelectRef: MutableRefObject<HTMLSelectElement>,
  setError: Dispatch<React.SetStateAction<boolean | null | undefined>>,
  handleSubmit: (project: any) => void
) => {
  e.preventDefault();
  if (validateForm(NameRef, OrçamentoRef, SelectRef, setError)) {
    getColorByID(SelectRef?.current?.value)
      .then((color) => {
        const { name, cost, category } = {
          name: NameRef.current?.value,
          cost: OrçamentoRef.current?.value,
          category: [
            SelectRef.current?.value,
            SelectRef.current?.selectedOptions[0].textContent,
            color,
          ],
        };
        handleSubmit({ name, cost, category });
        e.target.reset();
        NameRef.current?.focus();
      })
      .catch((err) => console.error(err));
  }
};
