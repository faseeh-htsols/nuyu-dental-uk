"use client";
import React, { useEffect } from "react";
import Container from "./container";

function GoogleEmbed() {
  useEffect(() => {
    if (!document.getElementById("EmbedSocialHashtagScript")) {
      const script = document.createElement("script");
      script.id = "EmbedSocialHashtagScript";
      script.src = "https://embedsocial.com/cdn/ht.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);
  return (
    <>
      <div className="bg-primary">
        <Container>
          <div
            className="embedsocial-hashtag"
            data-ref="2e4d643b47eca5d8cd7d68c9abc98b0d3e344656"></div>
        </Container>
      </div>
    </>
  );
}

export default GoogleEmbed;
