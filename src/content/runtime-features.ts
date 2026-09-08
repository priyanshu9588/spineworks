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
      "A layered web page with a Welcome heading, Email field, and Submit button resolves into three paper specimens, each identified by its semantic role and name.",
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
      "A bracketed Submit control on a folded form connects through an engraved ribbon to a perforated Saved receipt, marked with a verification seal.",
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
      "Three successive document leaves preserve cookies, draft state, and location. Their repeated identity and continuous binding thread show the same session continuing across turns.",
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
      "A cut-paper botanical specimen carries fill, select, and click leaves, each engraved with its supported control. A severed branch marks an unavailable action.",
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
      "Two overlapping document sheets retain the previous state while a lifted, inked insert reveals new content and its expanded state.",
  },
] as const;
