export default function LeftComponent({ camera_state}) {

  return (
    <div className="left-container">
      <div className="camera">
        {camera_state ? (
          <video className="w-1/2 h-60 rounded-lg border"
          
          />
        ) : (
          <div className="w-1/2 h-60 rounded-lg border">
            Camera is off
          </div>
        )}
      </div>
    </div>
  )
}
