import Link from "next/link";
import Image from "next/image";
import { Certification } from "@/utils/types";

type Props = {
  certifications: Certification[];
};

export default function Certifications({ certifications }: Props) {
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section className="w-full">
      <div className="mb-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            My Certifications
          </h3>
          <p className="text-sm mb-4">
            Professional certifications and achievements. Click on any badge to
            view verification details.
          </p>
        </div>

        {/* certification badges grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
          {certifications.map((cert) => (
            <div key={cert.id ?? cert.title} className="flex justify-center">
              {cert.href ? (
                <Link
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                  title={`${cert.title} - ${cert.issuer}`}
                >
                  {cert.imageUrl ? (
                    <Image
                      src={cert.imageUrl}
                      alt={`${cert.title} certification badge`}
                      width={125}
                      height={125}
                      className="rounded-lg"
                    />
                  ) : (
                    <div className="w-[125px] h-[125px] rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center bg-muted/20">
                      <span className="text-xs text-center text-muted-foreground p-2">
                        {cert.title}
                      </span>
                    </div>
                  )}
                </Link>
              ) : (
                <div title={`${cert.title} - ${cert.issuer}`}>
                  {cert.imageUrl ? (
                    <Image
                      src={cert.imageUrl}
                      alt={`${cert.title} certification badge`}
                      width={125}
                      height={125}
                      className="rounded-lg"
                    />
                  ) : (
                    <div className="w-[125px] h-[125px] rounded-lg border-2 border-dashed border-muted-foreground/30 flex items-center justify-center bg-muted/20">
                      <span className="text-xs text-center text-muted-foreground p-2">
                        {cert.title}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certification list for accessibility and SEO */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-3 text-muted-foreground">
            Certification Details:
          </h4>
          <ul className="space-y-2">
            {certifications.map((cert) => (
              <li key={cert.id ?? cert.title} className="text-sm">
                {cert.href ? (
                  <Link
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {cert.title}
                  </Link>
                ) : (
                  <span>{cert.title}</span>
                )}
                <span className="text-muted-foreground"> - {cert.issuer}</span>
              </li>
            ))}
          </ul>

          {/* Link to view all certifications on Credly */}
          <div className="mt-4 pt-3 border-t border-muted-foreground/20">
            <p className="text-sm text-muted-foreground">
              See all my certifications here 👉🏻{" "}
              <Link
                href="https://www.credly.com/users/john-apella"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Credly
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
