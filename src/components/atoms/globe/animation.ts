import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { useSpring } from "@react-spring/web";
import { useLoaderContext } from "@/config/contexts/loader";

export default () => {
  const { isLoading } = useLoaderContext();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef<number>(0);
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  useEffect(() => {
    if (!canvasRef.current) return;
    let phi = 0;
    const mapBaseBrightnessTarget = 0.1;
    const mapBrightnessTarget = 1;
    let mapBaseBrightness = 0;
    let mapBrightness = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: canvasRef.current.clientWidth * 2,
      height: canvasRef.current.clientHeight * 2,
      phi: 0,
      theta: 0.5,
      mapSamples: 12000,
      mapBrightness: 0.18,
      mapBaseBrightness: 1,
      diffuse: 0.3,
      dark: 1,
      baseColor: [2.16, 0.78, 0.25],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0.76, 0.08, 0.025],
      scale: 1,
      markers: [],
      opacity: 0.57,
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.0006;
        }
        state.phi = phi + r.get();

        if (isLoading) {
          setTimeout(() => {
            if (mapBaseBrightness < mapBaseBrightnessTarget) {
              mapBaseBrightness += 0.001;
            }
            if (mapBrightness < mapBrightnessTarget) {
              mapBrightness += 0.01;
            }
          }, 1000);
        }

        state.mapBaseBrightness = Math.min(mapBaseBrightness, mapBaseBrightnessTarget);
        state.mapBrightness = Math.min(mapBrightness, mapBrightnessTarget);
      },
    });

    return () => {
      globe.destroy();
    };
  }, [r, isLoading]);

  return { canvasRef, pointerInteracting, pointerInteractionMovement, api };
};
