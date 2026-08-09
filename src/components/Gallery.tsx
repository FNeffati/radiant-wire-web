import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import work1 from '@/assets/work-1.jpg.asset.json';
import work2 from '@/assets/work-2.jpg.asset.json';
import work3 from '@/assets/work-3.jpg.asset.json';
import work4 from '@/assets/work-4.jpg.asset.json';
import work5 from '@/assets/work-5.jpg.asset.json';
import work6 from '@/assets/work-6.jpg.asset.json';
import work7 from '@/assets/work-7.jpg.asset.json';

/**
 * Swap in your own photos here — just replace the `image` values
 * (imported above) and update the text for each item.
 */
const projects = [
  {
    image: work6.url,
    alt: 'Glazed office pods with linear LED lighting installed along a new corridor',
    category: 'Commercial',
    title: 'Office Fit-Out Lighting',
    description: 'Linear LED and emergency lighting installed throughout a new glazed office suite.',
  },
  {
    image: work5.url,
    alt: 'Walnut office tea point with under-cabinet LED strip lighting and pendant lights',
    category: 'Commercial',
    title: 'Tea Point & Feature Lighting',
    description: 'Pendant, under-cabinet and cove lighting wired and commissioned for a premium tea point.',
  },
  {
    image: work4.url,
    alt: 'Office corridor with recessed ceiling lights and glass partitions during fit-out',
    category: 'Commercial',
    title: 'Corridor Lighting & Power',
    description: 'Ceiling grid lighting, detection and small power completed across a full floor.',
  },
  {
    image: work3.url,
    alt: 'Open-plan workspace lit with suspended black linear LED fittings',
    category: 'Commercial',
    title: 'Open-Plan Workspace',
    description: 'Suspended linear LED scheme delivering even light levels across an open-plan floor.',
  },
  {
    image: work2.url,
    alt: 'Empty office floor with suspended linear lighting and exposed containment overhead',
    category: 'Commercial',
    title: 'Containment & Lighting Install',
    description: 'Cable tray, containment and lighting installed ready for tenant handover.',
  },
  {
    image: work7.url,
    alt: 'Newly fitted washrooms with ceiling lights beside a walnut kitchen unit',
    category: 'Commercial',
    title: 'Washroom & Kitchen Power',
    description: 'Lighting, extract and appliance circuits installed for new washrooms and kitchen.',
  },
  {
    image: work1.url,
    alt: 'Galvanised steel conduit with PIR sensor, isolator and junction boxes on a brick wall',
    category: 'Industrial',
    title: 'Steel Conduit Installation',
    description: 'Neatly set-out galvanised conduit, PIR sensor and switched supply to plant.',
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

        <Carousel opts={{ align: 'start', loop: true, dragFree: true }} className="w-full">
          <CarouselContent className="-ml-6">
            {projects.map((project) => (
              <CarouselItem key={project.title} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <Card
                  className="group h-full overflow-hidden rounded-lg bg-card border-border hover:border-electric/50 hover:shadow-electric transition-all duration-300 hover:-translate-y-1"
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-card border-border hover:bg-electric hover:text-electric-foreground" />
          <CarouselNext className="hidden md:flex -right-4 bg-card border-border hover:bg-electric hover:text-electric-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;

