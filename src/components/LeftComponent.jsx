import React from "react";
import { useRef, useEffect } from "react";
import Webcam from "react-webcam";
import { VideoOff } from "lucide-react";


export default function LeftComponent({ camera_state, selected, translate, setTranslate, setOutput }) {

    const webcamRef = useRef(null);
    const stopRef = useRef(false);

    useEffect(() => {
        stopRef.current = !translate || !camera_state;
    }, [translate, camera_state]);

    function Record3sThenSend(path) {

        if (stopRef.current) return;

        if (!webcamRef.current || !webcamRef.current.stream) return;

        const stream = webcamRef.current.stream;
        if (!stream) return;

        let chunks = [];
        const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });

        mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) chunks.push(event.data);
        };

        mediaRecorder.onstop = async () => {

            if (stopRef.current) return; // <-- prevent sending after stop

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

                if (selected === "Word Level-Trained AI model")
                    setOutput(prev => prev + " " + data.label)

                else if (selected === "World Level-Google Gemini")
                    setOutput(prev => prev + " " + data.prediction.label)

                else if (selected === "Letter Level")
                    setOutput(prev => prev + " " + data.predictions[0])
            } catch (err) {
                console.error("API call failed:", err);
            }

            // Wait 1 second, then start next recording
            // setTimeout(() => {
                if (!stopRef.current) Record3sThenSend(path);
            // }, 1000);
        };

        mediaRecorder.start();

        setTimeout(() => {
            if (!stopRef.current) mediaRecorder.stop();
        }, 3000);
    }

    useEffect(() => {
        if (!translate || !camera_state) return;

        switch (selected) {
            case "Letter Level":    
                  Record3sThenSend("http://127.0.0.1:8000/v1/character_internal_model_asl/chunk")
                break;
            case "Word Level-Trained AI model":
                Record3sThenSend("http://127.0.0.1:8000/v1/word_internal_model_asl/chunk")
                break;

            case "World Level-Google Gemini":
                Record3sThenSend("http://127.0.0.1:8000/v1/word_gemini_asl/chunk")
                break;

            default:
                window.alert("please pick an translating option")
                setTranslate(false)
                return;
        }
    }, [translate]);

    return (
        <div className="left-container w-full h-full">
            <div className="camera w-full h-full">
                {camera_state ? (
                    <div className="w-full h-full rounded-3xl overflow-hidden">
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            width="100%"
                            height="100%"
                            className="w-full h-full object-cover"
                            mirrored={true}
                        />
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-white-000">
                        <VideoOff className="w-20 h-20" />
                    </div>
                )}
            </div>
        </div>
    )
}
