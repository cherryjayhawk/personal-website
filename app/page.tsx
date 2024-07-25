import LandingPage from "@/components/section/landing-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home - Mubirastudio',
  description: 'A Software Engineer based in Bandung, Indonesia. See for more information about me.',
}

export default function Home() {
  return (
    <div className="bg-neutral-950">
      <LandingPage />
    </div>
  );
}