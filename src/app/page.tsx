"use client";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Cta } from "@/components/Cta";
import { Gallery } from "@/components/Gallery"

import { benefitOne } from "@/components/data";


export default function Home() {

  return (
    <Container>
      <div id="home" className="pt-14">
        <Hero />
      </div>
      <div id="about" className="pt-14">
        <SectionTitle title="What is Maze Master ?">
          Maze Master is a robotic battle competition taking place in 2024, providing opportunities for school and university students interested in robotics. It involves battles between two robots inside an arena.
        </SectionTitle>
      </div>
      <div id="benifits" className="pt-14">
        <Benefits data={benefitOne} />
      </div>
      <div id="contact" className="pt-14">
        <SectionTitle title="Organizing Team">
        </SectionTitle>
        <Testimonials />
      </div>
      <div id="gallery" className="pt-14" >
        <SectionTitle preTitle="" title="Gallery">
        </SectionTitle>
        <Gallery />
      </div>

      <Cta />
    </Container>
  );
}
