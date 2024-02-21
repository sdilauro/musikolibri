import React, { useEffect } from 'react';
import { Box, Flex, Image, List, ListIcon, ListItem, Text, Tooltip, useMediaQuery } from "@chakra-ui/react";
import { gochi, maxWidth, oswald } from '../config/config';

const addLineBreak = (str: string) =>
    str.split('\n').map((subStr) => {
        return (
            <>
                {subStr}
                <br />
            </>
        );
    });

export default function AGBPage() {
    const [isSmallScreen] = useMediaQuery(maxWidth);
    useEffect(() => {
        document.title = 'AGB - Musikolibri Bochum';
    }, []);
    return (
        <Box>
            <Box className='light' >
                <Text
                    noOfLines={2}
                    bgGradient='linear(to-l, #7A59CA, #E6175B)'
                    bgClip='text'
                    className={gochi.className}
                    fontSize={isSmallScreen ? '4xl' : '5xl'}
                    align={'center'}
                    marginTop='6rem'
                    lineHeight={1}
                    marginInline={'2rem'}
                    paddingBottom='2rem'
                >
                    {isSmallScreen ? 'AGB' : 'Allgemeine Geschäftsbedingungen'}
                </Text>
            </Box>
            <Box backgroundColor={'#f5eee6'} padding='2rem' textColor={'black'} id="allgemeines">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>
                    <Text
                        fontSize={isSmallScreen ? '36' : '48'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        lineHeight={1}
                        >
                        Allgemeines
                    </Text>
                    <Text
                        fontSize={isSmallScreen ? '24' : '36'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        paddingBottom={'1rem'}
                        lineHeight={1}>
                        Geltungsbereich
                    </Text>
                    <Text
                        paddingRight='3rem'
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        `Die vorliegenden allgemeinen Geschäftsbedingungen enthalten die zwischen Ihnen (&apos;Teilnehmer&apos;) und mir, Anabela Chirizola, ausschließlich geltenden Bedingungen bei Vertragsabschlüssen bzw. Kontaktanfragen über meine Website musikolibri.de.
                    </Text>
                    <Text
                        fontSize={isSmallScreen ? '24' : '36'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        paddingBottom={'1rem'}
                        lineHeight={1}>
                        Begriffsbestimmungen
                    </Text>
                    <Text
                        paddingRight='3rem'
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        {addLineBreak("1. Teilnehmer im Sinne dieser AGB sind Verbraucher. \n 2. Verbraucher im Sinne dieser AGB sind natürliche Personen, bei denen der Zweck der Geschäftsabwicklung nicht einer gewerblichen, selbstständigen oder freiberuflichen Tätigkeit zugerechnet werden kann. Grundsätzlich stehen die Kurse allen Kindern offen, die dem Alter der angebotenen Kurse entsprechen. \n 3. Sie können meine AGB auf meine Webseite unter musikolibri.de/agb einsehen. Sie können die AGB außerdem auch ausdrucken oder speichern.")}
                    </Text>
                    <Text
                        fontSize={isSmallScreen ? '24' : '36'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        paddingBottom={'1rem'}
                        lineHeight={1}>
                        Informationen zum Anbieter
                    </Text>
                    <Text
                        paddingRight='3rem'
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        Ausführliche Informationen zu mir finden Sie im Impressum (musikolibri.de/impressum).
                    </Text>
                </Flex>
            </Box>
            <Box className='dark' padding='2rem' textColor={'black'} id="merkmale">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>
                    <Text
                        fontSize={isSmallScreen ? '36' : '48'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        lineHeight={1}
                        >
                        Wesentliche Merkmale meines Angebots
                    </Text>
                    <Text
                        paddingRight='3rem'
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        1. Alle relevanten wesentlichen Merkmale der angebotenen Kurse finden Sie direkt auf der jeweiligen Kursseite auf meiner Website unter musikolibri.de/gruppen. 
                    </Text>
                    <Text
                        paddingRight='3rem'
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        2. Das pädagogische Konzept der Musikkurse von Musikolibri finden Sie unter musikolibri.de/konzept. 
                    </Text>
                    <Text
                        paddingRight='3rem'
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        3. Die Kursstunden finden i.d.R. einmal wöchentlich statt. Die Termine sind unter musikolibri.de/anmeldung einzusehen.
                        
                    </Text>
                    <Text
                        paddingRight='3rem'
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        4. Sollten Sie Fragen zu einem Kurs haben, können Sie sich selbstverständlich jederzeit über das Kontaktformular (musikolibri.de/kontakt) oder per E-Mail an anabela@musikolibri.de an mich wenden.
                    </Text>
                    <Text
                        fontSize={isSmallScreen ? '24' : '36'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        paddingBottom={'1rem'}
                        lineHeight={1}>
                        Begleitung durch Erziehungsberechtigten
                    </Text>
                    <Text
                        paddingRight='3rem'
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        1. Während des Kurses bleibt der/die Erziehungsberechtigte/n oder die erwachsene Begleitperson für das Kind verantwortlich. Kinder ohne Begleitung eines Erziehungsberechtigten dürfen nicht an der Veranstaltung teilnehmen.
                    </Text>
                    <Text
                        paddingRight='3rem'
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        2. Sollte der Unterrichtsablauf durch ein Kind so gestört werden, dass der Unterricht nicht fortgesetzt werden kann, so hat die erwachsene Begleitperson das Kind aus dem Unterrichtsraum zu entfernen und sich mit ihm in einem Nebenraum aufzuhalten, bis das Kind wieder in den Unterricht zurückkehren kann.
                    </Text>   
                </Flex>
            </Box>
            <Box className='light' padding='2rem' textColor={'black'} id="zustandekommen-des-vertrags">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>
                    <Text
                        fontSize={isSmallScreen ? '36' : '48'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        lineHeight={1}
                        >
                        Zustandekommen eines Vertrags zwischen Ihnen und mir
                    </Text>
                    <Text
                        paddingRight='3rem'
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        1. Neuanmeldungen sind jederzeit vor Beginn eines neuen Kurses über das Anmeldeformular (musikolibri.de/anmeldung-form) möglich. Teilnehmende, die bereits am Kurs teilnehmen, haben ein Vorrecht auf Wiederanmeldung.
                    </Text>
                    <Text
                        paddingRight='3rem'
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        2. Der gewünschte Musikkurs wird im Anmeldeformular ausgewählt. Nach Eingabe Ihrer persönlichen Daten geben Sie durch Anklicken des Buttons ́&apos;Absenden&apos; eine verbindliche Anmeldung zu dem von Ihnen ausgewählten Kurs ab. Vor verbindlicher Abgabe der Anmeldung haben Sie die Möglichkeit, die Richtigkeit Ihrer Angaben zu überprüfen und gegebenenfalls zu korrigieren. Ich bestätige den Eingang der Anmeldung unmittelbar nach dem Absenden der Anmeldung durch eine automatische Anmeldebestätigungs-E-Mail. Diese E-Mail stellt jedoch noch keine verbindliche Zusage eines Platzes im Kurs dar, sondern dient lediglich Ihrer Information über die technisch einwandfreie Übermittlung der Anmeldung.
                    </Text>
                    <Text
                        paddingRight='3rem'
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        3. Ein verbindlicher Vertrag kommt erst mit der Zuteilung eines Platzes im Kurs zustande. Über die Platzzuteilung werden Sie in einer weiteren Bestätigungsmail informiert. In dieser E-Mail erhalten Sie zugleich die Rechnung und Informationen über die Zahlungsmodalitäten.
                    </Text>
   
                </Flex>
            </Box>
            <Box className='dark' padding='2rem' textColor={'black'} id="zahlungsabwicklung">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>
                    <Text
                        fontSize={isSmallScreen ? '36' : '48'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        lineHeight={1}
                        >
                        Zahlungsabwicklung
                    </Text>
                    <Text
                        paddingRight='3rem'
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        Ich biete grundsätzlich die nachfolgenden Zahlarten an: Banküberweisung und PayPal.
                    </Text>
                    <Text
                        paddingRight='3rem'
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                            1. Die Höhe der Kursgebühr hängt von der Dauer des gewählten Kurses ab. Diese Informationen finden Sie unter musikolibri.de/termine-und-preise.
                        
                    </Text>
                    <Text
                        paddingRight='3rem'
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        2. Ich sende Ihnen innerhalb von 2 Tagen nach Eingang Ihrer Anmeldung eine separate E-Mail, in der ich Ihnen die Zuteilung eines Platzes im gewählten Kurs ausdrücklich bestätige. In dieser E-Mail teile ich Ihnen meine Bankverbindung und mein PayPal-Konto mit. Bitte überweisen Sie den Gesamtbetrag über die von Ihnen bevorzugte Zahlungsmethode.
                    </Text>
   
                </Flex>
            </Box>
            <Box className='light' padding='2rem' textColor={'black'} id="kundigung">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>
                    <Text
                        fontSize={isSmallScreen ? '36' : '48'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        lineHeight={1}
                        >
                        Kündigung & Nichtteilnahme
                    </Text>
                    <Text
                        fontSize={isSmallScreen ? '24' : '36'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        paddingBottom={'1rem'}
                        lineHeight={1}>
                        Kündigung
                    </Text>
                    <Text
                        paddingRight='3rem'
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        1. Der Kurs kann vom Teilnehmer jederzeit ohne Angabe von Gründen abgebrochen werden. Eine Rückerstattung der Kursgebühren nach Ablauf der Widerrufsfrist ist ausgeschlossen.
                    </Text>
                    <Text
                        paddingRight='3rem'
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        2. Ich behalte mir vor, einen Kurs bei zu geringer Teilnehmerzahl oder aus übergeordneten Gründen abzusagen. Sollte aus diesen Gründen der gesamte Kurs nicht stattfinden können, wird den bereits angemeldeten Teilnehmern die bezahlte Kursgebühr in voller Höhe zurückerstattet.
                    </Text>
                    <Text
                        fontSize={isSmallScreen ? '24' : '36'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        paddingBottom={'1rem'}
                        lineHeight={1}>
                        Nichtteilnahme
                    </Text>
                    <Text
                        paddingRight='3rem'
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        1. Die Nichtteilnahme an einzelnen Kursstunden entbindet nicht von der Zahlung der Kursgebühr. Es besteht grundsätzlich kein Anspruch auf Rückerstattung von Kursgebühren für nicht besuchte Kurse.
                    </Text>
                    <Text
                        paddingRight='3rem'
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        2. Für Kursstunden, die wegen Krankheit meinerseits oder aus vergleichbaren Gründen ausfallen, wird ein Nachholtermin vereinbart. Nur wenn dies aus organisatorischen Gründen nicht möglich ist, hat der Teilnehmer Anspruch auf Rückerstattung der Kursgebühr für die ausgefallenen Stunden. Sollte die Durchführung des Unterrichts in den vorgesehenen Räumlichkeiten aufgrund eines von mir nicht zu vertretenden Notfalls (Rohrbruch, Pandemie u.ä.) vorübergehend nicht möglich sein und von mir keine Alternative (z.B. Durchführung an einem anderen Ort) angeboten werden, besteht ein Anspruch auf Rückerstattung der ausgefallenen Unterrichtsstunden. Weitergehende Ansprüche, insbesondere Schadenersatzansprüche, gleich aus welchem Rechtsgrund, sind in jedem Fall ausgeschlossen.
                    </Text>
                </Flex>

            </Box>
            <Box className='dark' padding='2rem' textColor={'black'} id="widerruf">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>
                    <Text
                        fontSize={isSmallScreen ? '36' : '48'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        lineHeight={1}
                        >
                        Widerrufsbelehrung
                    </Text>
                    <Text
                        fontSize={isSmallScreen ? '24' : '36'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        paddingBottom={'1rem'}
                        lineHeight={1}>
                        Widerrufsrecht
                    </Text>
                    <Text
                        paddingRight='3rem'
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        {addLineBreak("Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. \n Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses. \n Um Ihr Widerrufsrecht auszuüben, müssen Sie mir (Anabela Chirizola, Adresse: Weitmarer Str. 157, 44795 Bochum, E\u2011Mail: anabela@musikolibri.de) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder E\u2011Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. \n Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.")}
                    </Text>
                    <Text
                        fontSize={isSmallScreen ? '24' : '36'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        paddingBottom={'1rem'}
                        lineHeight={1}>
                        Widerrufsfolgen
                    </Text>
                    <Text
                        paddingRight='3rem'
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        {addLineBreak("Wenn Sie diesen Vertrag widerrufen, habe ich Ihnen alle Zahlungen, die ich von Ihnen erhalten habe, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei mir eingegangen ist. Für diese Rückzahlung verwende ich dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.\n Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie mir einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie mich von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.")}
                    </Text>
                    <Text
                        fontSize={isSmallScreen ? '24' : '36'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        paddingBottom={'1rem'}
                        lineHeight={1}>
                        Ausschluss oder vorzeitiges Erlöschen des Widerrufsrechts
                    </Text>
                    <Text
                        paddingRight='3rem'
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        {addLineBreak("Das Widerrufsrecht erlischt vorzeitig, wenn ich die Dienstleistung vollständig erbracht habe und ich mit der Ausführung der Dienstleistung erst begonnen habe, nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben haben und gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung durch mich verlieren.")}
                    </Text>

                </Flex>

            </Box>
            <Box className='light' padding='2rem' textColor={'black'} id="haftung">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>
                    <Text
                        fontSize={isSmallScreen ? '36' : '48'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        lineHeight={1}
                        >
                        Haftung
                    </Text>
                    <Text
                        paddingRight='3rem'
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        1. Ich hafte nicht für Garderobe der Kursteilnehmer oder andere mitgebrachte Gegenstände jeglicher Art.
                    </Text>
                    <Text
                        paddingRight='3rem'
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        2. Die Teilnahme am Kurs geschieht auf eigene Gefahr. Ich hafte nicht für Unfälle auf dem Weg von und zum Kurs. Ich lehne Haftung für jegliche Schäden während gemeinsamer Unternehmungen außerhalb des Kursprogrammes ab. 
                    </Text>
                    <Text
                        paddingRight='3rem'
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        3. Für Schäden jeglicher Art, die der Kursteilnehmer selbst verursacht, haftet dieser unmittelbar gegenüber dem Geschädigten.
                    </Text>
                    <Text
                        paddingRight='3rem'
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        4. Ich hafte nicht für den Unterrichtsausfall durch höhere Gewalt.
                    </Text>
                </Flex>
            </Box>
            <Box className='dark' padding='2rem' textColor={'black'} id="sonstiges">
                <Flex flexDir='column' flex='1' alignItems='top' maxWidth={'900'} width={'100%'} margin={'auto'}>
                    <Text
                        fontSize={isSmallScreen ? '36' : '48'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        lineHeight={1}
                        >
                        Sonstiges
                    </Text>
                    <Text
                        fontSize={isSmallScreen ? '24' : '36'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        paddingBottom={'1rem'}
                        lineHeight={1}>
                        Aufzeichnung
                    </Text>
                    <Text
                        paddingRight='3rem'
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        Das Aufzeichnen der Kursstunden in Ton und Bild ist verboten oder bedarf der ausdrücklichen Zustimmung von mir.
                    </Text>
                    <Text
                        fontSize={isSmallScreen ? '24' : '36'}
                        className={gochi.className}
                        bgGradient='linear(to-l, #7A59CA, #E6175B)'
                        bgClip='text'
                        paddingBottom={'1rem'}
                        lineHeight={1}>
                        Änderung der AGB
                    </Text>
                    <Text
                        paddingRight='3rem'
                        marginBottom={'2rem'}
                        fontSize={isSmallScreen ? '18' : '20'}
                        className={oswald.className}>
                        Ich bin berechtigt, diese AGB - soweit sie in das Vertragsverhältnis mit dem Kunden eingeführt sind - einseitig zu ändern, soweit dies zur Beseitigung nachträglich entstehender Äquivalenzstörungen oder zur Anpassung an veränderte gesetzliche oder technische Rahmenbedingungen erforderlich ist. Ich werde Sie über die entsprechende Anpassung unter Mitteilung des Inhalts der geänderten Bestimmungen informieren. Die Änderung wird Vertragsbestandteil, wenn Sie nicht innerhalb von sechs Wochen nach Zugang der Änderungsmitteilung der Einbeziehung in das Vertragsverhältnis schriftlich oder in Textform widersprechen.
                    </Text>
                </Flex>

            </Box>
        </Box>

    )
}