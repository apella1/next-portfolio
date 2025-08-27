import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, FlaskConical, Repeat, Users } from "lucide-react";

export default function ValueProps() {
  const items = [
    {
      icon: Rocket,
      title: "Practical, no-fluff labs",
      desc: "Build real skills with guided, hands-on scenarios you can ship at work.",
      tag: "2 new labs / month",
    },
    {
      icon: FlaskConical,
      title: "Experiment, learn, repeat",
      desc: "Each lab includes context, a goal, constraints, and stretch ideas.",
      tag: "From idea → demo",
    },
    {
      icon: Repeat,
      title: "Re-usable playbooks",
      desc: "Copyable snippets, diagrams, and checklists to accelerate delivery.",
      tag: "Copy + adapt",
    },
    {
      icon: Users,
      title: "Community-first",
      desc: "Join early, shape the roadmap, and access private notes and updates.",
      tag: "Early access",
    },
  ];

  return (
    <section className="container py-8 md:py-12">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Why this exists</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A focused garden of engineering value: concise, practical labs that help you grow and ship.
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
