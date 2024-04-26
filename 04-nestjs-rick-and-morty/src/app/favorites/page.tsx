import Card from "../components/card";
import NavBar from "../components/navbar";
import { getCharacters } from "@/app/services/api";
import { useQuery } from "@tanstack/react-query";

export default function Favorites() {
  return (
    <>
      <NavBar></NavBar>
      <div className="m-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 place-items-center">
          <h1>hola</h1>
        </div>
      </div>
    </>
  );
}
