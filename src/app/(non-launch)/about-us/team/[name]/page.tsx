import { DOCTOR_PAGES, DoctorPageData } from "@/constants/all-member-data";
import { TOTAL_MEMBERS } from "@/constants/data";
import Main from "@/views/(about-us)/single-member/main";
import Script from "next/script";
import React from "react";

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

type SingleMember = (typeof TOTAL_MEMBERS)[number]["members"][number] & {
  heading: string;
};

const TeamSinglePage = async ({
  params,
}: {
  params: Promise<{ name: string }>;
}) => {
  const { name } = await params;

  const allMembers: SingleMember[] = TOTAL_MEMBERS.flatMap((section) =>
    section.members.map((member) => ({
      ...member,
      heading: section.heading,
    }))
  );

  const teamMember = allMembers.find((m) => slugify(m.name) === name);
  if (!teamMember) return <div>Team member not found</div>;

  const pageData: DoctorPageData | undefined = DOCTOR_PAGES[name];
  if (!pageData) return <div>Profile content not configured</div>;

  return (
    <>
      <head>
        <title>{teamMember.title}</title>
        <meta name="description" content={`${teamMember.description}`} />
        <meta property="og:title" content={teamMember.title} />
        <meta property="og:description" content={teamMember.description} />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/header-image-v3.webp"
        />
        <meta
          property="og:url"
          content={`https://www.nuyu-dental.co.uk/about-us/team/${name}`}
        />

        <link
          rel="canonical"
          href={`https://www.nuyu-dental.co.uk/about-us/team/${name}`}
        />
        <Script
          id="json-id"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageData.schema) }}
        />
      </head>
      <Main data={pageData} />
    </>
  );
};

export default TeamSinglePage;
