type PropTypes = {
  nameID: string;
  options: { id: number; name: string }[];
  labelName: string;
  nameDefault?: string;
  classNameLabel?: string;
  classNameSelect?: string;
  classNameOption?: string;
};

export default function Select({
  nameID,
  options,
  labelName,
  nameDefault = 'Selecione',
  classNameLabel = '',
  classNameSelect = '',
  classNameOption = '',
}: PropTypes) {
  return (
    <>
      <label htmlFor={nameID} className={`label max-w-xs ${classNameLabel}`}>
        {labelName}
      </label>
      <select
        name={nameID}
        id={nameID}
        className={`select select-warning text-base-content 
      border-dotted ${classNameSelect}`}
        defaultValue={0}
      >
        <option
          disabled
          value={0}
          className={`p-3 rounded-3xl max-w-xs border-dotted
        text-base-content ${classNameOption}`}
        >
          {nameDefault}
        </option>

        {options.map((option) => (
          <option
            key={option.id}
            value={option.id}
            className={`p-3 rounded-3xl max-w-xs border-dotted 
            text-base-content ${classNameOption}`}
          >
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
}
