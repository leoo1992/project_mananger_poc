import LinkButton from '../layout/LinkButton';
import Form from './SubComponents/Form';
import Input from './SubComponents/Input';
import Select from './SubComponents/Select';
import { useRef, useState, useEffect } from 'react';

export default function ProjectForm({
  btnText,
  handleSubmit,
  projectData,
}: {
  btnText: string;
  handleSubmit: (project: any) => void;
  projectData: any;
}) {
  const NameRef = useRef<HTMLInputElement>(null);
  const OrçamentoRef = useRef<HTMLInputElement>(null);
  const SelectRef = useRef<HTMLSelectElement>(null);
  const [error, setError] = useState<boolean | null | undefined>(false);
  const [options, setOptions] = useState<Promise<any> | any>([]);

  useEffect(() => {
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
    NameRef.current?.focus();
  }, []);

  const submit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
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

  const validateForm = () => {
    if (
      NameRef.current?.value &&
      OrçamentoRef.current?.value &&
      SelectRef.current?.value &&
      SelectRef.current?.value !== '0' &&
      OrçamentoRef.current?.value.trim() !== '' &&
      NameRef.current?.value.trim() !== '' &&
      SelectRef.current?.value.trim() !== ''
    ) {
      setError(false);
      return true;
    }
    setError(true);
    return false;
  };

  return (
    <Form onSubmit={submit}>
      <div className="flex flex-col w-full max-w-xs p-4 gap-y-1">
        <Input
          inputRef={NameRef}
          nameID={'name'}
          labelName={'Nome do Projeto'}
        />
        <Input
          inputRef={OrçamentoRef}
          nameID={'orcamento'}
          labelName={'Orçamento'}
          typeInput="number"
        />
        <Select
          selectRef={SelectRef}
          nameID={'categoria_id'}
          options={options}
          labelName={'Categoria'}
        />

        {error ? (
          <span className="text-red-500 text-sm">
            * Preencha todos os campos
          </span>
        ) : null}

        <LinkButton type="submit" tittleBtn={btnText} />
      </div>
    </Form>
  );
}
