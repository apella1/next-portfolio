export default function HomeIntro() {
  return (
    <section className="flex flex-col space-y-3 lg:space-y-5">
      <h1 className="lg: text-3xl text-2xl font-semibold">
        Hello, I'm John Apella
      </h1>
      <div className="flex flex-col space-y-2 text-lg tracking-tight">
        <p>
          I'm a software engineer with over 4 years of experience working with
          backend and frontend systems.
        </p>
        <p>
          I'm currently focused on information security projects working with
          metasploit and Burp Suite to get practice with offensive tools.
        </p>
        <p>I also work with the cloud, currently focusing on GCP.</p>
      </div>
    </section>
  );
}
