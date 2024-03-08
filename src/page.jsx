import HTMLFlipBook from "react-pageflip";

import geeks from "./images/photo_2023-02-01_00-37-45.jpg"
import PageAyana from "./pageAyan";
import PageMilana from "./pageMilana";
import PageAiperi from "./pageAuperi";
import PageAidana from "./pageAidana";

function Book(props) {
  return (
    <HTMLFlipBook width={550} height={750}>
      <div className="demoPage">
        <div className="demoPage1">
      <img src={geeks} alt="geeks"/>
      <h1>
       
      </h1>
      </div>
      </div>

    
      <div className="demoPage"><PageAyana/></div>
      <div className="demoPage"><PageMilana/></div>
      <div className="demoPage"><PageAiperi/></div>
      <div className="demoPage"><PageAidana/> </div>
      <div className="demoPagel">
        
         </div>
    </HTMLFlipBook>
  );    
}
export default Book;