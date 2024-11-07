//
// import { getToken, onMessage } from "firebase/messaging";
// import { messaging } from "./firebase/firebaseConfig";
import {useEffect} from "react";

function App() {


    async function requestPermission() {
        //requesting permission using Notification API
        const permission = await Notification.requestPermission();


        if (permission === "granted") {

            alert("Notification")

        } else if (permission === "denied") {
            //notifications are blocked
            alert("You denied for the notification");
        }
    }


    useEffect(() => {
        requestPermission();
    }, []);


    // onMessage(messaging, (payload) => {
    //     console.log(payload);
    //     alert("On Message ")
    // });


    return (
        <>
            <h1>----</h1>
        </>
    )
}


export default App
