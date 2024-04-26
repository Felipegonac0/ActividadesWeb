"use client";
import { useEffect, useState } from "react";
import Card from "../components/card";
import NavBar from "../components/navbar";
import { useQuery } from "@tanstack/react-query";

export default function Favorites() {
  const [characters, setCharacters] = useState([
    {
      id: 0,
      name: "",
      status: "",
      species: "",
      gender: "",
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
      const favoritesFromStorage = localStorage.getItem("favorites");
      const favoritesArray = JSON.parse(favoritesFromStorage!);
      const response = await fetch("https://rickandmortyapi.com/api/character");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      let favoriteCharacters = data.results;
      favoriteCharacters = favoriteCharacters.filter(
        (character: {
          id: 0;
          name: "";
          status: "";
          species: "";
          type: "";
          gender: "";
          origin: {
            name: "";
            url: "";
          };
          location: {
            name: "";
            url: "";
          };
          image: "";
          episode: [];
          url: "";
          created: "";
        }) => favoritesArray.includes(character.id)
      );
      setCharacters(favoriteCharacters);
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
