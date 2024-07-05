import AdrenJPG from "./assets/img/adrien.jpg";
import AdrenPNG from "./assets/img/adrien.png";
import AdrenSVG from "./assets/img/adrien.svg";
import AdrenWebp from "./assets/img/adrien.webp";
import AdrenAvif from "./assets/img/adrien.avif";

function App() {
  return (
    <>
      <h1>I am testing IMage</h1>
      <div>
        <img src={AdrenJPG} alt="" width={300} />
        <img src={AdrenPNG} alt="" width={300} />
        <img src={AdrenSVG} alt="" width={300} />
        <img src={AdrenWebp} alt="" width={300} />
        <img src={AdrenAvif} alt="" width={300} />
      </div>
    </>
  );
}

export default App;
