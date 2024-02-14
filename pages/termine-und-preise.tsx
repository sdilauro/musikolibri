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
                    price={60}
                    imageSource="/assets/fruhling.png"
                    details={["Eröffnungsspezial","Gruppe I & II","5 Termine à 40 Min","Inkl. Texte"]}    
                    id={"fruhling"}
                />
                <KursCard
                    name="Sommer"
                    startOn="April"
                    finishOn="Juni"
                    price={132}
                    imageSource="/assets/sommer.png"
                    details={["Gruppe I & II","11 Termine à 40 Min","Inkl. Texte"]}
                    id={"sommer"}
                />
            </Flex>
            <Flex className="light" alignItems={isSmallScreen?'center':'self-start'} flexDir={isSmallScreen?'column':'row'}>
                <KursCard
                    name="Herbst"
                    startOn="August"
                    finishOn="Oktober"
                    price={96}
                    imageSource="/assets/herbst.png"
                    details={["Gruppe I & II","8 Termine à 40 Min","Inkl. Texte"]}
                    id={"herbost"}
                />
                <KursCard
                    name="Winter"
                    startOn="November"
                    finishOn="Dezember"
                    price={84}
                    imageSource="/assets/winter.png"
                    details={["Gruppe I & II","7 Termine à 40 Min","Inkl. Texte"]}
                    id={"winter"}
                />
            </Flex>
        </>
  )
}
