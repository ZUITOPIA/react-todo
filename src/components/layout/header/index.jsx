import Input from '../../shared/Input/Input';

export default function Header({ addSavedValue }) {
  return (
    <>
      <h2>투두리스트</h2>
      <Input addSavedValue={addSavedValue} />
    </>
  );
}
