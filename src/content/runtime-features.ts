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
      "Illustrative Contact page with email alex@example.com and a raised Continue button. An exposed mint spine connects that button to the meaning Spine reads: name Continue, role button, state enabled.",
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
      "Clicking Continue on the example Contact page leads to an observed page headed Delivery. The action record identifies the target and the completed navigation.",
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
      "The example moves from Contact to Delivery in one session. The contact email alex@example.com is retained and remains visible on the Delivery page.",
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
      "On the example Delivery page, the empty Street address field can be filled. Clicking Continue is unavailable because an address is required.",
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
      "Filling the example Street address field with 12 Cedar Lane changes the Continue button from disabled to enabled. The semantic delta isolates this change in state.",
  },
] as const;
