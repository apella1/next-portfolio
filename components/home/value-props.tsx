import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, Rocket } from "lucide-react";

export default function ValueProps() {
  const items = [
    {
      icon: Rocket,
      title: "Practical, no-fluff labs",
      desc: "Build real skills with guided, hands-on scenarios you can ship at work.",
      tag: "1 new lab / week",
    },
    {
      icon: FlaskConical,
      title: "Experiment, learn, repeat",
      desc: "Each lab includes context, a goal, constraints, and stretch ideas.",
      tag: "From idea → demo",
    },
  ];

  return (
    <section className="container py-8 md:py-12">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Turn Learning Into Progress
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Small, consistent wins build confidence. Each lab is designed to help
          you move forward without overwhelm.
        </p>
      </div>
      <div className="grid gap-4 mt-6 md:grid-cols-2">
        {items.map((item, idx) => (
          <Card key={idx} className="h-full">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <item.icon className="h-5 w-5 text-primary" /> {item.title}
                </CardTitle>
                <Badge variant="secondary">{item.tag}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
