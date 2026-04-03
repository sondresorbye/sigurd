"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const subject = encodeURIComponent("Henvendelse fra bermanblikk.no");
    const body = encodeURIComponent(
      `Navn: ${data.get("name")}\n` +
        `Telefon: ${data.get("phone")}\n` +
        `E-post: ${data.get("email")}\n` +
        `Type prosjekt: ${data.get("project_type")}\n` +
        `Adresse: ${data.get("address")}\n\n` +
        `Melding:\n${data.get("message")}`
    );

    window.location.href = `mailto:post@bermanblikk.no?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Takk for din henvendelse!
        </h3>
        <p className="text-green-700">
          Din e-postklient ble åpnet med meldingen. Vi tar kontakt så snart som
          mulig.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-brand-blue hover:underline text-sm"
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
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ditt navn *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors"
            placeholder="Ola Nordmann"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ditt telefonnummer *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors"
            placeholder="123 45 678"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Din e-post *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors"
          placeholder="din@epost.no"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="project_type"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Type prosjekt
          </label>
          <select
            id="project_type"
            name="project_type"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors bg-white"
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
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Adresse for prosjektet
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors"
            placeholder="Gateadresse, postnummer"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Din melding *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-colors resize-y"
          placeholder="Beskriv ditt prosjekt eller spørsmål..."
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3.5 rounded-md text-base font-semibold transition-colors"
      >
        Send melding
      </button>
    </form>
  );
}
