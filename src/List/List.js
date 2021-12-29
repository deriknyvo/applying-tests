function List(prop) {
  return (
    <ul>
      {prop.list.map((item, key) => <li key={`${item}-${key}`}>{item}</li>)}
    </ul>
  );
}

export default List;
