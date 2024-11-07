
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase/firebaseConfig";
import {useEffect} from "react";

function App() {


    async function requestPermission() {
        //requesting permission using Notification API
        const permission = await Notification.requestPermission();


        if (permission === "granted") {
            const token = await getToken(messaging, {
                vapidKey: 'BG9EQDk4FmXrfveQw4jF5nUfNBZf4zoM6E36HMktt3mAF7b4tJ2iMTv_K4uqpoEBh_x_MFwV9s9cJuNfd4uQ8qQ',
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


    onMessage(messaging, (payload) => {
        console.log(payload);
        alert("On Message ")
    });


    return (
        <>
            <h1>----</h1>
        </>
    )
}


export default App
