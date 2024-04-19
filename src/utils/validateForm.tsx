import { Dispatch, MutableRefObject } from 'react';

export default function validateForm(
  NameRef: MutableRefObject<HTMLInputElement | null>,
  OrçamentoRef: MutableRefObject<HTMLInputElement | null>,
  SelectRef: MutableRefObject<HTMLSelectElement>,
  setError: Dispatch<React.SetStateAction<boolean | null | undefined>>
): boolean {
  if (
    NameRef.current?.value &&
    OrçamentoRef.current?.value &&
    SelectRef.current?.value &&
    SelectRef.current?.value !== '0' &&
    OrçamentoRef.current?.value.trim() !== '' &&
    NameRef.current?.value.trim() !== '' &&
    SelectRef.current?.value.trim() !== ''
  ) {
    setError(false);
    return true;
  }
  setError(true);
  return false;
}
