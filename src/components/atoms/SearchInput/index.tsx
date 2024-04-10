import BaseInput from "../BaseInput";

interface SearchInputProps {
  value: string;
  onInput: (newValue: string) => void;
  className?: string;
}

function SearchInput(props: SearchInputProps) {
  return (
    <BaseInput
      className={props.className}
      type="text"
      value={props.value}
      onInput={props.onInput}
      placeholder="Search by title"
    />
  );
}

export default SearchInput;
