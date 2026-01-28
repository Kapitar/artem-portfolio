import { Github, Linkedin, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Artem Kim</h1>
          <p className="text-xl text-zinc-400 mb-4">
            First-year Computer Science student at Georgia Tech.
          </p>
          <div className="flex gap-4 items-center">
            <a
              href="https://github.com/Kapitar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
              title="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/artem-kim-3a149332b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="/resume.pdf"
              className="hover:text-sky-400 transition"
              title="Resume"
            >
              <FileText size={24} />
            </a>
          </div>
        </div>

        <div className="border border-zinc-700 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-zinc-300 leading-relaxed">
            I am passionate about systems, networking, and high-performance
            computing, and I like building low-latency, performance-critical
            software as a software engineer and quantitative developer.
          </p>
        </div>

        <div className="border border-zinc-700 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-bold text-lg mb-1">
                Quantitative Developer @ Georgia Tech Trading
              </h3>
              <p className="text-zinc-400">
                Building low-latency trading infrastructure in Rust.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">
                Senior Developer @ GT iOS Club
              </h3>
              <p className="text-zinc-400">
                Developed Reverie, an AI-powered dream journaling app using Apple's Foundation Model and CoreML. Shipped to Best Design and Best App awards at Demo Day.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">
                Competitive Programming Instructor
              </h3>
              <p className="text-zinc-400">
                Designed problem sets, curricula, and taught algorithmic topics
                to students across multiple programs.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">
                Program Organizer @ Hack Club
              </h3>
              <p className="text-zinc-400">
                Organized large-scale student programs and hackathons.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-zinc-700 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Reverie</h3>
                  <p className="text-zinc-300 mb-3">
                    Dream journaling app powered by on-device AI that helps you
                    capture, understand, and visualize your dreams.
                  </p>
                </div>
                <a
                  href="https://github.com/gtiosclub/Reverie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition flex-shrink-0"
                >
                  <Github size={20} />
                </a>
              </div>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li className="flex gap-2">
                  <span className="text-sky-400">•</span>
                  <span>
                    Built with Apple's Foundation Model for on-device AI dream
                    completion.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-400">•</span>
                  <span>
                    Integrated CoreML to run Stable Diffusion model on-device
                    for dream visualization and illustration generation.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-400">•</span>
                  <span>
                    Pattern recognition and emotional analysis tied to mood and
                    activity tracking.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-400">•</span>
                  <span>
                    Winner of Best Design and Best App at Georgia Tech iOS Club
                    Demo Day.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Clonium</h3>
              <p className="text-zinc-300 mb-3">
                A multiplayer mobile game with over 800,000 users.
              </p>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li className="flex gap-2">
                  <span className="text-sky-400">•</span>
                  <span>
                    Developed scalable backend infrastructure with Express.js,
                    MongoDB, and Socket.io supporting 1,000+ concurrent users
                    and 400+ concurrent games.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-400">•</span>
                  <span>
                    Implemented ELO rating system and AI bot for balanced
                    gameplay.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-400">•</span>
                  <span>
                    Winner of VK Mini Apps Award and VK Fresh Code 2021 Grant
                    Competition, earning $5,000 in funding.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Guesser</h3>
              <p className="text-zinc-300 mb-3">
                A cultural educational game with 50,000+ tourists exploring city
                attractions through interactive mini-games.
              </p>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li className="flex gap-2">
                  <span className="text-sky-400">•</span>
                  <span>
                    Developed optimized backend with Express.js and MongoDB;
                    integrated 4 external APIs for comprehensive attractions
                    database.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-400">•</span>
                  <span>
                    3rd place out of 609 teams at Code of Saint Petersburg grant
                    competition (VK & city), receiving $9,000+ in funding.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border border-zinc-700 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Competitive Programming</h2>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex gap-3">
              <span className="text-sky-400">•</span>
              <span>
                <strong>Codeforces</strong> Candidate Master
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-400">•</span>
              <span>
                <strong>ICPC Quarterfinal</strong> 7th Place
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-400">•</span>
              <span>
                <strong>Californian Informatics Olympiad</strong> Gold Medalist
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-400">•</span>
              <span>
                <strong>Russian Team Olympiad in Informatics</strong> Winner
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-sky-400">•</span>
              <span>
                <strong>Russian Olympiad in Informatics</strong> Finalist
              </span>
            </li>
          </ul>
        </div>

        <div className="border border-zinc-700 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Hackathons</h2>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex gap-3 items-center">
              <span className="text-sky-400">•</span>
              <span>
                <strong>Emory Hacks</strong> - Rogue Track Winner & Best Use of
                Solana
              </span>
              <a
                href="https://github.com/Kapitar/emoryhacks25"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto hover:text-sky-400 transition"
              >
                <Github size={20} />
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <span className="text-sky-400">•</span>
              <span>
                <strong>CalHacks</strong> - Best Use of DigitalOcean Gradient AI
              </span>
              <a
                href="https://github.com/Kapitar/calhacks25-imo"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto hover:text-sky-400 transition"
              >
                <Github size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
