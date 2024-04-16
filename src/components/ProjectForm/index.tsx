import LinkButton from '../layout/LinkButton';
import Form from './SubComponents/Form';
import Input from './SubComponents/Input';
import Select from './SubComponents/Select';

export default function ProjectForm() {
  const options = [
    { id: 1, name: 'Opção 1' },
    { id: 2, name: 'Opção 2' },
    { id: 3, name: 'Opção 3' },
  ];

  const handleClick = () => {
    console.log('Clicou');
  };

  return (
    <Form>
      <div className="flex flex-col w-full max-w-xs p-4 gap-y-3.5">
        <Input nameID={'name'} labelName={'Nome do Projeto'} />
        <Input
          nameID={'orcamento'}
          labelName={'Orçamento'}
          typeInput="number"
        />
        <Select
          nameID={'categoria_id'}
          options={options}
          labelName={'Categoria'}
        />
      </div>
      <div className="flex flex-col w-full max-w-xs pb-4">
        <LinkButton
          type="submit"
          tittleBtn="Cadastrar"
          routeTo="/"
          OnClickEvent={handleClick}
        />
      </div>
    </Form>
  );
}
