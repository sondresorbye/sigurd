"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const projectType = (data.get("project_type") as string) || "";
    const projectLabel = projectType
      ? form.querySelector<HTMLSelectElement>("#project_type")?.selectedOptions[0]
          ?.text || projectType
      : "Generell";
    const subject = encodeURIComponent(
      `Henvendelse vedrørende ${projectLabel}`
    );
    const body = encodeURIComponent(
      `Navn: ${data.get("name")}\n` +
        `Telefon: ${data.get("phone")}\n` +
        `Type prosjekt: ${data.get("project_type")}\n` +
        `Adresse: ${data.get("address")}\n\n` +
        `Melding:\n${data.get("message")}`
    );

    window.location.href = `mailto:post@bermanblikk.no?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-success-light border-l-[3px] border-success p-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-success/10 mb-4">
          <svg
            className="w-6 h-6 text-success"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold text-success mb-2">
          Takk for din henvendelse!
        </h3>
        <p className="text-success/80">
          Din e-postklient ble åpnet med meldingen. Vi tar kontakt så snart som
          mulig.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-copper hover:text-copper-dark text-sm font-medium transition-colors duration-150"
        >
          Send en ny melding
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-mono font-bold uppercase tracking-widest text-zinc mb-2"
          >
            Ditt navn *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-white border border-stone-dark focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all duration-150 text-charcoal placeholder:text-zinc-light"
            placeholder="Ola Nordmann"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-mono font-bold uppercase tracking-widest text-zinc mb-2"
          >
            Ditt telefonnummer *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 bg-white border border-stone-dark focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all duration-150 text-charcoal placeholder:text-zinc-light"
            placeholder="123 45 678"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="project_type"
            className="block text-xs font-mono font-bold uppercase tracking-widest text-zinc mb-2"
          >
            Type prosjekt
          </label>
          <select
            id="project_type"
            name="project_type"
            className="w-full px-4 py-3 bg-white border border-stone-dark focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all duration-150 text-charcoal"
          >
            <option value="">Velg type...</option>
            <option value="takstein">Takstein / Skiferstein</option>
            <option value="takplater">Takplater / Båndtekking</option>
            <option value="beslag">Beslagsarbeid</option>
            <option value="ventilasjon">Ventilasjon</option>
            <option value="takrenner">Takrenner / Nedløpsrør</option>
            <option value="reparasjon">Takreparasjon</option>
            <option value="lekkasje">Lekkasjesøking</option>
            <option value="ettersyn">Ettersyn / Tilstandsrapport</option>
            <option value="annet">Annet</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-xs font-mono font-bold uppercase tracking-widest text-zinc mb-2"
          >
            Adresse for prosjektet
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full px-4 py-3 bg-white border border-stone-dark focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all duration-150 text-charcoal placeholder:text-zinc-light"
            placeholder="Gateadresse, postnummer"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-mono font-bold uppercase tracking-widest text-zinc mb-2"
        >
          Din melding *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-white border border-stone-dark focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all duration-150 text-charcoal placeholder:text-zinc-light resize-y"
          placeholder="Beskriv ditt prosjekt eller spørsmål..."
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto bg-copper hover:bg-copper-light text-slate-deep px-8 py-3.5 text-base font-bold tracking-wide uppercase transition-all duration-150 chamfer-br"
      >
        Send melding
      </button>
    </form>
  );
}
