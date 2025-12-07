import type { Route } from "./+types/tutor.$tutorId";
import { Link } from "react-router";
import { LandingNavbar } from "~/components/LandingPage/layout/LandingNavbar";
import {
  Star,
  GraduationCap,
  Calendar,
  Lightbulb,
  MessageSquare,
} from "lucide-react";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `Tutor Profile - ${params.tutorId}` },
    { name: "description", content: "View tutor profile and book a session." },
  ];
}

export default function TutorDetail({ params }: Route.ComponentProps) {
  // Mock data - in a real app, fetch based on params.tutorId
  const tutor = {
    id: params.tutorId,
    name: "Dr. Sarah Miller",
    subject: "Mathematics",
    rating: 4.9,
    reviews: 124,
    price: 45,
    bio: "I am a passionate mathematics professor with over 10 years of experience teaching calculus, algebra, and statistics. My goal is to make complex concepts easy to understand for students of all levels.",
    education: "Ph.D. in Mathematics, Stanford University",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    categories: ["Calculus", "Algebra", "Statistics", "Geometry"],
    upcomingSessions: [
      {
        id: 1,
        topic: "Integration Techniques: By Parts",
        date: "Oct 24, 2:00 PM",
      },
      {
        id: 2,
        topic: "Understanding Limits and Continuity",
        date: "Oct 26, 4:00 PM",
      },
      { id: 3, topic: "Vector Calculus Basics", date: "Oct 28, 2:00 PM" },
    ],
    seasonalSyllabus: [
      { week: "Week 1-2", topic: "Foundations of Calculus" },
      { week: "Week 3-4", topic: "Derivatives and Applications" },
      { week: "Week 5-6", topic: "Integrals and Area Under Curves" },
      { week: "Week 7-8", topic: "Advanced Integration Methods" },
    ],
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <LandingNavbar />

      <main className="flex-1 container mx-auto px-6 py-10 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Profile Card */}
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-card border border-border rounded-2xl overflow-hidden shadow-sm sticky top-24">
              <div className="h-64 bg-muted">
                <img
                  src={tutor.imageUrl}
                  alt={tutor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h1 className="text-2xl font-bold font-heading text-foreground mb-1">
                  {tutor.name}
                </h1>
                <p className="text-secondary font-medium mb-4">
                  {tutor.subject}
                </p>

                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-yellow-500">
                    <Star className="fill-current w-5 h-5" />
                    <Star className="fill-current w-5 h-5" />
                    <Star className="fill-current w-5 h-5" />
                    <Star className="fill-current w-5 h-5" />
                    <Star className="fill-current w-5 h-5" />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({tutor.reviews} reviews)
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-1">
                    Hourly Rate
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    ${tutor.price}
                  </p>
                </div>

                <Link
                  to="/login"
                  className="block w-full text-center py-3 bg-secondary text-secondary-foreground font-bold rounded-xl hover:bg-secondary/90 transition-colors shadow-md"
                >
                  Book a Session
                </Link>
                <button className="w-full mt-3 py-3 border border-input bg-transparent text-foreground font-medium rounded-xl hover:bg-muted transition-colors flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Message Tutor
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="md:col-span-2 space-y-8">
            {/* About Section */}
            <section className="bg-white dark:bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary mb-4">
                About Me
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {tutor.bio}
              </p>
            </section>

            {/* Education Section */}
            <section className="bg-white dark:bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary mb-4">
                Education
              </h2>
              <div className="flex items-center gap-3">
                <span className="p-2 bg-muted rounded-lg text-xl text-primary">
                  <GraduationCap className="w-6 h-6" />
                </span>
                <p className="text-foreground font-medium">{tutor.education}</p>
              </div>
            </section>

            {/* Expertise */}
            <section className="bg-white dark:bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary mb-4">
                Expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {tutor.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </section>

            {/* Upcoming Sessions */}
            <section className="bg-white dark:bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary mb-4">
                Upcoming Live Sessions
              </h2>
              <div className="space-y-4">
                {tutor.upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
                  >
                    <div>
                      <p className="font-bold text-foreground">
                        {session.topic}
                      </p>
                      <p className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Calendar className="w-4 h-4" /> {session.date}
                      </p>
                    </div>
                    <button className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-lg hover:bg-primary/90">
                      Join
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Seasonal Syllabus */}
            <section className="bg-white dark:bg-card border border-border rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold font-heading text-primary mb-4">
                Winter Syllabus
              </h2>
              <div className="relative border-l-2 border-secondary/30 ml-3 space-y-8 py-2">
                {tutor.seasonalSyllabus.map((item, index) => (
                  <div key={index} className="relative pl-8">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-secondary border-4 border-background"></span>
                    <p className="text-sm font-bold text-secondary uppercase tracking-wider mb-1">
                      {item.week}
                    </p>
                    <p className="text-foreground font-medium">{item.topic}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Missed Session Policy */}
            <div className="bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/50 rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-center md:items-start">
              <span className="text-2xl mt-1 text-yellow-600 dark:text-yellow-500">
                <Lightbulb className="w-8 h-8" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-yellow-800 dark:text-yellow-500 mb-1">
                  Missed a session?
                </h3>
                <p className="text-yellow-700 dark:text-yellow-600/90 text-sm">
                  Don't worry! Any missed group session can be rescheduled as a{" "}
                  <strong>1:1 guaranteed personal session</strong> at no extra
                  cost to ensure you never fall behind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border mt-12 bg-muted/20">
        © 2024 TutorHub. All rights reserved.
      </footer>
    </div>
  );
}
