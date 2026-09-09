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
      "A document tree is carved into an ivory architectural surface. Its branching channels join an exposed mint spine identifying structure, state, and action. The drawing illustrates how Spine reads a complex page as usable meaning.",
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
      "A resolved target connects to a check mark, illustrating an action followed by evidence of its observed effect.",
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
      "Three numbered steps share one unbroken connection, illustrating a session that carries its state from one step to the next.",
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
      "A spine branches into fill, select, and an unavailable action. Solid nodes indicate supported operations; an outlined, crossed node indicates an unavailable operation.",
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
      "One line is highlighted and pulled forward while the surrounding lines remain muted, illustrating a semantic delta that isolates changed state from the rest of the page.",
  },
] as const;
