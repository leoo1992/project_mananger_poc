import { ReactNode } from 'react';

export default function Form({ children }: { children: ReactNode }) {
  return (
    <form
      className="form w-full max-w-xs bg-base-200 mx-auto 
        rounded-3xl border-warning border-dotted border-2
        flex-col flex justify-center text-base-content 
        font-bold p-3 mt-3"
    >
      {children}
    </form>
  );
}
