import { BiHighlight } from 'react-icons/bi';
import { HiTrash } from 'react-icons/hi';
import { Key, useEffect, useState } from 'react';
import LinkButton from '../components/layout/LinkButton';
import readAllProjects from '../services/Projects/readAllProjects';

const colorMap: Record<string, string> = {
  'bg-blue-500': '#0000FF',
  'bg-red-500': '#EF1111',
  'bg-yellow-500': '#FFD700',
  'bg-green-500': '#10B911',
  'bg-purple-500': '#48D1CC',
  'bg-pink-500': '#FF00FF',
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Promise<any> | any>([]);

  useEffect(() => {
    readAllProjects(setProjects);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="m-0 p-0 flex justify-end items-end self-end content-end">
        <LinkButton
          tittleBtn="Novo Projeto"
          routeTo="/projects/update_or_create"
        />
      </div>
      <h1 className="text-lg font-extrabold py-5 pl-8">Meus Projetos</h1>
      {projects.length === 0 ? (
        <div className="flex justify-center items-center h-60">
          <p className="text-gray-500 text-md text-center">
            Nenhum projeto encontrado.
          </p>
        </div>
      ) : (
        <div
          className="grid sm:w-11/12 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5
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
                className="w-full h-full min-w-64 max-w-xl min-h-36 bg-gradient-to-br from-base-200 to-base-100  p-4 
              flex flex-col justify-around content-center self-center
              rounded-badge shadow-sm shadow-gray-600"
              >
                <div>
                  <h2
                    className={`font-extrabold text-center ${
                      project.name?.length > 18 ? 'text-sm' : 'text-md'
                    }`}
                  >
                    {project.name?.charAt(0).toUpperCase() +
                      project.name?.slice(1).toLowerCase()}
                  </h2>
                </div>
                <p className="text-sm p-3 mt-3">Orçamento: R$ {project.cost}</p>
                <div className="flex justify-between">
                  <div
                    className="w-fit flex items-center content-center bg-base-200 
                  p-2 rounded-badge mt-3 shadow-sm shadow-gray-600"
                  >
                    <span
                      className={`w-5 h-5 rounded-full border glass
                    shadow-sm shadow-gray-600 mr-2 ${project.category[2]}`}
                      style={{ backgroundColor: colorMap[project.category[2]] }}
                    ></span>
                    <p className="text-xs pr-2 font-semibold">
                      {project.category[1]}
                    </p>
                  </div>

                  <div className="flex gap-1 items-end">
                    <button
                      className="text-blue-500 text-xl btn btn-sm btn-circle 
                    btn-ghost btn-outline shadow-sm shadow-gray-600 bg-base-100"
                    >
                      <BiHighlight />
                    </button>
                    <button
                      className="text-error text-xl btn btn-sm btn-circle 
                    btn-ghost btn-outline shadow-sm shadow-gray-600 bg-base-100"
                    >
                      <HiTrash />
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
