type PropTypes = {
  nameID: string;
  labelName: string;
  typeInput?: string;
  classNameInput?: string;
  classNameLabel?: string;
};

export default function Input({
  labelName,
  nameID,
  typeInput = 'text',
  classNameInput = '',
  classNameLabel = '',
}: PropTypes) {
  return (
    <>
      <label htmlFor={nameID} className={`label max-w-xs ${classNameLabel}`}>
        {labelName}
      </label>
      <input
        name={nameID}
        type={typeInput}
        placeholder={labelName}
        className={`input input-bordered input-warning 
        max-w-xs border-dotted ${classNameInput}`}
      />
    </>
  );
}
