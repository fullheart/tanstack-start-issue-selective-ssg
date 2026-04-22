import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: IndexPage
});

function IndexPage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Index Page</h1>
      <p>This is a client-first page (no SSR).</p>
      <nav style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
        <Link to="/about">About</Link>
        <Link to="/ssg-page">SSG Page</Link>
      </nav>
    </div>
  );
}
