import PageContainer from "@/components/section/page-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Get to know me as a developer who loves building digital experiences.",
};

function AboutPage() {
  return (
    <div className="flex flex-col min-h-dvh w-dvw max-w-7xl mx-auto text-foreground">
      <div className="mt-12 p-8">
        <h2 className="text-xl font-extrabold">About Me</h2>
        <p className="font-light">
          Hi, I'm Bintang, a passionate Software Engineer based in the vibrant
          city of Bandung, Indonesia. I love turning ideas into digital reality
          through clean, efficient code.
        </p>
        <br />
        <h2 className="text-xl font-extrabold">My Journey</h2>
        <p className="font-light">
          My journey in software development started with curiosity and has
          evolved into a genuine passion for creating meaningful digital
          experiences. I believe that great software is not just about writing
          code, but about solving real problems and making people's lives
          easier.
        </p>
        <br />
        <h2 className="text-xl font-extrabold">What I Do</h2>
        <p className="font-light">
          I specialize in full-stack development, crafting both the frontend
          experiences that users interact with and the backend systems that
          power them. My approach combines technical expertise with creative
          problem-solving to deliver solutions that are both functional and
          user-friendly.
        </p>
        <h4 className="text-lg font-semibold pt-2">
          My areas of expertise include:
        </h4>
        <ul className="font-light list-disc pl-4">
          <li>
            Frontend Development (React.js, Next.js, JavaScript, HTML/CSS)
          </li>
          <li>Backend Development (Node.js, Python, PHP)</li>
          <li>Database Design & Management</li>
          <li>API Development & Integration</li>
        </ul>
        <br />
        <h2 className="text-xl font-extrabold">My Philosophy</h2>
        <p className="font-light">
          I believe in writing code that is not only functional but also
          maintainable and scalable. Clean code is a love letter to the future
          developer who will work on your project – and that developer might be
          you!
        </p>
        <p className="font-light">
          Every project is an opportunity to learn something new and push the
          boundaries of what's possible. I'm constantly exploring new
          technologies and methodologies to stay at the forefront of the
          ever-evolving tech landscape.
        </p>
        <br />
        <h2 className="text-xl font-extrabold">Beyond Code</h2>
        <p className="font-light">
          When I'm not coding, I enjoy nighttime photography and writing. I'm
          drawn to capturing quiet moments in urban spaces—empty streets,
          neon-lit corners, the interplay of light and shadow. Photography helps
          me find beauty in solitude and minimalism. Writing is equally
          important to me, whether I'm documenting experiences on my blog or
          crafting short stories. It's where I process thoughts and connect with
          others through shared experiences, bridging my technical and creative
          sides.
        </p>
        <br />
        <h2 className="text-xl font-extrabold">Let's Connect</h2>
        <p className="font-light">
          I'm always open to discussing new opportunities, collaborating on
          interesting projects, or simply having a chat about technology. Feel
          free to reach out through any of my social channels. I'd love to hear
          from you!
        </p>
        <br />
        <p className="italic font-light">
          "The best way to predict the future is to create it."
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
