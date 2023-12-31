import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import KursCard from "../components/kurs-card";
import { maxWidth } from "../config/config";

export default function TermineUndPreisePage() {
    const [isSmallScreen] = useMediaQuery(maxWidth);
    return (
        <>
            <Flex className="light" alignItems={isSmallScreen?'center':'self-start'} flexDir={isSmallScreen?'column':'row'}>
                <KursCard
                    name="Frühling"
                    startOn="Februar"
                    finishOn="März"
                    price={80}
                    imageSource="/assets/fruhling.png"
                    details={["Gruppe I & II","8 Termine à 40 Min","Inkl. Texte","Letzte Stunde Osterspezial"]}    
                    id={"fruhling"}
                />
                <KursCard
                    name="Sommer"
                    startOn="April"
                    finishOn="Juni"
                    price={110}
                    imageSource="/assets/sommer.png"
                    details={["Gruppe I & II","11 Termine à 40 Min","Inkl. Texte"]}
                    id={"sommer"}
                />
            </Flex>
            <Flex className="light" alignItems={isSmallScreen?'center':'self-start'} flexDir={isSmallScreen?'column':'row'}>
                <KursCard
                    name="Herbost"
                    startOn="August"
                    finishOn="Oktober"
                    price={80}
                    imageSource="/assets/herbst.png"
                    details={["Gruppe I & II","8 Termine à 40 Min","Inkl. Texte"]}
                    id={"herbost"}
                />
                <KursCard
                    name="Winter"
                    startOn="November"
                    finishOn="Dezember"
                    price={70}
                    imageSource="/assets/winter.png"
                    details={["Gruppe I & II","7 Termine à 40 Min","Inkl. Texte"]}
                    id={"winter"}
                />
            </Flex>
        </>
  )
}
