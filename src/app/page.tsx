"use client";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Gallery } from "@/components/Gallery"

import { benefitOne, benefitTwo } from "@/components/data";
import { useRef } from "react";

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
      <div id="contact" className="pt-14">
        <Benefits data={benefitOne} />
      </div>
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}
      <div>
        <SectionTitle title="Organizing Team">
        </SectionTitle>
        <Testimonials />
      </div>
      <div id="gallery" className="pt-14" >
        <SectionTitle preTitle="" title="Gallery">
        </SectionTitle>
        <Gallery />
      </div>
      {/* <Faq /> */}
      <Cta />
    </Container>
  );
}
