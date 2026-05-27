import {
  createContext,
  useContext,
  useState,
} from "react";

import { posts as initialPosts } from "../data/posts";

const AppContext =
  createContext();

export function AppProvider({
  children,
}) {
  const [posts, setPosts] =
    useState(initialPosts);

  const [notifications, setNotifications] =
    useState([]);

  const [savedPosts, setSavedPosts] =
    useState([]);

  const [following, setFollowing] =
    useState([]);

  const [messages, setMessages] =
    useState([
      {
        id: 1,

        user: "Ana",

        online: true,

        messages: [
          {
            from: "Ana",
            text:
              "O Nexus ficou incrível 🔥",
          },
        ],
      },
    ]);

  const [currentUser] = useState({
    id: 1,

    name: "Lucas",

    username: "@lucas",

    bio:
      "Frontend Developer • React",

    avatar:
      "https://i.pravatar.cc/150?img=12",

    banner:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1600&auto=format&fit=crop",
  });

  return (
    <AppContext.Provider
      value={{
        posts,
        setPosts,

        notifications,
        setNotifications,

        savedPosts,
        setSavedPosts,

        following,
        setFollowing,

        messages,
        setMessages,

        currentUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}