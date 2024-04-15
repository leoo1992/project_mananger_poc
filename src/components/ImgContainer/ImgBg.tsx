import { Img } from 'react-image';
import project from '../../assets/project.png';
import { useEffect, useState } from 'react';

interface NavigatorWithConnection extends Navigator {
  connection?: {
    effectiveType?: string;
  };
  mozConnection?: {
    effectiveType?: string;
  };
  webkitConnection?: {
    effectiveType?: string;
  };
}

export default function ImgBg() {
  const [is3G, setIs3G] = useState(false);

  useEffect(() => {
    const getConnection = () => {
      const nav = navigator as NavigatorWithConnection;
      if ('connection' in nav) {
        return nav.connection;
      } else if ('mozConnection' in nav) {
        return nav.mozConnection;
      } else if ('webkitConnection' in nav) {
        return nav.webkitConnection;
      } else {
        return null;
      }
    };

    const connection = getConnection();
    if (connection && connection.effectiveType) {
      setIs3G(
        connection.effectiveType === 'slow-4g' ||
          connection.effectiveType === 'fast-3g' ||
          connection.effectiveType === '3g' ||
          connection.effectiveType === 'slow-3g' ||
          connection.effectiveType === 'fast-2g' ||
          connection.effectiveType === '2g' ||
          connection.effectiveType === 'slow-2g'
      );
    }
  }, []);

  return (
    <>
      {!is3G && (
        <Img
          src={project}
          alt="Project"
          loader={<div>Carregando...</div>}
          unloader={<div>Erro ao carregar a imagem</div>}
          className="mt-5 sm:h-5/6 flex content-between justify-between align-middle self-center items-center 
       bg-cover bg-center bg-fixed bg-clip-border bg-origin-border bg-no-repeat"
        />
      )}
    </>
  );
}
