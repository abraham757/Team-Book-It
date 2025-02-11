import { Search } from 'lucide-react';
import { MessageCircleCode } from 'lucide-react';
import { Heart } from 'lucide-react';


export const navItems = [
    { label: "Place Holder", href: "#" },
    { label: "Place Holder", href: "#" },
    { label: "Place Holder", href: "#" },
    { label: "Place Holder", href: "#" },
  ];

export const features = [
  {
    icon: <Search />,
    text: "Google API Books Search",
    description:
      "Easily find your favorite books from a large collection using the Google Books API.",
  },
  {
    icon: <MessageCircleCode />,
    text: "Leave and read reviews",
    description:
      "Share your thoughts on your favorite books and see what others have to say about theirs!",
  },
  {
    icon: <Heart />,
    text: "Favorite Books",
    description:
      "Create your own personal library by saving your favorite books for easy access.",
  },
];
