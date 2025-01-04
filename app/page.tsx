import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-full flex-grow bg-mesh overflow-x-hidden">
      <main className="flex flex-col h-screen w-full py-12 px-6 md:py-24 md:px-20 items-start justify-end">
        <div className="content max-w-screen-lg w-full flex flex-col gap-4 md:gap-5">
          <div className="hero">
            <h1 className="text-display font-bold">DroidFest 2025</h1>
            <div className="text-body font-roboto">
              Kolkata, India - Venue and Date TBD
            </div>
          </div>
          <div className="subtext text-gray text-body">
            Learn, network, and explore—where students and professionals unite
            to shape the future of Kotlin and Android development.
          </div>
          <div className="ctas flex flex-wrap gap-4">
            <Link href="#" className="btn-primary py-2 px-4">
              Get Tickets
            </Link>
            <Link href="#" className="btn-secondary py-2 px-4">
              Apply to Speak
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
