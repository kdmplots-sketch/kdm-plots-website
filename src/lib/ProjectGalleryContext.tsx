import React from "react";
import type { Project } from "@/lib/types";

// ─────────────────────────────────────────────────────────────────────────────
// Project Gallery Context — lets any project card open the shared
// multi-image lightbox for that project.
// ─────────────────────────────────────────────────────────────────────────────
const ProjectGalleryCtx = React.createContext<{ open: (project: Project) => void } | null>(null);

export function ProjectGalleryProvider({
  children,
  render,
}: {
  children: React.ReactNode;
  render: (project: Project | null, close: () => void) => React.ReactNode;
}) {
  const [project, setProject] = React.useState<Project | null>(null);
  const value = React.useMemo(() => ({ open: (p: Project) => setProject(p) }), []);
  return (
    <ProjectGalleryCtx.Provider value={value}>
      {children}
      {render(project, () => setProject(null))}
    </ProjectGalleryCtx.Provider>
  );
}

export function useProjectGallery() {
  const ctx = React.useContext(ProjectGalleryCtx);
  if (!ctx) throw new Error("useProjectGallery must be used within ProjectGalleryProvider");
  return ctx;
}
