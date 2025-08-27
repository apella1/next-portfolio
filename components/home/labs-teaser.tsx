"use client";

import LabCard from "@/components/labs/lab-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Lab } from "@/types/lab";
import { useEffect, useState } from "react";

export default function LabsTeaser() {
  const [labs, setLabs] = useState<Lab[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const response = await fetch("/api/labs");
        if (!response.ok) throw new Error("Failed to fetch labs");
        const allLabs = await response.json();
        const recent = allLabs
          .filter((lab: Lab) => lab.isPublished)
          .slice(0, 3);
        setLabs(recent);
      } catch (error) {
        console.error("Error fetching labs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLabs();
  }, []);

  if (isLoading || labs.length === 0) return null;

  return (
    <section className="container space-y-6 py-8 md:py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Fresh from the lab</h2>
        <Button asChild variant="default" size="lg">
          <Link href="/labs">
            Explore Labs <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid gap-4">
        {labs.map((lab) => (
          <LabCard key={lab.slug} lab={lab} />
        ))}
      </div>
    </section>
  );
}
