export default function Body({ savedValues }) {
  return (
    <div>
      <ul>
        {savedValues.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
