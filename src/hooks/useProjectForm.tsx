import { useRef, useState } from 'react';
import { submitForm_CreateProject } from '../utils/submitForm_CreateProject';

export function useProjectForm() {
  const NameRef = useRef<HTMLInputElement>(null);
  const OrçamentoRef = useRef<HTMLInputElement>(null);
  const SelectRef = useRef<any>(null);
  const [error, setError] = useState<boolean | null | undefined>(false);
  const [options, setOptions] = useState<Promise<any> | any>([]);

  const handleSubmit = (e: any) => {
    submitForm_CreateProject(
      e,
      NameRef,
      OrçamentoRef,
      SelectRef,
      setError,
      handleSubmit
    );
  };

  return {
    NameRef,
    OrçamentoRef,
    SelectRef,
    error,
    options,
    handleSubmit,
    setOptions,
    setError,
  };
}
