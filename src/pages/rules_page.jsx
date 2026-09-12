import { Check, ShieldCheck } from "lucide-react";
import { ruleCategories } from "../data/rulesData";
import "./rules_page.css";

export default function RulesPage() {
  return (
    <section className="rules-page" aria-labelledby="rules-title">
      <div className="rules-wrap">
        <header className="rules-hero">
          <p className="rules-eyebrow"><ShieldCheck size={16} /> Semaphore Fest 2026</p>
          <h1 id="rules-title">General rules</h1>
          <p>These guidelines apply to every participant. For individual event requirements, open the relevant event on the Events page.</p>
        </header>
        <div className="rules-notice">
          <ShieldCheck size={20} aria-hidden="true" />
          <span>Please read these rules before completing your participation.</span>
        </div>
        <div className="rules-grid">
          {ruleCategories.map((category) => (
            <article className="rules-card" key={category.id}>
              <h2>{category.title}</h2>
              <ul>
                {category.rules.map((rule) => (
                  <li key={rule}><Check size={17} aria-hidden="true" /><span>{rule}</span></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
