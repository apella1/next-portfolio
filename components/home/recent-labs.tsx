import LabCard from "../labs/lab-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Lab } from "@/types/lab";

interface RecentLabsProps {
  labs: Lab[];
}

const RecentLabs = ({ labs }: RecentLabsProps) => {
  const recentLabs = labs
    .filter((lab: Lab) => lab.isPublished)
    .sort(
      (a: Lab, b: Lab) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 3);

  if (recentLabs.length === 0) {
    return null;
  }

  return (
    <section className="container space-y-6 py-8 md:py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Recent Labs</h2>
        <Button asChild variant="outline" size="lg">
          <Link href="/labs">
            View All Labs <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-4">
        {recentLabs.map((lab) => (
          <LabCard key={lab.slug} lab={lab} />
        ))}
      </div>
    </section>
  );
};

export default RecentLabs;
