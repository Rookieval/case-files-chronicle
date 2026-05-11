import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/detective.html");
  }, []);
  return (
    <div style={{ background: "#0a0f1e", color: "#f0e6f5", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "monospace" }}>
      Loading Murder Next Door…
    </div>
  );
}
