import { 
  Home, 
  Building2, 
  Zap, 
  Settings, 
  Shield, 
  Lightbulb,
  Wrench,
  AlertTriangle
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Electrical",
      description: "Complete home electrical services including rewiring, socket installation, and consumer unit upgrades."
    },
    {
      icon: Building2,
      title: "Commercial Electrical",
      description: "Professional electrical solutions for offices, retail spaces, and industrial facilities."
    },
    {
      icon: Lightbulb,
      title: "LED Lighting",
      description: "Energy-efficient LED lighting installation and upgrades for homes and businesses."
    },
    {
      icon: Settings,
      title: "Electrical Testing",
      description: "PAT testing, EICR certificates, and electrical safety inspections to keep you compliant."
    },
    {
      icon: AlertTriangle,
      title: "Emergency Repairs",
      description: "24/7 emergency electrical repair service for urgent electrical faults and power issues."
    },
    {
      icon: Shield,
      title: "Safety Installations",
      description: "Smoke alarms, security lighting, and electrical safety device installation."
    },
    {
      icon: Zap,
      title: "EV Charging Points",
      description: "Electric vehicle charging point installation for homes and commercial properties."
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Regular electrical maintenance and servicing to prevent problems before they occur."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-electric">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional electrical services for residential and commercial properties. 
            Fully qualified, insured, and committed to safety and quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-electric/50 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-electric/10 group-hover:bg-electric/20 transition-colors mb-4 mx-auto">
                  <service.icon className="h-8 w-8 text-electric" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-lg p-8 border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why Choose Barca Systems?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Shield className="h-12 w-12 text-electric mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Fully Qualified</h4>
                <p className="text-muted-foreground">NICEIC registered electrician with full public liability insurance</p>
              </div>
              <div>
                <Zap className="h-12 w-12 text-electric mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Quality Guaranteed</h4>
                <p className="text-muted-foreground">All work comes with warranty and certification where required</p>
              </div>
              <div>
                <Settings className="h-12 w-12 text-electric mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Professional Service</h4>
                <p className="text-muted-foreground">Clean, efficient work with minimal disruption to your day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;