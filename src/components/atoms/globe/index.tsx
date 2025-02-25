import * as S from "./styles";
import useAnimation from "./animation";

export const Globe = () => {
  const { canvasRef, pointerInteracting, pointerInteractionMovement, api } = useAnimation();

  return (
    <S.Canvas
      ref={canvasRef}
      onPointerDown={(e) => {
        pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
        if (canvasRef.current) {
          canvasRef.current.style.cursor = "grabbing";
        }
      }}
      onPointerUp={() => {
        pointerInteracting.current = null;

        if (!canvasRef.current) return;
        canvasRef.current.style.cursor = "grab";
      }}
      onPointerOut={() => {
        pointerInteracting.current = null;

        if (!canvasRef.current) return;
        canvasRef.current.style.cursor = "grab";
      }}
      onMouseMove={(e) => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta;
          api.start({
            r: delta / 200,
          });
        }
      }}
      onTouchMove={(e) => {
        if (pointerInteracting.current !== null && e.touches[0]) {
          const delta = e.touches[0].clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta;
          api.start({
            r: delta / 100,
          });
        }
      }}
    />
  );
};
