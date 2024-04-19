import { MutableRefObject, useEffect } from 'react';
import readCategories from '../services/Projects/readCategories';

interface FormEffectsProps {
  SelectRef: MutableRefObject<HTMLSelectElement>;
  setOptions: (data: any) => void;
}

export default function FormEffects({
  SelectRef,
  setOptions,
}: FormEffectsProps) {
  useEffect(() => {
    readCategories(SelectRef, setOptions);
  }, []);

  return null;
}
