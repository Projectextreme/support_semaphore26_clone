import { useMemo, useState } from "react";
import { ChevronDown, ChevronUp, CircleHelp, Search } from "lucide-react";
import "./faq-section.css";

export function FaqSection({ faqData, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All FAQs");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState("faq-01");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleFaqs = useMemo(() => faqData.filter((faq) => {
    const categoryMatches = selectedCategory === "All FAQs" || faq.category === selectedCategory;
    const searchMatches = !normalizedQuery || `${faq.question} ${faq.answer}`.toLowerCase().includes(normalizedQuery);
    return categoryMatches && searchMatches;
  }), [faqData, selectedCategory, normalizedQuery]);

  return (
    <section className="faq-page" aria-labelledby="faq-title">
      <div className="faq-wrap">
        <header className="faq-header">
          <p className="faq-eyebrow"><CircleHelp size={16} /> Semaphore Fest 2026</p>
          <h1 id="faq-title">Frequently asked questions</h1>
          <p>Quick answers about registration, participation, and prizes. For official requirements, visit the Rules page.</p>
        </header>
        <label className="faq-search">
          <Search size={20} aria-hidden="true" />
          <span className="sr-only">Search frequently asked questions</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search questions" />
        </label>
        <div className="faq-categories" aria-label="FAQ categories">
          {categories.map((category) => <button type="button" className={selectedCategory === category ? "active" : ""} key={category} onClick={() => setSelectedCategory(category)}>{category}</button>)}
        </div>
        <div className="faq-list">
          {visibleFaqs.length ? visibleFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return <article className="faq-item" key={faq.id}>
              <button type="button" aria-expanded={isOpen} onClick={() => setOpenId(isOpen ? null : faq.id)}>
                <span>{faq.question}</span>{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {isOpen && <p>{faq.answer}</p>}
            </article>;
          }) : <p className="faq-empty">No matching questions found. Try another search or category.</p>}
        </div>
      </div>
    </section>
  );
}
