
import bgImage from '../assets/Gemini_Generated_Image_ef8v4ref8v4ref8v.png';
import fgImage from '../assets/Background-Removed.png';

export default function Demo(props){

    return (
    <div className="demo-container w-full h-100 border mx-auto block mt-6 bg-cover bg-center rounded-lg border border-3 relative overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}>

       <img
        src={fgImage}
        alt="foreground"
        className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-56"
        style={{ transform: ' scale(1.45)' }}
      />

    </div>
    )
}