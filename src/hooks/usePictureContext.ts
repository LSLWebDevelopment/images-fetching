import { useContext } from "react";
import { PictureContext } from "../contexts/PictureContext";

export function usePictureContext() {
  const context = useContext(PictureContext);
  if (!context) {
    throw new Error("Context not created!");
  }
  return context;
}
