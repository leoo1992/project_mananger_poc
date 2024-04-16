import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from 'react';

type Props = {
  children:
    | ReactNode
    | string
    | number
    | boolean
    | ReactElement<unknown, string | JSXElementConstructor<unknown>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
  customClass?: string;
};
export default function Container(props: Props) {
  return (
    <main
      className={`flex
    items-start min-h-screen min-w-screen flex-wrap py-20 px-4 ${
      props.customClass ? props.customClass : ''
    }`}
    >
      {props.children}
    </main>
  );
}
