import { EmailIcon, MessengerIcon, TelegramIcon, WhatsappIcon } from "@/public/icons";
import Image from "next/image";
import Link from "next/link";

export default function HomeHelp() {
  return (
    <div className="container help">
      <div className="row">
        <div className="col col-1">
          <Image src="/homepage/help.png" width={400} height={400} alt="help" />
        </div>
        <div className="col col-2">
          <h2 className="title">Live-Helpdesk</h2>
          <div className="buttons">
            <Link href="#" className="btn btn_border">
              <TelegramIcon />
              Telegram
            </Link>
            <Link href="#" className="btn btn_border">
              <MessengerIcon />
              Messenger
            </Link>
            <Link href="#" className="btn btn_border">
              <WhatsappIcon />
              Whatsapp
            </Link>
            <Link href="#" className="btn btn_border">
              <EmailIcon />
              E-mail
            </Link>
          </div>
          <p>Keine Roboter und keine automatischen Antworten - stellen Sie eine Frage und Sie erhalten eine schnelle Antwort von einem Menschen</p>
          <p>Treten Sie unseren sozialen Netzwerken bei! <br/> Hier finden Sie die neuesten Nachrichten und <strong>Rabatte und Sonderangebote</strong></p>
          <div className="flex justify-center gap-[24px] -mt-4">
            <Link href="#">
              <Image src="/social/facebook.svg" width={40} height={40} alt="facebook" />
            </Link>
            <Link href="#">
              <Image src="/social/instagram.svg" width={40} height={40} alt="instagram" />
            </Link>
            <Link href="#">
              <Image src="/social/telegram.svg" width={40} height={40} alt="telegram" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text">
        <h3>Brauche ich eine Putzfrau?</h3>
        <p>Ordnung halten gehört zu den Tätigkeiten, die zwar notwendig, aber nicht immer gern gesehen sind. Wir kommen oft müde nach der Arbeit zurück und verschieben das Putzen auf später, und wenn wir endlich zur Sache kommen, dauert es viele Stunden. Manchmal wissen wir nicht, mit welchen Reinigungsmitteln wir Verschmutzungen wirksam beseitigen sollen, ohne unsere Gesundheit oder die Umwelt zu schädigen. Noch mühsamer ist die Reinigung nach Bau- oder Renovierungsarbeiten oder die Behandlung großer Räume, einschließlich Büroflächen. Oft haben wir es mit Schmutz und Flecken zu tun, die mit häuslichen Methoden schwer zu reinigen sind. Besonders mühsam ist beispielsweise das Waschen von Polstern oder Teppichen. Am besten vertrauen Sie diese Art von Arbeiten unserer Putzfrau an, die wissen, wie man Schmutz entfernt und welche Mittel zu verwenden sind.</p>
        <h3>Was bietet die Reinigung Berlin an?</h3>
        <p>In unserem Angebot finden Sie die Reinigung der Wohnung, einschließlich Bad und Küche, aber Sie können auch zusätzliche Dienstleistungen wie Fenster putzen, Backofen reinigen oder Geschirr spülen bestellen. Wenn das Bügeln von Kleidung eine Herausforderung für Sie ist, werden wir es auch für Sie tun! Das Grundreinigungspaket umfasst das Wegwerfen und Sortieren von Müll, das Staubsaugen und Waschen von Böden, das Abwischen von Staub von Möbeln sowie das Reinigen von Spiegeln und anderen Glasoberflächen. Das gleiche Schema gilt sowohl für die Zimmer als auch für Küche und Bad. Auf einmal mag es scheinen, dass sich die Bestellung eines Reinigungsdienstes nur an Unternehmen richtet und viel Geld kostet. Clean Whale bietet Dienstleistungen für jede Art von Kunden an und ist auf deren Bedürfnisse zugeschnitten. Die Buchung der Reinigung ist einfach und der Service ist preiswert. Schon während Sie unsere Seite mit der Liste der angebotenen Dienstleistungen durchblättern, können Sie die Preise sehen, die fest sind. Unser Service wird die Reservierung so schnell wie möglich bearbeiten und das Reinigungspersonal erscheint zur vereinbarten Zeit vor Ort.</p>
        <h3>Profesionelle Reinigung Berlin in deinem Haus</h3>
        <p>Wir garantieren Zufriedenheit mit unseren Dienstleistungen! Unsere Kunden schätzen unsere Professionalität und Pünktlichkeit. Wir beschäftigen hochqualifizierte Mitarbeiter, die jeden Auftrag sorgfältig ausführen. Das Aufgeben einer Bestellung ist einfach und dauert nur wenige Augenblicke. Durch die Beauftragung unseres Unternehmens mit der Putzfrau Berlin gewinnen Sie Zeit, die Sie für Erholung oder Unterhaltung nutzen können. Indem Sie die Reinigung Profis anvertrauen, können Sie sicher sein, dass die Arbeit präzise ausgeführt wird und Sie sie nicht nach uns korrigieren müssen. Gründliches und regelmäßiges Einsprühen und Reinigen von Möbeln mit Teppichen hält diese länger in gutem Zustand. Wir bieten Rabatte und Werbeaktionen für unsere Stammkunden. Unser Kundenservice ist rund um die Uhr erreichbar und beantwortet gerne alle Ihre Fragen. Kontaktieren Sie uns gerne über das Formular auf unserer Website.</p>
      </div>
    </div>
  )
}