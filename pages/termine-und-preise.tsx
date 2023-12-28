import { Box } from "@chakra-ui/react";
import KursCard from "../components/kurs-card";

export default function TermineUndPreisePage() {
    return (
        <>

            <Box className="light" alignItems={"self-start"}>
                <KursCard
                    name="Frühling"
                    startOn="Februar"
                    finishOn="März"
                    price={80}
                    imageSource="/assets/fruhling.png"
                    details={["Gruppe I & II","8 Termine à 40 Min","Inkl. Texte","Letzte Stunde Osterspezial"]}    
                    id={1}
                />
                <KursCard
                    name="Sommer"
                    startOn="April"
                    finishOn="Juni"
                    price={110}
                    imageSource="/assets/sommer.png"
                    details={["Gruppe I & II","11 Termine à 40 Min","Inkl. Texte"]}
                    id={2}
                />
            </Box>
            <Box className="light">
                <KursCard
                    name="Herbost"
                    startOn="August"
                    finishOn="Oktober"
                    price={80}
                    imageSource="/assets/herbst.png"
                    details={["Gruppe I & II","8 Termine à 40 Min","Inkl. Texte"]}
                    id={3}
                />
                <KursCard
                    name="Winter"
                    startOn="November"
                    finishOn="Dezember"
                    price={70}
                    imageSource="/assets/winter.png"
                    details={["Gruppe I & II","7 Termine à 40 Min","Inkl. Texte"]}
                    id={4}
                />
            </Box>
        </>
  )
}
