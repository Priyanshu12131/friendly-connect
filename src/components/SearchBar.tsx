// SearchBar.tsx
import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";

const searchIndex = [
  { keyword: "projects", sectionId: "projects" },
  { keyword: "education", sectionId: "education" },
  { keyword: "skills", sectionId: "skills" },
  { keyword: "experience", sectionId: "experience" },
  { keyword: "vlsi", sectionId: "projects" },
  { keyword: "react", sectionId: "projects" },
  { keyword: "python", sectionId: "projects" },
  // Add more as needed
];

function normalize(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]/gi, "");
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<typeof searchIndex>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") setShowDropdown(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (query.trim()) {
        const q = normalize(query);
        const matches = searchIndex.filter((item) =>
          normalize(item.keyword).includes(q)
        );
        setSuggestions(matches);
        setShowDropdown(true);
      } else {
        setSuggestions([]);
        setShowDropdown(false);
      }
    }, 300);
    return () => debounceRef.current && clearTimeout(debounceRef.current);
  }, [query]);

  const handleSelect = (item: typeof searchIndex[0]) => {
    setShowDropdown(false);
    setQuery("");
    const el = document.getElementById(item.sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      el.classList.add("search-highlight");
      setTimeout(() => el.classList.remove("search-highlight"), 1200);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown) return;
    if (e.key === "ArrowDown") {
      setHighlighted((h) => Math.min(h + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      setHighlighted((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter" && highlighted >= 0) {
      handleSelect(suggestions[highlighted]);
    }
  };

  return (
    <div className="relative w-full max-w-xs">
      <div className="flex items-center bg-card/80 rounded-full shadow-md px-3 py-2 focus-within:ring-2 focus-within:ring-primary/60 transition-all">
        <Search className="w-5 h-5 text-muted-foreground mr-2" />
        <input
          ref={inputRef}
          type="text"
          className="bg-transparent outline-none w-full text-foreground placeholder:text-muted-foreground rounded-full"
          placeholder="Search... (Projects, Skills, etc)"
          value={query}
          aria-label="Global search bar"
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
          onKeyDown={handleKeyDown}
        />
      </div>
      {showDropdown && (
        <ul className="absolute left-0 right-0 mt-2 bg-card/90 rounded-xl shadow-xl z-50 animate-fade-in max-h-60 overflow-auto border border-border/40">
          {suggestions.length === 0 ? (
            <li className="px-4 py-3 text-muted-foreground">No results found</li>
          ) : (
            suggestions.map((item, i) => (
              <li
                key={item.keyword}
                className={`px-4 py-3 cursor-pointer transition-all select-none ${
                  highlighted === i ? "bg-primary/20 text-primary" : "hover:bg-primary/10"
                }`}
                onMouseDown={() => handleSelect(item)}
                onMouseEnter={() => setHighlighted(i)}
                aria-selected={highlighted === i}
              >
                {item.keyword}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
