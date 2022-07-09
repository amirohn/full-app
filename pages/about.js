export default function About({copy}) {
  return (
    <div>
      <ul>
        {copy.map((item) => (
          <li key={item.id}>{item.quote}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("https://dummyjson.com/quotes");
  const data = await res.json();

  return {
    props: {copy: data.quotes},
  };
}
