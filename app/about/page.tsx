import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Get to know Bintang, a software engineer passionate about building software and exploring technology.",
};

function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh w-dvw max-w-7xl mx-auto text-foreground">
      <div className="mt-12 p-8">
        <h2 className="text-xl font-extrabold">About Me</h2>
        <p className="font-light">
          Hi, I&apos;m Bintang, a Software Engineer from Indonesia with an
          interest in building software, exploring new technologies, and
          turning ideas into practical solutions. I enjoy working across
          different layers of software development, from crafting user
          interfaces to designing backend systems.
        </p>

        <br />

        <h2 className="text-xl font-extrabold">My Journey</h2>
        <p className="font-light">
          My journey into software development began with curiosity about how
          technology works and how it can solve everyday problems. Over time,
          that curiosity grew into a deeper interest in software engineering,
          system design, and product development.
        </p>
        <p className="font-light">
          Through academic projects, personal experiments, and real-world
          development, I&apos;ve learned to approach problems from both
          technical and practical perspectives. I enjoy learning by building,
          experimenting, and continuously refining the way I develop software.
        </p>

        <br />

        <h2 className="text-xl font-extrabold">What I Do</h2>
        <p className="font-light">
          I focus on full-stack development, building web applications and
          backend systems with an emphasis on maintainability, performance,
          and scalability. I&apos;m particularly interested in modern web
          technologies, API design, database architecture, and AI-powered
          applications.
        </p>

        <h4 className="text-lg font-semibold pt-2">
          My areas of interest include:
        </h4>
        <ul className="font-light list-disc pl-4">
          <li>Frontend Development [React, Next.js, TypeScript]</li>
          <li>Backend Development [Node.js, Bun, Go]</li>
          <li>Database Design & Architecture [PostgreSQL]</li>
          <li>API Development & System Integration</li>
          <li>AI Integration & Application Development</li>
        </ul>

        <br />

        <h2 className="text-xl font-extrabold">My Philosophy</h2>
        <p className="font-light">
          I believe good software engineering goes beyond making things work.
          It&apos;s about understanding the problem, making thoughtful
          technical decisions, and building solutions that are reliable,
          maintainable, and adaptable as requirements evolve.
        </p>
        <p className="font-light">
          I value simplicity, continuous learning, and practical problem
          solving. Rather than following every new trend, I prefer
          understanding the fundamentals and choosing the right tools for
          the problem at hand.
        </p>

        <br />

        <h2 className="text-xl font-extrabold">Beyond Coding</h2>
        <p className="font-light">
          Beyond writing code, I enjoy exploring ideas around technology,
          product development, and entrepreneurship. I&apos;m also interested
          in game development and experimenting with different approaches to
          creating interactive digital experiences.
        </p>

        <br />

        <h2 className="text-xl font-extrabold">Let&apos;s Connect</h2>
        <p className="font-light">
          I&apos;m always interested in connecting with people, exchanging
          ideas, and exploring opportunities to build something meaningful
          together. Whether it&apos;s discussing technology, collaborating on
          a project, or sharing knowledge, feel free to reach out.
        </p>

        <br />

        <p className="italic font-light">
          &quot;Great software starts with understanding the problem, not
          choosing the technology.&quot;
        </p>
      </div>
    </div>
  );
}

export default AboutPage;