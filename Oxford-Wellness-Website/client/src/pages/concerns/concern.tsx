import ConcernPage from "@/components/concerns/ConcernPage";
import { getConcern } from "@/data/concerns";
import NotFound from "@/pages/not-found";

/** Concern detail. App route passes slug from /concerns/:slug. */
export default function ConcernDetail({ slug }: { slug: string }) {
  const data = slug ? getConcern(slug) : undefined;
  if (!data) return <NotFound />;
  return <ConcernPage data={data} />;
}
