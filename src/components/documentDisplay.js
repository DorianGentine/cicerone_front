import DocumentCard from "./documentCard"

import display from "../styles/components/_c-document-display.module.scss"

function DocumentDisplay(props){

  const renderDataCards = datas => datas.map(
    (data, index) => {
      return(
        <DocumentCard 
          data={data} 
          rootURL={`${process.env.NEXT_PUBLIC_API_ROOT_URL}api/${props.admin_id}`} 
          loadData={props.loadData}
          key={index}
        ></DocumentCard>
      )
    }
  )

  const checkData = Array.isArray(props.data) && props.data.length !== 0

  return (
    <div className={display.document_display}>
      {checkData ? renderDataCards(props.data) : "Aucune entrée"}
    </div>
  );
}

export default DocumentDisplay