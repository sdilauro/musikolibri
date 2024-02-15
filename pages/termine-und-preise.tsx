import React, { useEffect } from 'react';
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import KursCard from "../components/kurs-card";
import { maxWidth } from "../config/config";

export default function TermineUndPreisePage() {
    useEffect(() => {
        document.title = 'Termine & Preise - Musikolibri Bochum';
      }, []);
    const [isSmallScreen] = useMediaQuery(maxWidth);
    return (
        <>
            <Flex className="light" alignItems={isSmallScreen?'center':'self-start'} flexDir={isSmallScreen?'column':'row'}>
            <KursCard
                    name="Eröffnung"
                    startOn="Februar"
                    finishOn="März"
                    price={60}
                    imageSource="/assets/fireworks.png"
                    details={["Gruppe I & II","5 Termine à 45 Min","Inkl. Texte"]}    
                    id={"eroffnung"}
                />
                <KursCard
                    name="Frühling"
                    startOn="April"
                    finishOn="Mai"
                    price={72}
                    imageSource="/assets/fruhling.png"
                    details={["Gruppe I & II","6 Termine à 45 Min","Inkl. Texte"]}    
                    id={"fruhling"}
                />
                <KursCard
                    name="Sommer"
                    startOn="Juni"
                    finishOn="Juli"
                    price={60}
                    imageSource="/assets/sommer.png"
                    details={["Gruppe I & II","5 Termine à 45 Min","Inkl. Texte"]}
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
                    details={["Gruppe I & II","8 Termine à 45 Min","Inkl. Texte"]}
                    id={"herbst"}
                />
                <KursCard
                    name="Winter"
                    startOn="November"
                    finishOn="Dezember"
                    price={84}
                    imageSource="/assets/winter.png"
                    details={["Gruppe I & II","7 Termine à 45 Min","Inkl. Texte"]}
                    id={"winter"}
                />
            </Flex>
        </>
  )
}
