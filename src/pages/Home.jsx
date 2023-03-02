import React, {useState, useEffect} from "react";
import MyMap from "../components/MyMap"
import EditableTabs from "../components/EditableTabs";

function Home() {
    const [listOfTabs, setListOfTaabs] = useState([])
    const [selectedUser, setSelectedUser] = useState([]);
    const [currentTabIndex, setCurrentTabIndex] =useState("Home")

   useEffect(() => {
        console.log("THIS RUNS EVERYTIME COMPONENT IS LAUNCHED")
        setListOfTaabs([
            {"tabName":"Home"},
            {"tabName":"News"},
            {"tabName":"Geographies"},
            {"tabName":"Profile"},
            {"tabName":"contact"},
        ])
   }, [])

   console.log(selectedUser)
    return (
        <div>
        <EditableTabs tabsList={listOfTabs} setTabIndex={setCurrentTabIndex} activeIndex={currentTabIndex}/>
        <MyMap />
        
        </div>
    );
    }

export default Home;
