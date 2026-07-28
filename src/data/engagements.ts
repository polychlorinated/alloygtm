export interface Engagement {
  id: string;
  level: string;
  name: string;
  summary: string;
  deliverable: string;
  cta: { label: string; href: string };
}

export const engagements: Engagement[] = [
  {
    id: "diagnose",
    level: "Diagnose",
    name: "Diagnostic Audit Sprint",
    summary:
      "Audit signal leakage across your buyer journey, identify the highest-impact fixes, and leave with a custom playbook your team can apply. Execution stays with you — the diagnosis doesn't.",
    deliverable: "Audit report with a prioritized roadmap playbook",
    cta: { label: "Run the free audit", href: "/audit/" },
  },
  {
    id: "build",
    level: "Build",
    name: "Signal Engineer Build",
    summary:
      "Run the Alloy playbook together: discover the gaps, amplify what resonates, configure an instrumentation stack, and validate the results against real customer behavior.",
    deliverable: "Operational GTM system, built & validated",
    cta: { label: "Scope a build", href: "/contact/" },
  },
  {
    id: "operate",
    level: "Operate",
    name: "GTM Ops Leadership",
    summary:
      "Continuous optimization, testing, and enablement embedded in your GTM team — plus support staffing the permanent team that inherits a system that already works.",
    deliverable: "6–12 month bespoke partnership",
    cta: { label: "Start the conversation", href: "/contact/" },
  },
];
