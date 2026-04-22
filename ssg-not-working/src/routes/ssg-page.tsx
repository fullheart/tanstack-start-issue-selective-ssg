import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { staticFunctionMiddleware } from "@tanstack/start-static-server-functions";

const fetchPost = createServerFn({ method: "GET" })
  .middleware([staticFunctionMiddleware])
  .handler(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!res.ok) throw new Error("Failed to fetch post");
    return await res.json();
  });

export const Route = createFileRoute("/ssg-page")({
  ssr: true,
  beforeLoad: async () => {
    const data = await fetchPost();
    return { postData: data };
  },
  component: SsgPage
});

function SsgPage() {
  const { postData } = Route.useRouteContext() as { postData: { title: string; body: string } };
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>SSG Page</h1>
      <p>This page uses selective SSG with staticFunctionMiddleware.</p>
      <div style={{ marginTop: "1rem", padding: "1rem", background: "#f0f0f0", borderRadius: "4px" }}>
        <h2>{postData.title}</h2>
        <p>{postData.body}</p>
      </div>
      <nav style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
        <Link to="/">Index</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}
