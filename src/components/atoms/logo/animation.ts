import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!logoRef.current || !textRef.current) return;

    const tl = gsap.timeline({});

    tl.to(logoRef.current, {
      marginLeft: "1.18rem",
      duration: 1,
      ease: "power4.out",
    });

    tl.to(textRef.current, {
      text: "Bubowl",
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return { logoRef, textRef };
};
