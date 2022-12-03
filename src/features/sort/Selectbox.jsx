export const Selectbox = ({ options, handleOnChange }) => {
  const createOptions = (options) =>
    options.map((o) => (
      <option value={o.value} key={o.value}>
        {o.label}
      </option>
    ));

  const onChange = (e) => {
    handleOnChange(e.target.value);
  };

  return (
    <div className="input-field col s12">
      <select className="browser-default" onChange={(e) => onChange(e)}>
      {createOptions(options)}
      </select>
    </div>
  );
};
