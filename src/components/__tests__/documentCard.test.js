import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import DocumentCard from '../documentCard';
import card from "../../styles/components/_c-document-display.module.scss"
// import Admin from "../../pages/admin/[admin_id]"

const data = {
  name: "Allemagne, République tchèque & Autriche",
  __v: 0,
  _id: "602504aeb04e149baec2d4c4"
}
const rootURL = "http://localhost:4200/api/region"
const loadData = ()=>{console.log("yo")}
// const loadData = Admin.refreshData()


describe("DocumentCard Tests", ()=>{
  const card = shallow(
    <DocumentCard 
      data={data} 
      rootURL={rootURL} 
      loadData={loadData} 
    />
  );

  it('should displays the right text', () => {
    expect(card.find("p").text()).toEqual("Allemagne, République tchèque & Autriche");
  })
  it('should have two buttons', () => {
    expect(card.find("button")).toHaveLength(2);
  })
  // expect(card.find("button").first().text()).toEqual("Editer");
})