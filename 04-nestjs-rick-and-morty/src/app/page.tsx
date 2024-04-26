"use client";
import Image from "next/image";
import Card from "./components/card";
import NavBar from "./components/navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [characters, setCharacters] = useState([
    {
      id: 0,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      image: "",
      url: "",
      location: {
        name: "",
        url: "",
      },
    },
  ]);
  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div className="m-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 place-items-center">
          {characters.map((character, index) => (
            <Card
              key={index}
              id={character.id!}
              imgUrl={character.image!}
              name={character.name!}
              status={character.status!}
              species={character.species!}
              gender={character.gender!}
              location={character.location.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
