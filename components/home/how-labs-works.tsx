import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ListOrdered, Target, Wrench } from "lucide-react";

export default function HowLabsWorks() {
  const steps = [
    {
      icon: ListOrdered,
      title: "Pick a lab",
      desc: "Choose a topic you care about. Each one is small, scoped, and practical.",
    },
    {
      icon: Target,
      title: "Follow the brief",
      desc: "Understand the context, constraints, and success criteria in minutes.",
    },
    {
      icon: Wrench,
      title: "Build and iterate",
      desc: "Copy snippets, tweak, and ship. Stretch goals included if you want more.",
    },
  ];

  return (
    <section className="container py-8 md:py-12">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight">How labs work</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Bite-sized scenarios that lead to real outcomes.
        </p>
      </div>
      <div className="grid gap-4 mt-6 md:grid-cols-3">
        {steps.map((step, idx) => (
          <Card key={idx}>
            <CardHeader className="pb-2">
              <Badge variant="outline" className="w-fit">Step {idx + 1}</Badge>
              <CardTitle className="flex items-center gap-2 text-xl mt-2">
                <step.icon className="h-5 w-5 text-primary" /> {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{step.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
