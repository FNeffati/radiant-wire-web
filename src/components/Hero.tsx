import { Phone, Mail, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import barcaLogo from '@/assets/barca-logo.png';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Brand */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              BARCA
              <span className="block text-electric">SYSTEMS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Electrical Solutions for Home & Business
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-electric mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Expert Service</h3>
                <p className="text-muted-foreground">Professional electrical work with guaranteed quality</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-electric mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Emergency</h3>
                <p className="text-muted-foreground">Available for urgent electrical emergencies</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-electric mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Free Quotes</h3>
                <p className="text-muted-foreground">No-obligation estimates for all projects</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="bg-card/30 rounded-lg p-8 mb-8 border border-border">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Phone className="h-6 w-6 text-electric" />
                  <a 
                    href="tel:07506324978" 
                    className="text-2xl font-bold text-foreground hover:text-electric transition-colors"
                  >
                    07506 324 978
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Mail className="h-6 w-6 text-electric" />
                  <a 
                    href="mailto:info@barcasystems.com" 
                    className="text-lg text-foreground hover:text-electric transition-colors"
                  >
                    info@barcasystems.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-electric text-electric-foreground hover:bg-electric/90 shadow-electric"
                >
                  Get Free Quote
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('tel:07506324978')}
                  className="border-electric text-electric hover:bg-electric hover:text-electric-foreground"
                >
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;