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
      className={`flex flex-grow content-between
    items-start px-8 pt-20 pb-20 w-full flex-wrap ${props.customClass}`}
    >
      {props.children}
    </main>
  );
}
