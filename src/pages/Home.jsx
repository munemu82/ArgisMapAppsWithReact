import React, {useState, useEffect} from "react";
import MyMap from "../components/MyMap"
import EditableTabs from "../components/EditableTabs";
import BSModal from '../BSModal';

function Home() {
    const [listOfTabs, setListOfTaabs] = useState([])
    const [selectedUser, setSelectedUser] = useState([]);
    const [currentTabIndex, setCurrentTabIndex] =useState("Home")
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () =>{
        setShowModal(true)
    }
    const handleCloseModal = () =>{
        setShowModal(false)
    }

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
        <button onClick={handleShowModal} className="btn btn-primary" > Show draggable Modal</button>
        <BSModal show={showModal} close={handleCloseModal} title="Draggable Modal">
            This is a draggable modal test
        </BSModal>
        <MyMap />
        
        </div>
    );
    }

export default Home;
