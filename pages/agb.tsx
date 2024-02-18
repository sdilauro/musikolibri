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
            <Box backgroundColor={'#f5eee6'} padding='2rem' textColor={'black'} id="widerruf">
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
        </Box>

    )
}