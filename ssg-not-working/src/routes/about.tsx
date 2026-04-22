import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage
});

function AboutPage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>About Page</h1>
      <p>This is a client-first page (no SSR).</p>
      <nav style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
        <Link to="/">Index</Link>
        <Link to="/ssg-page">SSG Page</Link>
      </nav>
    </div>
  );
}
