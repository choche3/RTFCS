import Hero from "./Hero";
import CompanyOverView from "./CompanyOverView";
import Experience from "./Experience";
import MissionStatement from "./MissionStatement";
import Assurance from "./Assurance";

export default function AboutPage() {
    return(
        <>
            <Hero />
            <CompanyOverView />
            <Experience />
            <Assurance />
            <MissionStatement />
        </>
    )
}