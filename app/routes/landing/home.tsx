import type { Route } from "./+types/home";
import { Link } from "react-router";
import { LandingNavbar } from "~/components/LandingPage/layout/LandingNavbar";
import { TutorCard } from "~/components/LandingPage/home/TutorCard";
import { CategoryCard } from "~/components/LandingPage/CategoryCard";
import { Rocket, Search } from "lucide-react";
import {
  FaGlobe,
  FaCalculator,
  FaFlask,
  FaCode,
  FaLeaf,
  FaMusic,
  FaToriiGate,
} from "react-icons/fa";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TutorHub - Find Your Perfect Tutor" },
    {
      name: "description",
      content: "Connect with expert tutors for 1-on-1 learning.",
    },
  ];
}

import { useState } from "react";
// ... existing imports

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const categories = [
    { name: "English", icon: <FaGlobe className="text-orange-600" /> },
    { name: "Spanish", icon: <FaGlobe className="text-orange-700" /> },
    { name: "Maths", icon: <FaCalculator className="text-orange-600" /> },
    { name: "Science", icon: <FaFlask className="text-orange-600" /> },
    { name: "Japanese", icon: <FaToriiGate className="text-orange-600" /> },
    { name: "Coding", icon: <FaCode className="text-orange-600" /> },
    { name: "Planting", icon: <FaLeaf className="text-orange-600" /> },
    { name: "Music", icon: <FaMusic className="text-orange-600" /> },
  ];

  const popularSearches = [
    "Algebra II",
    "Physics 101",
    "Conversational Spanish",
    "Python Programming",
    "Organic Chemistry",
    "Piano Lessons",
  ];

  const suggestions =
    searchTerm.length > 0
      ? categories
          .filter((c) =>
            c.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((c) => c.name)
          .concat(
            popularSearches.filter((s) =>
              s.toLowerCase().includes(searchTerm.toLowerCase())
            )
          )
      : popularSearches;

  const tutors = [
    {
      id: "1",
      name: "Dr. Sarah Miller",
      subject: "Mathematics",
      rating: 4.9,
      price: 45,
      imageUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "2",
      name: "James Wilson",
      subject: "Physics",
      rating: 4.8,
      price: 35,
      imageUrl:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "3",
      name: "Emily Chen",
      subject: "Chemistry",
      rating: 4.9,
      price: 40,
      imageUrl:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "4",
      name: "Michael Brown",
      subject: "English Literature",
      rating: 4.7,
      price: 30,
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background flex flex-col font-sans">
      <LandingNavbar />

      {/* Hero Section */}
      <div className="relative pt-24 pb-32 z-10 px-6 lg:px-12 bg-gradient-to-t from-muted to-white dark:bg-background overflow-hidden rounded-b-[80px] border-b">
        {/* Decorative Background Blobs - optional, kept minimal for now */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-6xl mx-auto text-center">
          {/* <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-6">
                <Rocket className="w-4 h-4" /> Learn Faster, Grow Stronger
            </span> */}
          <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-primary mb-8 leading-tight tracking-tight">
            Find the perfect{" "}
            <span className="text-secondary relative">
              tutor
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-40"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </span>{" "}
            for you.
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Master any subject with personalized 1-on-1 lessons from verified
            experts. From Coding to Planting, we have it all.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-16 group z-50">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white dark:bg-card rounded-4xl shadow-xl border border-border">
              <div className="flex items-center p-2">
                <span className="flex items-center pl-4 text-muted-foreground text-xl">
                  <Search className="w-6 h-6" />
                </span>
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() =>
                    setTimeout(() => setShowSuggestions(false), 200)
                  }
                  className="flex-1 px-4 py-3 bg-transparent text-lg focus:outline-none placeholder:text-muted-foreground/50"
                />
                <Link
                  to={`/tutors?search=${searchTerm}`}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all shadow-md flex items-center"
                >
                  Search
                </Link>
              </div>

              {/* Suggestions Dropdown */}
              {showSuggestions && (
                <div className="absolute top-full z-40 left-0 right-0 mt-2 bg-white dark:bg-card border border-border rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
                  <div className="p-2">
                    <p className="px-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      {searchTerm ? "Suggestions" : "Popular Searches"}
                    </p>
                    {suggestions.length > 0 ? (
                      <ul>
                        {suggestions.slice(0, 6).map((suggestion, index) => (
                          <li key={index}>
                            <Link
                              to={`/tutors?search=${suggestion}`}
                              className="flex items-center gap-3 px-4 py-3 hover:bg-muted rounded-xl transition-colors text-left"
                              onClick={() => {
                                setSearchTerm(suggestion);
                                setShowSuggestions(false);
                              }}
                            >
                              <Search className="w-4 h-4 text-muted-foreground" />
                              <span className="font-medium">{suggestion}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="p-4 text-center text-muted-foreground">
                        No results found.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Categories */}
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-bold text-muted-foreground mb-6 uppercase tracking-wider">
              Explore popular topics
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
              {categories.map((cat) => (
                <CategoryCard
                  key={cat.name}
                  name={cat.name}
                  icon={cat.icon}
                  onClick={() =>
                    (window.location.href = `/tutors?category=${cat.name}`)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tutors */}
      <div className="bg-gradient-to-b from-muted/20 to-background -translate-y-16 py-24 px-6 h-full md:px-12 flex-1 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12 mt-16">
            <div>
              <h2 className="text-3xl font-bold font-heading text-primary mb-2">
                Top Rated Tutors
              </h2>
              <p className="text-muted-foreground">Learn from the very best.</p>
            </div>
            <Link
              to="/tutors"
              className="px-6 py-2 border border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-colors"
            >
              View All Tutors
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {tutors.map((tutor) => (
              <TutorCard key={tutor.id} {...tutor} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16 px-6 lg:px-12 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold font-heading mb-4">TutorHub</h3>
            <p className="text-primary-foreground/80 max-w-sm">
              Connecting students with expert tutors worldwide. Unlock your
              potential with personalized learning.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Browse Tutors</li>
              <li>How it Works</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Help Center</li>
              <li>Become a Tutor</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/50 text-sm">
          © 2024 TutorHub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
