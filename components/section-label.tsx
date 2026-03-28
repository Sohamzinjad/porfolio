import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  inverted?: boolean;
};

export function SectionLabel({ children, inverted = false }: SectionLabelProps) {
  return (
    <p className={`eyebrow ${inverted ? "text-paper/55" : ""}`.trim()}>{children}</p>
  );
}
