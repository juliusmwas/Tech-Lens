// src/lib/userStorage.js
const USER_KEY = "techlens_user_v1";
const SAMPLE = {
  id: "u1",
  name: "Ethan Caldwell",
  email: "ethan@example.com",
  bio: "Writer · Developer · Curious about the future of tech.",
  avatar: "", // dataURL or '/path/to/default.jpg'
  stats: { articles: 3, followers: 120, following: 24 },
  articles: [
    {
      id: "a1",
      title: "Remote Work Trends in the Digital Age",
      date: "2024-09-27",
      excerpt: "Discover the cutting-edge tech gadgets making travel smarter...",
      cover: ""
    },
    // add more mock articles if you like
  ],
};

export function getUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) {
      localStorage.setItem(USER_KEY, JSON.stringify(SAMPLE));
      return SAMPLE;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error("userStorage.getUser err", e);
    return SAMPLE;
  }
}

export function saveUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}
