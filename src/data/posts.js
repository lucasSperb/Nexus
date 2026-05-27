export const posts = [
  {
    id: 1,

    user: {
      name: "Lucas",
      username: "@lucas",
      avatar:
        "https://i.pravatar.cc/150?img=3",
    },

    content:
      "Bem-vindo ao Nexus ⚡",

    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",

    likes: 12,

    liked: false,

    comments: [
      {
        id: 1,
        user: "Ana",
        text: "Muito bom 🔥",
      },
    ],

    createdAt: "2h",
  },

  {
    id: 2,

    user: {
      name: "Maria",
      username: "@maria",
      avatar:
        "https://i.pravatar.cc/150?img=5",
    },

    content:
      "Começando no React 🚀",

    image: "",

    likes: 5,

    liked: false,

    comments: [],

    createdAt: "5h",
  },
];