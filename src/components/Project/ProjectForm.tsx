import React from 'react';
import LinkButton from '../layout/LinkButton';

export default function ProjectForm() {
  const handleClick = () => {
    console.log('Clicou');
  };

  return (
    <form
      className="form w-full max-w-xs 
   bg-base-200 mx-auto rounded-3xl border-warning border-dotted border-2
    flex-col
   flex justify-center text-base-content font-bold p-3 mt-5"
    >
      <div className="flex flex-col w-full max-w-xs p-4 gap-y-3.5">
        <label htmlFor="nome" className="label max-w-xs">
          Nome do Projeto
        </label>
        <input
          name="name"
          type="text"
          placeholder="Nome do Projeto"
          className="input input-bordered input-warning max-w-xs border-dotted"
        />
        <label htmlFor="orcamento" className="label max-w-xs">
          Orçamento
        </label>
        <input
          name="orcamento"
          type="number"
          placeholder="Orçamento"
          className="input input-bordered input-warning max-w-xs border-dotted"
        />
        <label htmlFor="categoria_id" className="label max-w-xs">
          Categoria
        </label>
        <select
          name="category_id"
          id="category_id"
          className="select select-warning text-base-content border-dotted"
        >
          <option
            disabled
            selected
            className="p-3 rounded-3xl max-w-xs border-dotted"
          >
            Selecione uma categoria
          </option>
          <option value={1} className="p-3 rounded-3xl max-w-xs">
            cat 1
          </option>
        </select>
      </div>
      <div className="flex flex-col w-full max-w-xs pb-4">
        <LinkButton
          type="submit"
          tittleBtn="Cadastrar"
          routeTo="/"
          OnClickEvent={handleClick}
        />
      </div>
    </form>
  );
}
