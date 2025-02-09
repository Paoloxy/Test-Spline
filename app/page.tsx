"use client";

import Spline from "@splinetool/react-spline";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  
  // Ottieni i parametri URL con valori predefiniti se non specificati
  const length: number = Number(searchParams.get("length")) || 4;
  const height: number = Number(searchParams.get("height")) || 5;

  let splineObject: any = null;

  function onLoad(spline: any) {
    splineObject = spline;
    splineObject.setVariable("Length", length);
    splineObject.setVariable("Height", height);
  }

  return (
    <main style={{ textAlign: "center", padding: "20px" }}>
      <Spline 
        scene="https://prod.spline.design/W7EwTTxxErDKf9ZB/scene.splinecode" 
        onLoad={onLoad} 
      />
    </main>
  );
}
