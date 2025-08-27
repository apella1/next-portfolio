import { Lab } from "@/types/lab";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LabCard = ({
  lab,
  isAllLabsPage,
}: {
  lab: Lab;
  isAllLabsPage?: boolean;
}) => {
  const formattedDate = (() => {
    try {
      return format(parseISO(lab.publishedAt), "LLLL d, yyyy");
    } catch (error) {
      console.error(`Error formatting date for lab ${lab.slug}:`, error);
      return lab.publishedAt;
    }
  })();

  return (
    <>
      <Card className="hover:bg-muted/50 transition-colors">
        <CardHeader className="space-y-0 pb-2">
          <CardTitle>
            <Link
              href={`/labs/${lab.slug}`}
              className="text-xl hover:text-primary transition-colors"
            >
              {lab.title}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {!isAllLabsPage && (
            <p className="text-muted-foreground">{lab.description}</p>
          )}
          <time
            dateTime={lab.publishedAt}
            className="text-sm text-muted-foreground"
          >
            Date Published: {formattedDate}
          </time>
        </CardContent>
      </Card>
    </>
  );
};

export default LabCard;