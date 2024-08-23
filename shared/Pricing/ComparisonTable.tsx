import Link from "next/link";
import { useState } from "react";
import {
  RiExternalLinkLine,
  RiCloseCircleFill,
  RiCheckboxCircleFill,
} from "@remixicon/react";

export default function ComparisonTable({ plans, features, sections }) {
  const [selectedPlan, setSelectedPlan] = useState(plans[0].name);

  const renderPlanTabs = () => (
    <div className="grid grid-cols-3 mb-4 md:hidden pt-4 sticky top-14 bg-canvasBase">
      {plans.map((plan, i) => (
        <button
          key={i}
          className={`px-4 py-2 text-sm font-medium text-basis border-b-2 border-disabled ${
            plan.name === "Pro" && "text-primary-intense"
          } ${
            plan.name === "Enterprise" &&
            "bg-gradient-to-b from-matcha-400 to-breeze-400 bg-clip-text text-transparent"
          } ${selectedPlan === plan.name && "border-b-carbon-0"}`}
          onClick={() => setSelectedPlan(plan.name)}
        >
          {plan.name}
        </button>
      ))}
    </div>
  );

  return (
    <div className="text-basis">
      <h2 className="mt-4 text-2xl font-semibold">Plan features</h2>
      {renderPlanTabs()}
      {sections.map((section) => {
        const sectionFeatures = features.filter(
          (feature) => feature.section === section.key
        );
        if (section.key === "recovery") {
          return (
            <div key={section.key}>
              {renderHighlightGrid(
                sectionFeatures,
                section.name,
                section.description
              )}
            </div>
          );
        }
        return sectionFeatures.length > 0 ? (
          <div key={section.key}>
            {renderTable(sectionFeatures, section.name, plans, selectedPlan)}
          </div>
        ) : null;
      })}
    </div>
  );
}

const renderTable = (sectionFeatures, sectionName, plans, selectedPlan) => (
  <table className="w-full table-fixed my-8 text-left">
    <thead>
      {/* Sticky header height */}
      <tr className="border-b border-muted md:sticky top-[84px] bg-canvasBase">
        <th className="py-4 text-lg font-bold">{sectionName}</th>
        {plans.map((plan, i) => (
          <th
            className={`px-6 py-4 hidden md:table-cell ${
              plan.name === "Pro" && "text-primary-intense"
            } ${
              plan.name === "Enterprise" &&
              "bg-gradient-to-b from-matcha-400 to-breeze-400 bg-clip-text text-transparent"
            }`}
            key={i}
          >
            <h2 className="text-sm font-medium">{plan.name} </h2>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {sectionFeatures.map((feature, i) => (
        <tr key={i} className="h-11 border-t last:border-b border-subtle">
          <td className="py-3 text-sm">
            <div className="flex items-center font-medium gap-1">
              {feature.name}
              {Boolean(feature.infoUrl) && (
                <Link
                  href={feature.infoUrl}
                  className="transition-all text-muted hover:text-white"
                >
                  <RiExternalLinkLine className="h-4 w-4" />
                </Link>
              )}
            </div>
            {feature.description && (
              <div className="text-muted mt-0.5">{feature.description}</div>
            )}
          </td>
          {plans.map((plan, j) => {
            const planValue = feature.plans?.[plan.name] ?? feature.all;

            let value = null;
            let description = null;
            let bool = null;

            if (typeof planValue === "string") {
              value = planValue;
            } else if (typeof planValue === "boolean") {
              bool = planValue;
            } else if (planValue && typeof planValue === "object") {
              value = planValue.value;
              description = planValue.description;
            }

            return (
              <td
                key={j}
                className={`px-6 text-sm font-medium ${
                  plan.name !== selectedPlan ? "hidden md:table-cell" : ""
                }`}
              >
                {value ? (
                  <>
                    {value}
                    {description && (
                      <div className="text-muted mt-0.5">{description}</div>
                    )}
                  </>
                ) : bool !== null ? (
                  bool ? (
                    <RiCheckboxCircleFill className="text-primary-xSubtle h-5 w-5" />
                  ) : (
                    <RiCloseCircleFill className="text-disabled h-5 w-5" />
                  )
                ) : null}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  </table>
);

const renderHighlightGrid = (
  sectionFeatures,
  sectionName,
  sectionDescription
) => (
  <div className="w-full my-16 text-center bg-gradient-to-b from-matcha-400 to-breeze-400 rounded-2xl p-px">
    <div className="bg-canvasBase px-6 py-8 rounded-2xl">
      <div className="pb-6 text-lg font-bold">
        {sectionName}
        <div className="text-sm font-normal">{sectionDescription}</div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 text-sm gap-6 lg:gap-10">
        {sectionFeatures.map((feature, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="flex items-center font-medium gap-1">
              {feature.name}
              {Boolean(feature.infoUrl) && (
                <Link
                  href={feature.infoUrl}
                  className="transition-all text-muted hover:text-white"
                >
                  <RiExternalLinkLine className="h-4 w-4" />
                </Link>
              )}
            </div>
            {feature.description && (
              <div className="text-muted mt-0.5">{feature.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);
