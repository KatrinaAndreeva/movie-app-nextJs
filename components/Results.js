import Card from './Card';

export default function Results({ results }) {
  return (
    <div className="text-gray-200 bg-gray-700 select-none sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
