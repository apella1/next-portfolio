"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function WakatimeWidget() {
  const languagesAllTime =
    "https://wakatime.com/share/@apella/c32e96f2-c72d-45ef-be69-b4666eaafca2.svg";
  const totalHoursAllTime =
    "https://wakatime.com/share/@apella/ecc1bea1-ca54-46a0-ab84-e515509c04de.svg";
  const profileUrl = "https://wakatime.com/@apella";

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Garden telemetry (WakaTime)</CardTitle>
          <Badge variant="secondary">coding time</Badge>
        </div>
      </CardHeader>
      <CardContent className="w-full">
        <div className="">
          <figure className="flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={languagesAllTime}
              alt="WakaTime share: All-time programming languages"
              className="max-w-full h-auto"
            />
            <figcaption className="mt-2 text-xs text-muted-foreground text-center">
              Programming languages (all-time)
            </figcaption>
          </figure>
          <hr className="my-4" />
          <figure className="flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={totalHoursAllTime}
              alt="WakaTime share: All-time total coding hours"
              className="max-w-full h-auto"
            />
            <figcaption className="mt-2 text-xs text-muted-foreground text-center">
              Total coding hours (all-time)
            </figcaption>
          </figure>
        </div>
        <div className="mt-4 text-center space-y-1">
          <p className="text-xs text-muted-foreground">
            If this is something you want to check more of:
          </p>
          <Link
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            View full WakaTime profile →
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
