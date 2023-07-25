import "./styles.css";

function Item({ isPacked, name }) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Welcome to Murgor's Packing List</h1>
      <Item isPacked={true} name="Swimming Costume" />
      <Item isPacked={false} name="Girlfriend" />
      <Item isPacked={true} name="Kali Laptop" />
    </section>
  );
}
