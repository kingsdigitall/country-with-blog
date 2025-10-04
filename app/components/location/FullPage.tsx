import React from "react";
import Link from "next/link";
import contactContent from "@/app/Data/content";

const ContactInfo: any = contactContent.contactContent;

const Page = ({ data }: { data: any[] }) => {
  // Group the array data by state
  const groupedByState = data.reduce(
    (acc, component) => {
      // Skip if no slug
      if (!component.slug) return acc;

      // Extract state abbreviation from slug (e.g., "alameda-ca" -> "ca")
      const parts = component.slug.split("-");
      const stateAbbreviation =
        parts.length > 1 ? parts[parts.length - 1] : component.slug;

      // If this is a state entry
      if (component.value === "state" && stateAbbreviation) {
        // Only create state group if it doesn't already exist
        if (!acc[stateAbbreviation]) {
          acc[stateAbbreviation] = {
            stateComponent: { name: component.name, slug: component.slug },
            cities: [],
          };
        } else {
          // Update state component info if it already exists
          acc[stateAbbreviation].stateComponent = {
            name: component.name,
            slug: component.slug,
          };
        }
      }
      // If this is a city entry
      else if (stateAbbreviation) {
        // Ensure the state group exists (create placeholder if needed)
        if (!acc[stateAbbreviation]) {
          acc[stateAbbreviation] = {
            stateComponent: {
              name: stateAbbreviation.toUpperCase(),
              slug: stateAbbreviation,
            },
            cities: [],
          };
        }
        // Add city to the state group
        acc[stateAbbreviation].cities.push({
          name: component.name,
          slug: component.slug,
        });
      }

      return acc;
    },
    {} as Record<
      string,
      {
        stateComponent: { name: string; slug: string };
        cities: { name: string; slug: string }[];
      }
    >,
  );

  return (
    <div className="">
      <div>
        {Object.keys(groupedByState).map((stateAbbreviation) => {
          const { stateComponent, cities } = groupedByState[stateAbbreviation];

          // Only render states that have cities or are explicitly marked as states
          const hasCities = cities && cities.length > 0;
          const isState = data.some(
            (item) => item.slug === stateAbbreviation && item.value === "state",
          );

          // Render if it has cities or is a state entry
          if (hasCities || isState) {
            return (
              <div key={stateAbbreviation}>
                <div className="mx-12 mt-7 text-xl font-bold">
                  <Link
                    href={`https://${stateComponent.slug}.${ContactInfo.host}`}
                    className="duration-300 ease-in-out hover:text-main "
                  >
                    {stateComponent.name}
                  </Link>
                </div>
                {hasCities && (
                  <div className="mx-10 mt-2 flex h-fit w-auto flex-wrap gap-4 divide-x-2 divide-minor px-4 font-medium">
                    {cities
                      .sort((a: any, b: any) => a.name.localeCompare(b.name))
                      .map((city: any, index: any) => {
                        return (
                          <div className="" key={index}>
                            <Link
                              href={`https://${city.slug}.${ContactInfo.host}`}
                              className="font scale-100 pl-4 duration-300 ease-in-out hover:text-main"
                            >
                              {city.name}
                            </Link>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Page;
