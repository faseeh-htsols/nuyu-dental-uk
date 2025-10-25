import { cookies } from "next/headers";
import CookieBannerClient from "./cookies-banner";
const CookieWrapper = async () => {
  const cookieStore = await cookies();
  const hasConsent = cookieStore.get("cookieConsent");

  return <CookieBannerClient hasConsent={!!hasConsent} />;
};

export default CookieWrapper;
