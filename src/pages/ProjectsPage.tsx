import { BiHighlight } from 'react-icons/bi';
import { HiTrash } from 'react-icons/hi';
import { Key, useEffect, useState } from 'react';
import LinkButton from '../components/layout/LinkButton';
import readAllProjects from '../services/Projects/readAllProjects';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Promise<any> | any>([]);

  useEffect(() => {
    readAllProjects(setProjects);
  }, []);

  return (
    <div className="w-full h-full">
      <div className="m-0 p-0 flex justify-end items-end self-end content-end">
        <LinkButton
          tittleBtn="Novo Projeto"
          routeTo="/projects/update_or_create"
        />
      </div>
      <h1 className="text-lg py-5 pl-8">Meus Projetos</h1>
      {projects.length === 0 ? (
        <div className="flex justify-center items-center h-60">
          <p className="text-gray-500 text-md text-center">
            Nenhum projeto encontrado.
          </p>
        </div>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6
       justify-center items-center content-center self-center justify-items-center"
        >
          {projects.map(
            (project: {
              id: Key;
              name: string;
              cost: string;
              category: (string | number)[];
            }) => (
              <div
                key={project.id}
                className="w-full h-full min-w-60 min-h-36 bg-base-300 p-6 
              flex flex-col justify-around content-center self-center
              rounded-badge shadow-md"
              >
                <div className="flex justify-between">
                  <h2
                    className={`font-bold${
                      project.name?.length > 18 ? 'text-sm' : 'text-md'
                    }`}
                  >
                    {project.name}
                  </h2>
                  <div className="flex gap-2 text-xl">
                    <span className="text-blue-500">
                      <BiHighlight />
                    </span>
                    <span className="text-error">
                      <HiTrash />
                    </span>
                  </div>
                </div>
                <p className="text-sm mt-3">Orçamento: R${project.cost}</p>
                <p className="text-sm">Categoria: {project.category[1]}</p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
