import { ReactNode } from "react";

export default function Hero({ children }: { children: ReactNode }) {
  return (
    <div className="hero h-[55vw] md:h-[400px] text-white font-bold grid place-items-center">
      <img className="absolute bottom-[-5vw] max-h-[100px] z-10 md:bottom-[-30px] md:max-h-[200px] w-[250%]" src="/curve.png" alt="曲線" />
      <h1 className="text-2xl md:text-5xl font-bold mb-8 md:mb-16">{children}</h1>
    </div>
  );
}
