export const config = {
  "number": 41,
  "slug": "chapter-os",
  "title": "Chapter OS",
  "category": "Student Agency Operations",
  "tagline": "An operating manual and dashboard blueprint for launching a Volta-style student chapter.",
  "persona": "Student leaders starting chapters in new cities.",
  "gap": "Student nonprofits scale poorly when practices live in DMs and individual leaders\u2019 heads.",
  "niche": "Student-powered digital service chapters.",
  "metric": "chapters operating from a shared system",
  "modules": [
    "Launch checklist",
    "Role descriptions",
    "Meeting rhythms",
    "Impact reporting cadence"
  ],
  "theme": {
    "accent": "#f97316",
    "accent2": "#fdba74",
    "emoji": "\ud83c\udf93",
    "metricLabel": "Operating readiness",
    "workflow": [
      "Set roles and artifacts",
      "Run rubric review",
      "Resolve blockers",
      "Export operating packet"
    ],
    "privacy": "Separate internal student notes from client-facing exports. Never store passwords."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "launch-checklist",
      "label": "Launch checklist",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify launch checklist with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "role-descriptions",
      "label": "Role descriptions",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify role descriptions with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "meeting-rhythms",
      "label": "Meeting rhythms",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify meeting rhythms with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "impact-reporting-cadence",
      "label": "Impact reporting cadence",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify impact reporting cadence with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Chapter OS and capture baseline evidence.",
      "Complete the launch checklist workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "Volta Cyprus Chapter",
    "chapter": "Cyprus",
    "studentLead": "Volta Student Lead",
    "notes": "Internal chapter operations project for student-led delivery excellence. Chapter OS sample.",
    "evidencePrefix": "Chapter OS",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
