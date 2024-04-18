import validateForm from './validateForm';

export const submitForm_CreateProject = (
  e: any,
  NameRef: React.MutableRefObject<HTMLInputElement | null>,
  OrçamentoRef: React.MutableRefObject<HTMLInputElement | null>,
  SelectRef: React.MutableRefObject<HTMLSelectElement | null>,
  setError: React.Dispatch<React.SetStateAction<boolean | null | undefined>>,
  handleSubmit: (project: any) => void
) => {
  e.preventDefault();
  if (validateForm(NameRef, OrçamentoRef, SelectRef, setError)) {
    const { name, cost, category } = {
      name: NameRef.current?.value,
      cost: OrçamentoRef.current?.value,
      category: [
        SelectRef.current?.value,
        SelectRef.current?.selectedOptions[0].textContent,
      ],
    };
    handleSubmit({ name, cost, category });
    e.target.reset();
    NameRef.current?.focus();
  }
};
