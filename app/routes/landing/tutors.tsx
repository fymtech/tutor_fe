import type { Route } from "./+types/tutors";
import { useState } from "react";
import { LandingNavbar } from "~/components/LandingPage/layout/LandingNavbar";
import { TutorCard } from "~/components/LandingPage/home/TutorCard";
import { Search } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Browse Tutors - TutorHub" },
    { name: "description", content: "Find the best tutors for your needs." },
  ];
}

export default function BrowseTutors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    "English",
    "Spanish",
    "Maths",
    "Science",
    "Japanese",
    "Coding",
    "Music",
    "Planting",
  ];

  const allTutors = [
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
    {
      id: "5",
      name: "Kenji Tanaka",
      subject: "Japanese",
      rating: 5.0,
      price: 50,
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "6",
      name: "Alice Green",
      subject: "Planting",
      rating: 4.6,
      price: 25,
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    },
  ];

  const filteredTutors = allTutors.filter((tutor) => {
    const matchesSearch =
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutor.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? tutor.subject.includes(selectedCategory)
      : true; // Simple category matching
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <LandingNavbar />

      <main className="flex-1 container mx-auto px-6 py-10 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar (Desktop) */}
          <aside className="hidden md:block w-64 shrink-0 space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === null ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:bg-muted"}`}
                >
                  All Categories
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${selectedCategory === cat ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:bg-muted"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Price Range</h3>
              <div className="space-y-4">
                {/* Placeholder for price slider */}
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-primary"></div>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>$10</span>
                  <span>$100+</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold font-heading text-primary mb-6">
                Browse Tutors
              </h1>
              <div className="relative group max-w-2xl">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex bg-white dark:bg-card rounded-xl p-1 shadow-md border border-border">
                  <span className="flex items-center pl-3 text-muted-foreground">
                    <Search className="w-5 h-5" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search by name or subject..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 px-4 py-2 bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              {/* Mobile Filter Toggles could go here */}
            </div>

            {/* Results Grid */}
            {filteredTutors.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTutors.map((tutor) => (
                  <TutorCard key={tutor.id} {...tutor} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-xl">
                  No tutors found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                  }}
                  className="mt-4 text-primary underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
