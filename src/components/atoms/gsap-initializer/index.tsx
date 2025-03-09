import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { TextPlugin } from "gsap/TextPlugin";

export const GSAPInitializer = (): null => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, Draggable, TextPlugin, useGSAP);
  }, []);

  return null;
};
