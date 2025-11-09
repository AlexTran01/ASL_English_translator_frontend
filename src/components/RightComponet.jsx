export default function RightComponent(props) {
  return (
    <div className="right-container" style={{ background: "transparent" }}>
      <div className="output-box">
        {props.output}
      </div>
    </div>
  );
}
