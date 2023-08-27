export default function Home() {
  const payload = fetch("https://jsonplaceholder.typicode.com/todos").then(
    (res) => res.json()
  );
  console.log(payload);
  return <div>Main Page</div>;
}
