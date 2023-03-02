import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, {useState} from "react";
import AutoComplete from "./AutoComplete"

const EditableTabs = ({tabsList, setCurrentTab, setTabIndex, activeIndex}) => {
   /// const [key, setKey] = useState('home');
    
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={activeIndex}
        onSelect={(k) => setTabIndex(k)}
        className="mb-3"
      >{tabsList?.length > 1 ?
        tabsList.map((tab) =>
            <Tab eventKey={tab.tabName} title={tab.tabName} key={tab.tabName}>
                <div>
                    {tab==="Home" ?
                      <AutoComplete />
                      :<div>Form goes here</div>
                    }
                </div>
           </Tab>
        )
        :null

      }

      </Tabs>
    );
  }
  
  export default EditableTabs;