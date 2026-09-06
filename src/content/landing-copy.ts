export const landingCopy = {
  intro: { headline: "The web made legible", subtext: "The semantic runtime for the agent-native web." },
  overview: {
    headline: "A web runtime for agents.",
    lede: "Spine gives AI agents a compact semantic view of the web and the verified actions to move through it.",
    body: "It is not a browser UI, a CDP wrapper, or a screenshot machine. It is a native runtime built around what an agent actually needs: state, intent, action, and proof.",
  },
  features: ["Semantic documents", "Verified actions", "Native sessions", "Explicit capability"],
  advantage: {
    headline: "Chrome renders pixels. Spine resolves intent.",
    body: "That shift means fewer tokens, fewer round trips, fewer stale plans, and a clear line between what an agent attempted and what the page confirmed.",
  },
} as const;
