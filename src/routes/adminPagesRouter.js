import { useParams } from "react-router-dom";

import DocumentCreation from "../components/documentCreation"
import DocumentDisplay from "../components/documentDisplay"

export default function AdminPagesRouter() {
  let { admin_id } = useParams();
  
  return (
    <div className="admin-body">
      <DocumentCreation admin_id={admin_id} />
      <DocumentDisplay admin_id={admin_id} />
    </div>
  );
}