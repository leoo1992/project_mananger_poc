export default function validateForm(
  NameRef: React.MutableRefObject<HTMLInputElement | null>,
  OrçamentoRef: React.MutableRefObject<HTMLInputElement | null>,
  SelectRef: React.MutableRefObject<HTMLSelectElement | null>,
  setError: React.Dispatch<React.SetStateAction<boolean | null | undefined>>
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
