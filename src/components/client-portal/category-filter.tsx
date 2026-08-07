"use client";

export function CategoryFilter<T extends string>({
  categories,
  active,
  onChange,
  allLabel = "Todas",
}: {
  categories: T[];
  active: T | null;
  onChange: (category: T | null) => void;
  allLabel?: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange(null)}
        className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
          active === null
            ? "border-brand bg-brand text-white"
            : "border-border bg-card text-foreground/70 hover:border-brand/40"
        }`}
      >
        {allLabel}
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            active === category
              ? "border-brand bg-brand text-white"
              : "border-border bg-card text-foreground/70 hover:border-brand/40"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
