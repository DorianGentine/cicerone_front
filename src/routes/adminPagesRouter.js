import { useParams } from "react-router-dom";

// import Admin from "../pages/admin"

export default function AdminPagesRouter() {
  let { admin_id } = useParams();
  
  return (
    <div>
      <h3>ID: {admin_id}</h3>
    </div>
  );
}