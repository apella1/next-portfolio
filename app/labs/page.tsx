"use client";

import LabCard from "@/components/labs/lab-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Lab } from "@/types/lab";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const Labs = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [labs, setLabs] = useState<Lab[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const response = await fetch("/api/labs");
        if (!response.ok) throw new Error("Failed to fetch labs");
        const allLabs = await response.json();
        setLabs(allLabs.filter((lab: Lab) => lab.isPublished));
      } catch (error) {
        console.error("Error fetching labs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLabs();
  }, []);

  const getAllTags = (): string[] => {
    const tagSet = new Set<string>();
    labs.forEach((lab) => {
      lab.tags?.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  };

  const allTags = getAllTags();

  const filteredLabs = labs.filter((lab) => {
    if (selectedTags.length === 0) return true;
    return lab.tags?.some((tag) => selectedTags.includes(tag));
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag)) {
        return prevSelectedTags.filter((t) => t !== tag);
      }
      return [...prevSelectedTags, tag];
    });
  };

  if (isLoading) {
    return (
      <div className="container py-12 min-h-screen">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <section className="container py-12 min-h-screen">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Labs
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore my labs, tutorials, and insights on various topics
          </p>
          <p className="text-muted-foreground">
            Click on the tags below to filter labs by topic
          </p>
        </div>

        <div className="w-full max-w-4xl">
          <div className="flex flex-wrap gap-2 justify-center py-4">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className={cn(
                  `cursor-pointer transition-colors`,
                  selectedTags.includes(tag)
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "hover:bg-muted",
                )}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
            {selectedTags.length > 0 && (
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setSelectedTags([])}
                className="ml-2"
              >
                Clear Filters <X className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4">
        {filteredLabs.map((lab) => (
          <LabCard key={lab.slug} lab={lab} isAllLabsPage />
        ))}
      </div>

      {filteredLabs.length === 0 && (
        <div className="text-center text-muted-foreground py-12">
          No labs found matching the selected tags.
        </div>
      )}
    </section>
  );
};

export default Labs;