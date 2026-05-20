import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{err.data || err.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
