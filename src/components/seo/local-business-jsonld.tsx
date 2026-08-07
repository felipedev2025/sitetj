import { company } from "@/data/company";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.legalName,
    image: "https://www.tjautomacao.com.br/images/brand/tj-automacao-logo-oficial.jpg",
    url: "https://www.tjautomacao.com.br",
    telephone: company.contact.phones[0].label,
    email: company.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.contact.address.street,
      addressLocality: company.contact.address.city,
      addressRegion: company.contact.address.state,
      postalCode: company.contact.address.zip,
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    sameAs: [company.social.facebook, company.social.instagram],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
