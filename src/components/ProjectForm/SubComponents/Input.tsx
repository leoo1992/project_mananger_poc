import { RefObject } from 'react';

type PropTypes = {
  nameID: string;
  labelName: string;
  typeInput?: string;
  classNameInput?: string;
  classNameLabel?: string;
  inputRef: RefObject<HTMLInputElement>;
  required?: boolean;
};

export default function Input({
  labelName,
  nameID,
  typeInput = 'text',
  classNameInput = '',
  classNameLabel = '',
  inputRef,
  required = true,
}: PropTypes) {
  return (
    <>
      <label htmlFor={nameID} className={`label max-w-xs ${classNameLabel}`}>
        {labelName}
      </label>
      <input
        ref={inputRef}
        name={nameID}
        type={typeInput}
        placeholder={labelName}
        required={required}
        className={`input input-bordered input-warning 
        max-w-xs border-dotted ${classNameInput}`}
      />
    </>
  );
}
