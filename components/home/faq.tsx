import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="container py-8 md:py-12">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Quick answers before you dive in.
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-6">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is this free?</AccordionTrigger>
            <AccordionContent>
              Early access is free while I iterate on format, topics, and polish. If pricing ever shows up, subscribers will be first to know and keep perks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What topics will you cover?</AccordionTrigger>
            <AccordionContent>
              Modern engineering practices across web, cloud, DevOps, and developer experience. Labs are small, practical, and focused on shipping.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How often will I get labs?</AccordionTrigger>
            <AccordionContent>
              Two new labs per month. You’ll also get occasional notes on what’s growing in the garden.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
