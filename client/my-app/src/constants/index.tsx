import React from "react"; // ✅ Import React for functional components
import { Search, MessageCircleCode, Heart } from "lucide-react";

// ✅ Convert these into proper React functional components
const SearchIcon: React.FC = () => <Search />;
const MessageIcon: React.FC = () => <MessageCircleCode />;
const HeartIcon: React.FC = () => <Heart />;

interface NavItem {
  id: string;
  label: string;
}

interface Feature {
  icon: React.FC; // ✅ Define icon type as a React component
  text: string;
  description: string;
}

export const navItems: NavItem[] = [
  { id: "/", label: "Home" },
  { id: "/search", label: "Search" },
  { id: "/favorites", label: "Favorites" },
  { id: "/login", label: "Login" },
];

export const features: Feature[] = [
  {
    icon: SearchIcon,
    text: "Google API Books Search",
    description:
      "Easily find your favorite books from a large collection using the Google Books API.",
  },
  {
    icon: MessageIcon,
    text: "Leave and read reviews",
    description:
      "Share your thoughts on your favorite books and see what others have to say about theirs!",
  },
  {
    icon: HeartIcon,
    text: "Favorite Books",
    description:
      "Create your own personal library by saving your favorite books for easy access.",
  },
];
