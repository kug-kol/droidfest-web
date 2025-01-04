import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-full flex-grow bg-mesh">
      <main className="flex flex-col h-screen w-full py-12 px-6 md:py-24 md:px-20 items-start justify-end">
        <div className="content max-w-screen-lg flex flex-col gap-4 md:gap-5">
          <div className="hero">
            <h1 className="text-display text-4xl sm:text-5xl lg:text-6xl font-bold">
              DroidFest 2025
            </h1>
            <div className="text-body-spec font-roboto text-sm sm:text-base md:text-lg">
              Kolkata, India - Venue and Date TBD
            </div>
          </div>
          <div className="subtext text-gray text-sm sm:text-base md:text-heading-subtext">
            Learn, network, and explore—where students and professionals unite to shape the future of Kotlin and
            Android development.
          </div>
          <div className="ctas flex flex-wrap gap-4">
  <Link href="/tickets">
    <button className="btn btn-primary text-sm sm:text-base py-2 px-4">
      Get Tickets
    </button>
  </Link>
  <button className="btn btn-secondary text-sm sm:text-base py-2 px-4">
    Apply to Speak
  </button>
</div>

        </div>
      </main>
    </div>
  );
}
