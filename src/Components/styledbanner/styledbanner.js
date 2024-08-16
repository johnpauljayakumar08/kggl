// import React from "react";

// export function Mainstyledbanner(){
//     VANTA.BIRDS( {
//         el: "#element",
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.00,
//         minWidth: 200.00,
//         scale: 1.00,
//         scaleMobile: 1.00,
//         // backgroundColor: 0x6b7e7e,
//         birdSize: 2.00,
//         separation: 34.00,
//         cohesion: 28.00
//       } )
//     return(
//         <>
//             <div id="element"> </div>
//         </>
//     );
// }
import React, { useRef, useEffect } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export const Mainstyledbanner = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = BIRDS({
      el: vantaRef.current
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div className="container-fluid h-75" ref={vantaRef}>
    
  </div>;
};


