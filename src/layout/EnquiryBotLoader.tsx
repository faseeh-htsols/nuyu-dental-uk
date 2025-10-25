"use client";
import { useEffect } from "react";

export default function EnquiryBotLoader() {
  useEffect(() => {
    const loadBot = () => {
      const script = document.createElement("script");
      script.src = "https://launcher.enquirybot.com/index.js";
      script.dataset.botId = "b367dfc2-5681-4580-a9b4-85227fd769dc";
      script.async = true;
      document.body.appendChild(script);
    };

    // Load after 3 seconds OR on first user scroll
    const timer = setTimeout(loadBot, 3000);
    window.addEventListener("scroll", loadBot, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", loadBot);
    };
  }, []);

  return null;
}
