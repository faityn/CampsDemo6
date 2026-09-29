import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { getResort, resorts } from "@/data/resorts";

export function generateStaticParams() {
  return resorts.map((resort) => ({ slug: resort.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const resort = getResort(slug);
    return {
      title: `${resort.name} ${resort.subtitle} | Luxury Stay`,
      description: resort.description,
    };
  });
}

export default async function ResortDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resort = resorts.find((item) => item.slug === slug);
  if (!resort) notFound();
  return <DetailPage resort={resort} />;
}
