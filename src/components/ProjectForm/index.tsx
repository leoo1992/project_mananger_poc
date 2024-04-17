import LinkButton from '../layout/LinkButton';
import { useNavigate } from 'react-router-dom';
import Form from './SubComponents/Form';
import Input from './SubComponents/Input';
import Select from './SubComponents/Select';
import { useRef, useState, useEffect } from 'react';

export default function ProjectForm({ btnText }: { btnText: string }) {
  const navigate = useNavigate();
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
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(NameRef.current?.value);
      console.log(OrçamentoRef.current?.value);
      console.log(SelectRef.current?.value);
      console.log('passou', error);
      navigate('/');
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
    <Form>
      <div className="flex flex-col w-full max-w-xs p-4 gap-y-3.5">
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
      </div>
      <div className="flex flex-col w-full max-w-xs pb-4">
        <LinkButton
          type="submit"
          tittleBtn={btnText}
          OnClickEvent={handleSubmit}
        />
      </div>
    </Form>
  );
}
