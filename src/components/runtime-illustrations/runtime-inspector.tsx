type InspectorRow = {
  role: string;
  name: string;
  state?: string;
};

type InspectorPanel = {
  id: string;
  eyebrow: string;
  title: string;
  rows: readonly InspectorRow[];
  route?: readonly string[];
};

const panels: readonly InspectorPanel[] = [
  {
    id: "semantic",
    eyebrow: "Semantic view",
    title: "Names · roles · state",
    rows: [
      { role: "Heading", name: "Workspace settings" },
      { role: "Textbox", name: "Workspace name", state: "Atlas" },
      { role: "Combobox", name: "Region", state: "Europe" },
      { role: "Button", name: "Save changes", state: "enabled" },
    ],
  },
  {
    id: "action",
    eyebrow: "Verified action",
    title: "Action record",
    rows: [
      { role: "Target", name: "Save changes" },
      { role: "Outcome", name: "Saved" },
      { role: "Evidence", name: "Status updated", state: "Button disabled" },
    ],
  },
  {
    id: "session",
    eyebrow: "Session continuity",
    title: "Session 01",
    route: ["Settings", "Overview", "Settings"],
    rows: [
      { role: "Name", name: "Atlas" },
      { role: "Region", name: "Europe" },
    ],
  },
  {
    id: "capability",
    eyebrow: "Current capabilities",
    title: "Available actions",
    rows: [
      { role: "Textbox", name: "Workspace name", state: "fill" },
      { role: "Combobox", name: "Region", state: "select" },
      { role: "Button", name: "Save changes", state: "unavailable" },
    ],
  },
  {
    id: "delta",
    eyebrow: "State delta",
    title: "Changed state",
    rows: [
      { role: "Region", name: "Europe", state: "→ North America" },
      { role: "Status", name: "Saved", state: "→ Unsaved" },
      { role: "Save", name: "disabled", state: "→ enabled" },
    ],
  },
];

export function RuntimeInspector({ active }: { active: number }) {
  const panel = panels[active] ?? panels[0];

  return (
    <div className="demo-inspector" data-phase={panel.id}>
      <div className="demo-inspector-eyebrow">{panel.eyebrow}</div>
      <div className="demo-inspector-title">{panel.title}</div>

      {panel.route && (
        <>
          <ol className="demo-inspector-route" aria-label="Session route">
            {panel.route.map((route, index, routes) => (
              <li key={`${route}-${index}`} data-current={index === routes.length - 1 || undefined}>
                <span>{route}</span>
                {index < routes.length - 1 && <span aria-hidden="true">→</span>}
              </li>
            ))}
          </ol>
          <div className="demo-inspector-divider" aria-hidden="true" />
          <div className="demo-inspector-note">Retained values</div>
        </>
      )}

      <ul className="demo-inspector-list">
        {panel.rows.map((row) => (
          <li
            key={row.role}
            className="demo-inspector-row"
            data-available={row.state === "unavailable" ? false : undefined}
          >
            <span className="demo-inspector-role">{row.role}</span>
            <span className="demo-inspector-name">{row.name}</span>
            {row.state && <span className="demo-inspector-state">{row.state}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
