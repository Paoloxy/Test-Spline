"use client";

import Spline from "@splinetool/react-spline";

export default function Home() {
  const length: number = 4;
  const height: number = 5;
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
