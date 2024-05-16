import { useParams } from "react-router-dom"; // importerar funktionen useParams från node paketet "react-router-dom"

type CatParams = { catName: string }; // beskriver (deconstructar?) parameterdatats format
export const Cats = () => {
  const { catName } = useParams<CatParams>();
  return (
    <p>
      En katt som heter <b>{catName}</b>
    </p>
  );
};
