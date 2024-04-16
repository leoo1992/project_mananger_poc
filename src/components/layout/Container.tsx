import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  customClass?: string;
};
export default function Container({ children, customClass = '' }: Props) {
  return (
    <main
      className={`flex
    items-start min-h-screen min-w-screen flex-wrap py-20 px-4 ${customClass}`}
    >
      {children}
    </main>
  );
}
