import { Knot } from "./Knot";

export function VertrauenQuote() {
  return (
    <section className="mx-auto max-w-page px-8 pb-5 pt-12">
      <div className="relative overflow-hidden rounded-[24px] border border-line bg-surface p-12">
        <Knot
          name="triquetra"
          className="pointer-events-none absolute left-[-40px] top-1/2 h-[300px] w-[300px] -translate-y-1/2 text-forest opacity-[0.07]"
        />
        <div className="relative mx-auto max-w-[40em] text-center">
          <p className="font-spectral text-[30px] font-medium italic leading-[1.4] text-forest">
            „Jede Verbindung beruht auf einer persönlichen Begegnung.
            <br />
            Jede Anerkennung auf einer echten Tat."
          </p>
          <p className="mx-auto mt-[22px] max-w-[34em] text-[16.5px] leading-[1.6] text-bodytext">
            So entsteht ein Vertrauensgeflecht, das nicht gekauft, geliked oder erzwungen werden kann — sondern nur
            gelebt. Niemand wird bewertet, niemand gerankt. Sichtbar wird nur, was Menschen selbst sichtbar machen
            möchten.
          </p>
        </div>
      </div>
    </section>
  );
}
