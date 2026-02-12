import { useEffect, useState } from "react";

function TrackingMouse(){
    const [coords, setCoords] = useState({ x:0, y:0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // cleanUp
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div>
        <p>Mouse X:{coords.x} </p>
        <p>Mouse Y:{coords.y} </p>
      </div>
    </>
  );
}

export default TrackingMouse