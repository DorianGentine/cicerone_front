import { useParams } from "react-router-dom";

import Admin from "../pages/admin"

export default function Page() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  if(id === "admin"){
    return <Admin></Admin>
  }else{
    return (
      <div className="_e-container">
        <h3>ID: {id}</h3>
      </div>
    );
  }
}