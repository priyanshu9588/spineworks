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
      "A dense field of web characters unfolds into a document with named heading, textbox, and button branches.",
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
      "A continuous thread connects a resolved Submit action to its observed Saved result, with the previous state retained faintly behind it.",
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
      "Three offset document sheets are joined by one unbroken thread, preserving cookies, form state, and location across steps.",
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
      "An engraved branching control specimen carries fill, select, and click leaves. An inactive branch ends before an unavailable action.",
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
      "Previous and current document structures align, with a single newly expanded branch emphasized while the unchanged structure stays quiet.",
  },
] as const;
