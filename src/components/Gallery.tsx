import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import workConsumerUnit from '@/assets/work-consumer-unit.jpg';
import workRewiring from '@/assets/work-rewiring.jpg';
import workLedOffice from '@/assets/work-led-office.jpg';
import workEvCharger from '@/assets/work-ev-charger.jpg';
import workGardenLighting from '@/assets/work-garden-lighting.jpg';
import workTesting from '@/assets/work-testing.jpg';

/**
 * Swap in your own photos here — just replace the `image` values
 * (imported above) and update the text for each item.
 */
const projects = [
  {
    image: workConsumerUnit,
    alt: 'Electrician installing a new consumer unit with neatly routed cables in a domestic property',
    category: 'Residential',
    title: 'Consumer Unit Upgrade',
    description: 'New 18th Edition board with RCBO protection, fully tested and certified.',
  },
  {
    image: workRewiring,
    alt: 'New electrical cabling run through timber stud walls during a full house rewire',
    category: 'Rewiring',
    title: 'Full House Rewire',
    description: 'Three-bedroom home rewired throughout with minimal disruption.',
  },
  {
    image: workLedOffice,
    alt: 'Suspended office ceiling fitted with recessed LED panel lighting',
    category: 'Commercial',
    title: 'Office LED Retrofit',
    description: 'Replaced fluorescent fittings with LED panels, cutting energy use by 60%.',
  },
  {
    image: workEvCharger,
    alt: 'Wall-mounted EV charging point installed beside a driveway with an electric car',
    category: 'Residential',
    title: 'EV Charger Installation',
    description: '7kW smart charge point installed with dedicated supply and surge protection.',
  },
  {
    image: workGardenLighting,
    alt: 'Illuminated garden and patio at dusk with spotlights and festoon lighting',
    category: 'Lighting',
    title: 'Garden & Patio Lighting',
    description: 'Weatherproof outdoor lighting scheme with timer and app control.',
  },
  {
    image: workTesting,
    alt: 'Electrician testing an industrial distribution board with a multimeter',
    category: 'Commercial',
    title: 'EICR & Testing',
    description: 'Full periodic inspection and report for a light industrial unit.',
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-electric">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of recently completed projects across homes and businesses —
            every job finished to standard, tested and certified.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden rounded-lg bg-card border-border hover:border-electric/50 hover:shadow-electric transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-electric/0 group-hover:bg-electric/20 transition-colors duration-300" />
                <span className="absolute top-3 left-3 rounded-full bg-electric px-3 py-1 text-xs font-semibold text-electric-foreground">
                  {project.category}
                </span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
