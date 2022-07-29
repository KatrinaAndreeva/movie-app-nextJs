import { useRouter } from 'next/router';
import requests from '../utils/requests';

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex justify-center text-xl text-gray-200 bg-gray-600 select-none lg:text-2xl">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2
          onClick={() => router.push(`?genre=${key}`)}
          className="m-6 cursor-pointer hover:text-white active:text-red-400"
          key={key}
        >
          {title}
        </h2>
      ))}
    </div>
  );
}
