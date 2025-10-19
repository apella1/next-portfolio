"use client";

import NewsletterCard from "@/components/newsletter/newsletter-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Lab } from "@/types/lab";
import { X } from "lucide-react";
import { useState } from "react";

interface LabsClientProps {
  initialLabs: Lab[];
}

const NewsletterClient = ({ initialLabs }: LabsClientProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const publishedLabs = initialLabs.filter((lab) => lab.isPublished);

  const getAllTags = (): string[] => {
    const tagSet = new Set<string>();
    publishedLabs.forEach((lab) => {
      lab.tags?.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  };

  const allTags = getAllTags();

  const filteredLabs = publishedLabs.filter((lab) => {
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

  return (
    <section className="container py-12 min-h-screen">
      <div className="flex flex-col">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Labs
          </h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore my labs, tutorials, and insights on various topics
          </p>
          {publishedLabs.length > 0 && (
            <p className="text-muted-foreground">
              Click on the tags below to filter labs by topic
            </p>
          )}
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
          <NewsletterCard key={lab.slug} lab={lab} isAllLabsPage />
        ))}
      </div>

      {filteredLabs.length === 0 && (
        <div className="text-center text-muted-foreground py-12">
          {selectedTags.length > 0
            ? "No newsletter found matching the selected tags."
            : "No newsletter available yet. Check back soon!"}
        </div>
      )}
    </section>
  );
};

export default NewsletterClient;
