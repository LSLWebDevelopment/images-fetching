import { useState, type ChangeEvent } from "react";
import { usePictureContext } from "../hooks/usePictureContext";

export function SearchBar() {
  const { fetchPhotos } = usePictureContext();
  const [term, setTerm] = useState("");

  const handleSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchPhotos(term);
    setTerm("");
  };

  return (
    <div className="border-2 border-gray-300 px-5 py-2.5 my-10">
      <form onSubmit={handleSubmit}>
        <label htmlFor="term" className="italic text-2xl">
          Search Term
        </label>
        <br />
        <input
          type="text"
          name="term"
          id="term"
          value={term}
          onChange={handleSearchTerm}
          className="border-2 border-gray-400 w-full p-1.5 text-2xl"
        />
      </form>
    </div>
  );
}
