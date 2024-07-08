import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import {Gallery} from "@/components/Gallery"

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        title="What is Maze Master ?"
      >
        Maze Master is a robotic battle competition taking place in 2024, providing opportunities for school and university students interested in robotics. It involves battles between two robots inside an arena.
      </SectionTitle>

      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}

      <SectionTitle
        title="Organizing Team"
      >
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="" title="Galery">
      </SectionTitle>

      
      <Gallery />
      {/* <Faq /> */}
      <Cta />
    </Container>
  );
}
