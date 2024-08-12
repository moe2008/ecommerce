import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import Footer from "../components/UI/Footer";

const Agb = () => {
  return (
    <React.Fragment>
      <Flex
      padding={8}
        minHeight="100vh"
        width="100%"
        flexDirection={"column"}
        alignItems="center"
        gap={5}
      >
        <Heading>Allgemeine Geschäftsbedingungen</Heading>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
            textAlign: "center",
            gap: "2rem",
          }}
        >
          <section>
            <h2 style={{fontWeight: "bold"}}>§1 Geltung gegenüber Unternehmern und Begriffsdefinitionen</h2>
            <p>
              Die nachfolgenden Allgemeinen Geschäftsbedingungen gelten für alle
              Lieferungen zwischen uns und einem Verbraucher in ihrer zum
              Zeitpunkt der Bestellung gültigen Fassung.
            </p>
            <p>
              Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu
              Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch
              ihrer selbständigen beruflichen Tätigkeit zugerechnet werden
              können (§ 13 BGB).
            </p>
          </section>
          <section>
            <h2 style={{fontWeight: "bold"}}>
              §2 Zustandekommen eines Vertrages, Speicherung des Vertragstextes
            </h2>
            <p>
              Die folgenden Regelungen über den Vertragsabschluss gelten für
              Bestellungen über unseren Internetshop{" "}
              <a href="https://www.dierker-parkett.de">
                www.dierker-parkett.de
              </a>
              .
            </p>
            <p>
              <strong>
                Im Falle des Vertragsschlusses kommt der Vertrag mit Dierker
                Parkett, Martin Dierker, Lerchenstraße 34, D-49577 Kettenkamp,
                zustande.
              </strong>
            </p>
            <p>Die Bestellung erfolgt in folgenden Schritten:</p>
            <ol>
              <li>Auswahl der gewünschten Ware</li>
              <li>Bestätigen durch Anklicken der Buttons „in den Warenkorb“</li>
              <li>Prüfung der Angaben im Warenkorb</li>
              <li>Betätigung des Buttons „Bestellen“</li>
              <li>Weiterleitung "zur Kasse"</li>
              <li>Erneute Prüfung und Eingabe der Kontaktdaten</li>
            </ol>
            <p>
              Speicherung des Vertragstextes bei Bestellungen über unseren
              Internetshop: Wir senden Ihnen die Bestelldaten und unsere AGB per
              E-Mail zu. Die AGB können Sie jederzeit auch unter{" "}
              <a href="https://www.dierker-parkett.de/agb">
                https://www.dierker-parkett.de/agb
              </a>{" "}
              einsehen. Ihre Bestelldaten sind aus Sicherheitsgründen nicht mehr
              über das Internet zugänglich.
            </p>
          </section>
          <section>
            <h2 style={{fontWeight: "bold"}}>§3 Preise, Versandkosten, Zahlung, Fälligkeit</h2>
            <p>
              Die angegebenen Preise enthalten die gesetzliche Umsatzsteuer und
              sonstige Preisbestandteile. Hinzu kommen etwaige Versandkosten.
            </p>
            <p>
              Der Verbraucher hat die Möglichkeit der Zahlung per PayPal,
              Kreditkarte (Visa, Mastercard, American Express).
            </p>
          </section>
          <section>
            <h2 style={{fontWeight: "bold"}}>§4 Lieferung</h2>
            <p>
              Sofern wir dies in der Produktbeschreibung nicht deutlich anders
              angegeben haben, sind alle von uns angebotenen Artikel sofort
              versandfertig. Die Lieferung erfolgt hier spätestens innerhalb von
              5 Werktagen.
            </p>
            <p>
              Die Gefahr des zufälligen Untergangs und der zufälligen
              Verschlechterung der verkauften Sache geht auch beim
              Versendungskauf erst mit der Übergabe der Sache an den Käufer auf
              diesen über.
            </p>
          </section>
          <section>
            <h2 style={{fontWeight: "bold"}}>§5 Eigentumsvorbehalt</h2>
            <p>
              Wir behalten uns das Eigentum an der Ware bis zur vollständigen
              Bezahlung des Kaufpreises vor.
            </p>
          </section>
          <section>
            <h2 style={{fontWeight: "bold"}}>§6 Widerrufsrecht des Kunden als Verbraucher:</h2>
            <strong>Widerrufsrecht für Verbraucher</strong>
            <p>
              Verbrauchern steht ein Widerrufsrecht nach folgender Maßgabe zu,
              wobei Verbraucher jede natürliche Person ist, die ein
              Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer
              gewerblichen noch ihrer selbständigen beruflichen Tätigkeit
              zugerechnet werden können:
            </p>
            <h2 style={{fontWeight: "bold"}}>Widerrufsbelehrung</h2>
            <strong>Widerrufsrecht</strong>
            <p>
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
              diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn
              Tage, ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter,
              der nicht der Beförderer ist, die Waren in Besitz genommen haben
              bzw. hat. Um Ihr Widerrufsrecht auszuüben, müssen Sie uns Dierker
              Parkett Martin Dierker Lerchenstraße 34 D-49577 Kettenkamp E-Mail
              mdierker0@gmail.com mittels einer eindeutigen Erklärung (z.B. ein
              mit der Post versandter Brief, Telefax oder E-Mail) über Ihren
              Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können
              dafür das beigefügte Muster-Widerrufsformular verwenden, das
              jedoch nicht vorgeschrieben ist.
            </p>
            <strong>Widerrufsfolgen</strong>
            <p>
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle
              Zahlungen, die wir von Ihnen erhalten haben, einschließlich der
              Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich
              daraus ergeben, dass Sie eine andere Art der Lieferung als die von
              uns angebotene, günstigste Standardlieferung gewählt haben),
              unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
              zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses
              Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden
              wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen
              Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde
              ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen
              wegen dieser Rückzahlung Entgelte berechnet. Wir können die
              Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten
              haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren
              zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt
              ist. Sie haben die Waren unverzüglich und in jedem Fall spätestens
              binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf
              dieses Vertrages unterrichten, an uns zurückzusenden oder zu
              übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf
              der Frist von vierzehn Tagen absenden. Sie tragen die
              unmittelbaren Kosten der Rücksendung der Waren. Ende der
              Widerrufsbelehrung
            </p>
          </section>
          <section>
            <h2 style={{fontWeight: "bold"}}>§7 Widerrufsformular</h2>
            <p>
              (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte
              dieses Formular aus und senden Sie es zurück.) An : Dierker
              Parkett Martin Dierker Lerchenstraße 34 D-49577 Kettenkamp E-Mail
              mdierker0@gmail.com Hiermit widerrufe(n) ich/wir (*) den von
              mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden
              Waren (*)/die Erbringung der folgenden Dienstleistung (*)
              _____________________________________________________ Bestellt am
              (*)/erhalten am (*) __________________ Name des/der Verbraucher(s)
              _____________________________________________________ Anschrift
              des/der Verbraucher(s)
              _____________________________________________________ Unterschrift
              des/der Verbraucher(s) (nur bei Mitteilung auf Papier)
              __________________ Datum __________________ (*) Unzutreffendes
              streichen.
            </p>
          </section>
          <section>
            <h2 style={{fontWeight: "bold"}}>§8 Gewährleistung</h2>
            <p>Es gelten die gesetzlichen Gewährleistungsregelungen.</p>
          </section>
          <section>
            <h2 style={{fontWeight: "bold"}}>§9 Vertragssprache</h2>
            <p>Als Vertragssprache steht ausschließlich Deutsch zur Verfügung.</p>
          </section>
        </div>
      </Flex>
      <Footer bgColor="#343434" fontColor="#F3F3F3" />
    </React.Fragment>
  );
};

export default Agb;
