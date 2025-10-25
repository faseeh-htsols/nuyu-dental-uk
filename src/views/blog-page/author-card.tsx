import Container from "@/components/container";
import Image from "next/image";
import React from "react";

type Author = {
  name: string;
  pictureUrl: string;
  bio: string;
  scheduledDate: string;
};

function AuthorCard({ author, date }: { author: Author; date?: string }) {
  const { name, pictureUrl, bio } = author || {};
  return (
    <section className="py-10">
      <Container>
        <div className="bg-[url(/bg-try.png)] rounded-tr-[50px] rounded-bl-[50px] py-6 px-6 mx-20">
          <div className="flex items-center gap-4">
            <Image
              src={pictureUrl || "/user-placeholder.webp"}
              alt={name || "Author"}
              width={1000}
              height={1000}
              className="h-48 w-48 rounded-full object-cover"
              loading="lazy"
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-bold text-white">{name}</h3>
              </div>

              {bio && <p className="mt-2 text-white leading-relaxed">{bio}</p>}
              {date && (
                <p className="mt-2 text-white leading-relaxed">
                  Published Date:{" "}
                  {new Date(date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AuthorCard;
