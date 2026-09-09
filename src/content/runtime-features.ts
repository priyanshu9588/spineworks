export const runtimeFeatures = [
  {
    id: "semantic",
    number: "01",
    verb: "Understand",
    title: "Semantic documents",
    description:
      "Read the page as names, roles, and state. Give your agent the context it needs to choose its next move.",
    notation: "page → meaning",
    illustration:
      "An illustrative workspace settings page named Atlas, with Region set to Europe and Save changes enabled. Beside it, the semantic view identifies the heading, textbox, combobox, and button by their names, roles, and current states.",
  },
  {
    id: "action",
    number: "02",
    verb: "Act",
    title: "Verified actions",
    description:
      "Act on a resolved target, let the page settle, and receive a record of what actually changed.",
    notation: "intent → evidence",
    illustration:
      "The same Atlas settings page after Save changes completes. The page shows Saved and its save button is disabled. An action record identifies the target and these observed changes.",
  },
  {
    id: "session",
    number: "03",
    verb: "Persist",
    title: "Native sessions",
    description:
      "Keep navigation, cookies, and form state together as your agent moves from one step to the next.",
    notation: "one session, many steps",
    illustration:
      "Session 01 continues from Settings to Overview and back to Settings. The illustrative Atlas workspace, Europe region, and saved state are retained across the navigation.",
  },
  {
    id: "capability",
    number: "04",
    verb: "Know",
    title: "Capability maps",
    description:
      "See which actions each control supports. Surface unavailable actions and reject targets that have gone stale.",
    notation: "control → possibility",
    illustration:
      "The saved Atlas settings page exposes fill for Workspace name and select for Region. Save changes is unavailable while the page has no unsaved changes.",
  },
  {
    id: "delta",
    number: "05",
    verb: "Continue",
    title: "Semantic deltas",
    description:
      "Receive the changed state after each action, so the next step starts with a current understanding of the page.",
    notation: "state → what changed",
    illustration:
      "The illustrative Atlas workspace changes its Region from Europe to North America. The delta view lists only the changed region, the status changing from Saved to Unsaved, and the save button becoming enabled.",
  },
] as const;
