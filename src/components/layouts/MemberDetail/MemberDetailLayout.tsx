import BreadCrumb from "@/components/common/breadCrumb/BreadCrumb";
import MemberAssets from "@/components/containers/memberDetails/memberAssets";
import MemberBio from "@/components/containers/memberDetails/memberBio";
import MemberFunFacts from "@/components/containers/memberDetails/memberFunFacts";
import MemberProfile from "@/components/containers/memberDetails/memberProfile";

export default function MemberDetailLayout({ memberProfile }: any) {
  const { stageName, emoji, positions, assets, funFacts } = memberProfile?.data;
  const path = [
    {
      href: "/profiles",
      label: "Profiles",
    },
    {
      href: "",
      label: stageName,
    },
  ];

  return (
    <>
      <BreadCrumb path={path} />
      <MemberProfile
        stageName={stageName}
        emoji={emoji}
        positions={positions}
      />
      <MemberAssets assets={assets?.[0]} />
      <MemberBio {...memberProfile?.data} />
      <MemberFunFacts funFacts={funFacts} />
    </>
  );
}
