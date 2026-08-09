import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import workConduitInstall from '@/assets/work-conduit-install.jpg';
import workOfficeLinearLighting from '@/assets/work-office-linear-lighting.jpg';
import workOfficeFitout from '@/assets/work-office-fitout.jpg';
import workCorridorLighting from '@/assets/work-corridor-lighting.jpg';
import workTeaPointLighting from '@/assets/work-tea-point-lighting.jpg';
import workMeetingPods from '@/assets/work-meeting-pods.jpg';
import workWashroomKitchen from '@/assets/work-washroom-kitchen.jpg';

/**
 * Swap in your own photos here — just replace the `image` values
 * (imported above) and update the text for each item.
 */
const projects = [
  {
    image: workOfficeFitout,
    alt: 'Open-plan office lounge lit with suspended black linear LED and pendant lighting',
    category: 'Commercial',
    title: 'Office Fit-Out Lighting',
    description: 'Suspended linear LED and feature pendant lighting installed throughout an open-plan office.',
  },
  {
    image: workTeaPointLighting,
    alt: 'Walnut office tea point with under-cabinet LED strip and feature lighting',
    category: 'Commercial',
    title: 'Tea Point & Feature Lighting',
    description: 'Under-cabinet, cove and pendant lighting wired and commissioned for a premium tea point.',
  },
  {
    image: workOfficeLinearLighting,
    alt: 'Empty open-plan office floor with suspended linear LED lighting and wood flooring',
    category: 'Commercial',
    title: 'Open-Plan Workspace',
    description: 'Suspended linear LED scheme delivering even light levels across a full office floor.',
  },
  {
    image: workCorridorLighting,
    alt: 'Office corridor fit-out with recessed and linear ceiling lighting and glass partitions',
    category: 'Commercial',
    title: 'Corridor Lighting & Power',
    description: 'Ceiling lighting, detection and small power installed along a new glazed corridor.',
  },
  {
    image: workMeetingPods,
    alt: 'Glazed meeting pods with linear LED lighting and monitor-arm power',
    category: 'Commercial',
    title: 'Meeting Pod Power & Lighting',
    description: 'Lighting and desk power installed to glass meeting pods, ready for tenant fit-out.',
  },
  {
    image: workWashroomKitchen,
    alt: 'Newly fitted washrooms with bulkhead lighting beside a walnut kitchen with double ovens',
    category: 'Commercial',
    title: 'Washroom & Kitchen Power',
    description: 'Lighting, extract and appliance circuits installed for new washrooms and a staff kitchen.',
  },
  {
    image: workConduitInstall,
    alt: 'Galvanised steel conduit with PIR sensor, isolator and switched spur on a brick wall',
    category: 'Industrial',
    title: 'Steel Conduit Installation',
    description: 'Neatly set-out galvanised conduit, PIR sensor and switched supply to plant equipment.',
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
          <CarouselContent className="-ml-6 cursor-grab active:cursor-grabbing">
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

