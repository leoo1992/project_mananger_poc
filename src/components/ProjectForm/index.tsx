import { useProjectForm } from '../../hooks/useProjectForm';
import FormEffects from '../../utils/FormEffects';
import { submitForm_CreateProject } from '../../utils/submitForm_CreateProject';
import LinkButton from '../layout/LinkButton';
import Form from './SubComponents/Form';
import Input from './SubComponents/Input';
import Select from './SubComponents/Select';

export default function ProjectForm({
  btnText,
  handleSubmit,
}: {
  btnText: string;
  handleSubmit: (project: any) => void;
}) {
  const {
    NameRef,
    OrçamentoRef,
    SelectRef,
    error,
    options,
    handleSubmit: submitForm,
    setError,
    setOptions,
  } = useProjectForm();

  return (
    <Form
      onSubmit={(e: any) =>
        submitForm_CreateProject(
          e,
          NameRef,
          OrçamentoRef,
          SelectRef,
          setError,
          handleSubmit
        )
      }
    >
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
        <FormEffects SelectRef={SelectRef} setOptions={setOptions} />
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
        <span className="mt-4 flex text-center justify-center">
          <LinkButton type="submit" tittleBtn={btnText} />
        </span>
      </div>
    </Form>
  );
}
