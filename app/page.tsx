"use client";

import Spline from "@splinetool/react-spline";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();

  // Stati per parametri dinamici
  const [length, setLength] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    // Recupera i parametri URL dopo il montaggio del componente
    const lengthParam = Number(searchParams.get("length"));
    const heightParam = Number(searchParams.get("height"));

    setLength(!isNaN(lengthParam) ? lengthParam : 4);
    setHeight(!isNaN(heightParam) ? heightParam : 5);
  }, [searchParams]);

  let splineObject: any = null;

  function onLoad(spline: any) {
    if (!spline || length === null || height === null) return;
    splineObject = spline;
    splineObject.setVariable("Length", length);
    splineObject.setVariable("Height", height);
  }

  // Evita il rendering se i parametri non sono ancora stati caricati (prevenzione di errori di Hydration)
  if (length === null || height === null) {
    return <main style={{ width: "100vw", height: "100vh", backgroundColor: "#000" }} />;
  }

  return (
    <main style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Spline 
        scene="https://prod.spline.design/W7EwTTxxErDKf9ZB/scene.splinecode" 
        onLoad={onLoad} 
        style={{ width: "100%", height: "100%" }} // Assicura che la scena si adatti alla viewport
      />
    </main>
  );
}
