import { useLoaderContext } from "@/config/contexts/loader";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default () => {
  const menuRef = useRef<HTMLButtonElement>(null);
  const { isLoading } = useLoaderContext();

  useGSAP(() => {
    if (!menuRef.current) return;

    const circle = menuRef.current.querySelector("[data-fs-gsap='circle']");
    const lines = menuRef.current.querySelectorAll("[data-fs-gsap='line']");

    const tl = gsap.timeline({ paused: true });

    tl.to(lines, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 0.5,
      ease: "power4.out",
    });

    tl.to(circle, {
      opacity: 1,
      duration: 1,
      ease: "power4.out",
    });

    if (isLoading) {
      tl.play();
    }
  }, [isLoading]);

  return { menuRef };
};
