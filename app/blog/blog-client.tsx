"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Post } from "@/types/post";
import { format, parseISO } from "date-fns";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface BlogClientProps {
  initialPosts: Post[];
  initialNotes: Post[];
}

function formatDate(dateStr: string) {
  try {
    return format(parseISO(dateStr), "MMM d, yyyy");
  } catch {
    return dateStr;
  }
}

function getYear(dateStr: string) {
  try {
    return parseISO(dateStr).getFullYear();
  } catch {
    return new Date().getFullYear();
  }
}

const BlogClient = ({ initialPosts, initialNotes }: BlogClientProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showArticles, setShowArticles] = useState(true);
  const [showNotes, setShowNotes] = useState(true);

  const publishedPosts = initialPosts.filter((p) => p.isPublished);
  const publishedNotes = initialNotes.filter((n) => n.isPublished);

  const getAllTags = (): string[] => {
    const tagSet = new Set<string>();
    [...publishedPosts, ...publishedNotes].forEach((item) => {
      item.tags?.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  };

  const allTags = getAllTags();

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const combined: Post[] = [
    ...(showArticles ? publishedPosts : []),
    ...(showNotes ? publishedNotes : []),
  ]
    .filter((item) => {
      if (selectedTags.length === 0) return true;
      return item.tags?.some((tag) => selectedTags.includes(tag));
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );

  const byYear = combined.reduce<Record<number, Post[]>>((acc, item) => {
    const year = getYear(item.publishedAt);
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {});

  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section className="container py-12 min-h-screen max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Blog and Notes</h1>

      {/* Tag filter */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-sm text-muted-foreground font-medium">
          Browse by topic:
        </span>
        <Badge
          variant={selectedTags.length === 0 ? "default" : "outline"}
          className={cn(
            "cursor-pointer transition-colors",
            selectedTags.length === 0
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "hover:bg-muted",
          )}
          onClick={() => setSelectedTags([])}
        >
          All topics
        </Badge>
        {allTags.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTags.includes(tag) ? "default" : "outline"}
            className={cn(
              "cursor-pointer transition-colors",
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
          <button
            onClick={() => setSelectedTags([])}
            className="ml-1 flex items-center gap-1 text-xs text-destructive hover:underline"
          >
            Clear <X className="h-3 w-3" />
          </button>
        )}
      </div>

      {/* Show checkboxes */}
      <div className="flex items-center gap-6 mb-2">
        <span className="text-sm font-medium">Show</span>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={showArticles}
            onChange={(e) => setShowArticles(e.target.checked)}
            className="accent-primary h-4 w-4"
          />
          Articles
        </label>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={showNotes}
            onChange={(e) => setShowNotes(e.target.checked)}
            className="accent-primary h-4 w-4"
          />
          Quick Notes
        </label>
      </div>

      {/* Entry count */}
      <p className="text-sm text-muted-foreground mb-8">
        {combined.length} {combined.length === 1 ? "entry" : "entries"} shown.
      </p>

      {/* Year groups */}
      {years.length === 0 ? (
        <p className="text-center text-muted-foreground py-12">
          No entries found matching the selected filters.
        </p>
      ) : (
        <div className="space-y-12">
          {years.map((year) => (
            <div key={year}>
              <h2 className="text-5xl font-bold mb-6">{year}</h2>
              <div className="space-y-6 pl-4">
                {byYear[year].map((item) => {
                  const href =
                    item.type === "note"
                      ? `/notes/${item.slug}`
                      : `/posts/${item.slug}`;
                  return (
                    <div key={`${item.type}-${item.slug}`}>
                      <p className="text-sm text-muted-foreground mb-0.5">
                        {formatDate(item.publishedAt)}
                      </p>
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        {item.type === "note" ? "Quick Note" : "Article"}
                      </p>
                      <Link
                        href={href}
                        className="text-blue-600 font-medium hover:underline leading-snug"
                      >
                        {item.title}
                      </Link>
                      {item.description && (
                        <p className="text-sm text-foreground/80 mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogClient;
