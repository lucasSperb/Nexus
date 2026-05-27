import { useEffect, useState } from "react";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import RightPanel from "./components/layout/RightPanel";
import MobileNavbar from "./components/layout/MobileNavbar";

import Feed from "./components/feed/Feed";
import FeedTabs from "./components/feed/FeedTabs";
import StoriesBar from "./components/feed/StoriesBar";
import CreatePost from "./components/feed/CreatePost";
import LoadingFeed from "./components/feed/LoadingFeed";

import useLocalStorage from "./hooks/useLocalStorage";

import { posts as initialPosts } from "./data/posts";

import { useApp } from "./context/AppContext";

export default function App() {
  const {
    notifications,
    setNotifications,

    savedPosts,
    setSavedPosts,
  } = useApp();

  const [selectedAudio, setSelectedAudio] =
   useState("");

  const [posts, setPosts] =
    useLocalStorage(
      "nexus-posts",
      initialPosts
    );

  const [newPost, setNewPost] =
    useState("");

  const [activeTab, setActiveTab] =
    useState("For You");

  const [search, setSearch] =
    useState("");

  const [selectedImage, setSelectedImage] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  /* =========================
     CREATE POST
  ========================= */

  function handleCreatePost(
    extraData = {}
  ) {
    const hasText =
      newPost.trim();

    const hasImage =
      !!selectedImage;

    const hasAudio =
      !!selectedAudio;

    const hasPoll =
      extraData.poll &&
      extraData.poll.question &&
      extraData.poll.options.length >
        0;

    /* impede post vazio */

    if (
      !hasText &&
      !hasImage &&
      !hasAudio &&
      !hasPoll
    ) {
      return;
    }

    const newPostData = {
      id: Date.now(),

      user: {
        name: "Lucas",

        username: "@lucas",

        avatar:
          "https://i.pravatar.cc/150?img=12",
      },

      content: newPost || "",

      image: selectedImage || null,

      audio: selectedAudio || null,

      poll: hasPoll
        ? extraData.poll
        : null,

      likes: 0,

      liked: false,

      comments: [],

      createdAt: "now",
    };

    setPosts((prev) => [
      newPostData,
      ...prev,
    ]);

    setNotifications((prev) => [
      {
        id: Date.now(),

        text:
          "🚀 Novo post publicado",
      },

      ...prev,
    ]);

    /* RESET */

    setNewPost("");

    setSelectedImage("");

    setSelectedAudio("");
  }

  
  function handleAudioUpload(e) {
    const file = e.target.files[0];

    if (!file) return;

    /* limpa URL antiga */

    if (selectedAudio) {
      URL.revokeObjectURL(
        selectedAudio
      );
    }

    const audioUrl =
      URL.createObjectURL(file);

    setSelectedAudio(audioUrl);

    /* permite selecionar o mesmo arquivo novamente */

    e.target.value = null;
  }
  /* =========================
     IMAGE UPLOAD
  ========================= */

  function handleImageUpload(e) {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl =
      URL.createObjectURL(file);

    setSelectedImage(imageUrl);
  }

  /* =========================
     LIKE
  ========================= */

  function handleLike(postId) {
    const updatedPosts = posts.map(
      (post) => {
        if (post.id === postId) {
          return {
            ...post,

            liked: !post.liked,

            likes: post.liked
              ? post.likes - 1
              : post.likes + 1,
          };
        }

        return post;
      }
    );

    setPosts(updatedPosts);

    setNotifications((prev) => [
      {
        id: Date.now(),
        text:
          "💜 Você curtiu um post",
      },

      ...prev,
    ]);
  }

  /* =========================
     DELETE
  ========================= */

  function handleDelete(postId) {
    const filteredPosts =
      posts.filter(
        (post) => post.id !== postId
      );

    setPosts(filteredPosts);
  }

  /* =========================
     COMMENT
  ========================= */

  function handleComment(
    postId,
    text
  ) {
    if (!text.trim()) return;

    const updatedPosts = posts.map(
      (post) => {
        if (post.id === postId) {
          return {
            ...post,

            comments: [
              ...post.comments,

              {
                id: Date.now(),
                user: "Lucas",
                text,
              },
            ],
          };
        }

        return post;
      }
    );

    setPosts(updatedPosts);

    setNotifications((prev) => [
      {
        id: Date.now(),
        text:
          "💬 Novo comentário enviado",
      },

      ...prev,
    ]);
  }

  /* =========================
     SHARE
  ========================= */

  function handleShare(post) {
    navigator.clipboard.writeText(
      post.content
    );

    alert(
      "Post copied to clipboard 🚀"
    );
  }

  /* =========================
     SAVE POST
  ========================= */

  function handleSavePost(post) {
    const alreadySaved =
      savedPosts.find(
        (item) => item.id === post.id
      );

    if (alreadySaved) return;

    setSavedPosts([
      ...savedPosts,
      post,
    ]);

    setNotifications((prev) => [
      {
        id: Date.now(),
        text: "📌 Post salvo",
      },

      ...prev,
    ]);
  }

  /* =========================
     FEED FILTER
  ========================= */

  let filteredPosts = [...posts];

  filteredPosts = filteredPosts.filter(
    (post) =>
      post.content
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
  );

  if (activeTab === "Trending") {
    filteredPosts.sort(
      (a, b) => b.likes - a.likes
    );
  }

  return (
    <div className="nexus-container">
      <Sidebar />

      <main className="nexus-main">
        <Header
          search={search}
          setSearch={setSearch}
        />

        <CreatePost
          newPost={newPost}
          setNewPost={setNewPost}
          handleCreatePost={
            handleCreatePost
          }
          handleImageUpload={
            handleImageUpload
          }
          handleAudioUpload={
            handleAudioUpload
          }
          selectedImage={selectedImage}
          selectedAudio={selectedAudio}
          setSelectedAudio={
            setSelectedAudio
          }
        />

        <StoriesBar />

        <FeedTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {loading ? (
          <LoadingFeed />
        ) : (
          <Feed
            posts={filteredPosts}
            onLike={handleLike}
            onDelete={handleDelete}
            onComment={handleComment}
            onShare={handleShare}
            onSave={handleSavePost}
          />
        )}
      </main>

      <RightPanel />

      <MobileNavbar />
    </div>
  );
}