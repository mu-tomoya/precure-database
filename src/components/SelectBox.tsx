export default function Select({ props }: { props: any }) {
  return (
    <select>
      {props.map((item: any) => (
        <option key={item["series_id"]}>{item["series"]}</option>
      ))}
    </select>
  );
}
