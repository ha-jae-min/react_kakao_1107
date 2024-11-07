
import {useEffect} from "react";
import { getToken } from "firebase/messaging";
import {messaging} from "./firebase/firebaseConfig.ts";

function App() {


    async function requestPermission() {
        //requesting permission using Notification API
        const permission = await Notification.requestPermission();


        if (permission === "granted") {
            const token = await getToken(messaging, {
                vapidKey: 'BHwIsp_GdMzKI1SC834zDBt0ra7vvHnmTcdOtLcMY8K3DV8numGUboKz7EYSiOXlxZDCWjsf-ZqzdXrrwnelMIo',
            });


            //We can send token to server
            console.log("Token generated : ", token);




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
