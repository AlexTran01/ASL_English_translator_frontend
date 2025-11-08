import React from "react";
import Webcam from "react-webcam";

export default function LeftComponent({ camera_state }) {

    return (
        <div className="left-container">
            <div className="camera">
                {camera_state ? (
                    <div className="h-100 rounded-lg">
                        <Webcam audio={false}        
                            width="100%"
                            height="100%"
                            className="object-cover w-full h-full" 
                            mirrored = {true}/>
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
