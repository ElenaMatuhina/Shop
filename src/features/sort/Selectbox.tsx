import { SortType } from 'types';

type SortProps = {
  options: {
    value: SortType;
    label: SortType;
  }[];
  value: SortType;
  handleOnChange: (value: string) => void;
};

export const Selectbox = ({ options, handleOnChange, value }: SortProps) => {
  const createOptions = (
    options: {
      value: SortType;
      label: SortType;
    }[]
  ) =>
    options.map((o) => (
      <option value={o.value} key={o.value}>
        {o.label}
      </option>
    ));

  const onChange = (e: React.FormEvent<HTMLSelectElement>) => {
    handleOnChange(e.currentTarget.value);
  };

  return (
    <div className="input-field col s12">
      <select className="browser-default" onChange={(e) => onChange(e)}>
        {createOptions(options)}
      </select>
    </div>
  );
};
