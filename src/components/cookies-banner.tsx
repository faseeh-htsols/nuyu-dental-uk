"use client";

import { useState } from "react";
import { useCookies } from "react-cookie";
import Link from "next/link";
import Container from "./container";

export default function CookieBannerClient({
  hasConsent,
}: {
  hasConsent: boolean;
}) {
  const [, setCookie] = useCookies(["cookieConsent"]);
  const [isVisible, setIsVisible] = useState(!hasConsent);

  const acceptCookies = () => {
    setCookie("cookieConsent", true, { path: "/", maxAge: 31536000 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 z-[1001] h-[180px] lg:h-auto shadow-lg w-[100vw] bg-primary">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 p-3">
          <p className="text-sm text-center text-white">
            We use cookies to improve your experience. By continuing, you agree
            to our use of cookies.
          </p>
          <div className="flex gap-2 items-center">
            <button
              onClick={acceptCookies}
              className="bg-transparent rounded-lg text-sm px-3 py-1 border border-1 border-white text-white">
              Accept
            </button>
            <Link
              href="/privacy-cookie-policy"
              className="bg-transparent rounded-lg text-sm px-3 py-1 border border-1 border-white text-white">
              Cookies Policy
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
