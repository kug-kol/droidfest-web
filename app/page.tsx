export default function Home() {
  return (
    <div className="flex flex-col h-full flex-grow bg-mesh">
      <main className={`flex flex-col h-screen w-full py-24 px-20 items-start justify-end`}>
        <div className="content max-w-screen-lg flex flex-col gap-5">
          <div className="hero">
            <h1 className="text-display">
              DroidFest 2025
            </h1>
            <div className="text-body-spec font-roboto">Kolkata, India - Venue and Date TBD</div>
          </div>
          <div className="subtext text-gray text-heading-subtext">
            Learn, network, and explore— where students and professionals unite to shape the future of Kotlin and
            Android development.
          </div>
          <div className="ctas flex gap-4">
            <button className="btn btn-primary">Get Tickets</button>
            <button className="btn btn-secondary">Apply to Speak</button>
          </div>
        </div>
      </main>
    </div>
  );
}
