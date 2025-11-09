import React from "react";
import { useRef, useEffect } from "react";
import Webcam from "react-webcam";

export default function LeftComponent({ camera_state, selected, translate, setTranslate }) {

    const webcamRef = useRef(null);

    function Record3sThenSend(path) {
        const stream = webcamRef.current.stream;
        if (!stream) return;

        let chunks = [];
        const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) chunks.push(event.data);
        };

        mediaRecorder.onstop = async () => {
            const blob = new Blob(chunks, { type: "video/webm" });
            chunks = [];

            // send to API
            const formData = new FormData();
            formData.append("video", blob, "recording.webm");
            try {
                const response = await fetch(path, {
                    method: "POST",
                    body: formData,
                });
                const data = await response.json();
                console.log("API response:", data);
            } catch (err) {
                console.error("API call failed:", err);
            }

            // Wait 1 second, then start next recording
            setTimeout(() => {
                if (camera_state) Record3sThenSend(path);
            }, 1000);
        };

        mediaRecorder.start();

        setTimeout(() => {
            mediaRecorder.stop();
        }, 3000);
    }

    useEffect(() => {
        if (!translate) return; // used to be btn to check whether camera is on

        switch (selected) {
            case "Letter Level":
                
                break;
            case "Word Level-Trained AI model":
                Record3sThenSend(path="")
            case "World Level-Google Gemini":
                Record3sThenSend(path="")
                break;
            default:
                window.alert("please pick an translating option")
                setTranslate(false)
                return;
        }
    }, [translate] );

    return (
        <div className="left-container">
            <div className="camera">
                {camera_state ? (
                    <div className="h-100 rounded-lg">
                        <Webcam audio={false}
                            width="100%"
                            height="100%"
                            className="object-cover w-full h-full"
                            mirrored={true} />
                    </div>
                ) : (
                    <div>
                        Camera is off
                    </div>
                )}
            </div>
        </div>
    )
}
