import { useParams } from "react-router-dom";
export const Single = () => {
  const { theId } = useParams();
  return <h2>Detalle del item: {theId}</h2>;
};
