import { useParams } from "react-router-dom";

import AdminBody from "../components/adminBody"

export default function AdminPagesRouter() {
  let { admin_id } = useParams();
  
  return <AdminBody admin_id={admin_id} />
}