import './contacts.css';
import React, {useState} from "react";

import Fotter from "../../components/fotter";
import { useSelector } from 'react-redux';


const Contacts = () => {
  const socials = useSelector((state) => state.social.social);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>

      <h1 className="Archive-title" dir="rtl">אנשי קשר בעירייה</h1>
      <h2 className="Archive-title2" dir="rtl">מחפש מישהו מהעירייה?</h2>
      <div className="template-container">
        <div className="search-input_Container">

          <input id="search-input" dir="rtl" type="text" placeholder="חפש מישהו..." onChange={(event) => {
            setSearchTerm(event.target.value);

          }} />
        </div>
        <div className="template_Container">
          {
            socials.filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val;
              }
            })
              .map(({_id, image, name, description, phone, email}) => {
                return (
                  <div className="cards-div" key={_id}>
                    <div className="template" >
                      <div className="img-div">
                        <img className="image" src={image} alt="" />
                      </div>
                      <h3>{name}</h3>
                      <p className="desctiption">{description}</p>
                      <p className="phone">{phone}</p>
                      <p className="email">{email}</p>

                    </div>
                  </div>
                )
              })
          }
        </div>
      </div>
      <Fotter />

    </>
  )
}
export default Contacts