import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Stories | Best Local Service Sites",
  description: "Immersive visual stories about how we transform home service contractor businesses with conversion-first websites and local SEO.",
};

const stories = [
  {
    title: "Invisible to Ringing",
    description: "The cinematic journey of a contractor rising from search invisibility to Local Pack dominance.",
    href: "/stories/invisible-to-ringing",
    poster: "/story-a-poster.png",
    tag: "Case Study"
  },
  {
    title: "A Day in the Life",
    description: "See the 7-day transformation from an empty morning schedule to a fully booked pipeline.",
    href: "/stories/day-in-the-life",
    poster: "/story-b-poster.png",
    tag: "Transformation"
  }
];

export default function StoriesIndex() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Web Stories
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Swipe through our latest case studies and business transformations in a mobile-first, immersive format.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {stories.map((story) => (
            <Link 
              key={story.href}
              href={story.href}
              className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
            >
              <div className="aspect-[9/16] md:aspect-video relative overflow-hidden bg-slate-900">
                <img 
                  src={story.poster} 
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-orange-500 text-white text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    {story.tag}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                    {story.title}
                  </h2>
                  <p className="text-slate-200 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {story.description}
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-8 flex items-center justify-between bg-white">
                <span className="text-slate-900 font-bold flex items-center gap-2">
                  View Story 
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="text-slate-400 text-sm font-medium">AMP Story</span>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-24 bg-slate-900 rounded-[3rem] p-8 md:p-16 text-center text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want your business to be the next story?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              We build the engine. You handle the calls. Let's get your phone ringing in under 7 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#get-started" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-2xl transition-all"
              >
                Get a Free Audit
              </Link>
              <Link 
                href="/demos" 
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl transition-all backdrop-blur-sm"
              >
                See Live Demos
              </Link>
            </div>
          </div>
          {/* Subtle background element */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </section>
      </div>
    </main>
  );
}
