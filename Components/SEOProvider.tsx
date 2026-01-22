"use client";

import { DefaultSeo } from "next-seo";
import SEO from "@/lib/next-seo.config";
import { JsonLd } from "react-schemaorg";
import { Person } from "schema-dts";

export default function SEOProvider() {
  return (
    <>
      <DefaultSeo {...SEO} />
      <JsonLd<Person>
        item={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Gustavo Lira Criado",
          jobTitle: "Desenvolvedor Freelancer",
          url: "https://gustavodev.com.br",
          sameAs: [
            "https://linkedin.com/in/gustavoliracriado",
            "https://github.com/gustavocriado",
          ],
        }}
      />
    </>
  );
}
