"use client";
import { useEffect, useState } from 'react';

interface Props {
  id: number | any;
  imgUrl: string | any;
  name: string | any;
  status: string | any;
  species: string | any;
  gender: string | any;
  location: string | any;
}

const Card: React.FC<Props> = ({
  id,
  imgUrl,
  name,
  status,
  species,
  gender,
  location,
}) => {
  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    // Load favorite characters from local storage
    const favoritesFromStorage = localStorage.getItem("favorites");
    if (favoritesFromStorage) {
      const favoritesArray = JSON.parse(favoritesFromStorage);
      setFavorite(favoritesArray.includes(id));
    }
  }, [id]);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    // Update favorite characters array
    let favoritesArray: number[] = [];
    const favoritesFromStorage = localStorage.getItem("favorites");
    if (favoritesFromStorage) {
      favoritesArray = JSON.parse(favoritesFromStorage);
    }
    if (favorite) {
      // Remove character from favorites
      favoritesArray = favoritesArray.filter((favId: number) => favId !== id);
    } else {
      // Add character to favorites
      favoritesArray.push(id);
    }
    // Save updated favorites array to local storage
    localStorage.setItem("favorites", JSON.stringify(favoritesArray));
  };

  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-sm">
      <a href="#">
        <img className="rounded-t-lg w-full" src={imgUrl} alt="" />
      </a>
      <div className="p-5">
        <a href={`/profile?id=${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-wrap text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>Status: </strong> {status}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>Location: </strong> {location}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>Species: </strong> {species}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <strong>Gender: </strong> {gender}
        </p>
        <div className="flex flex-row justify-between items-center">
          <button onClick={toggleFavorite}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={`${favorite ? "white" : "none"}`}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-max"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </button>
          <a
            href={`/profile?id=${id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
