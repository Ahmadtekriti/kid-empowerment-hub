
import { FadeIn } from '@/components/ui/FadeIn';
import BookingButton from '@/components/ui/BookingButton';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative" 
      id="hero"
    >
      {/* Updated gradient background with a softer, more welcoming feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-50/90 to-white/70"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIHN0cm9rZT0iI0UwRUFGRiIgc3Ryb2tlLW9wYWNpdHk9Ii4yIiBjeD0iMTAiIGN5PSIxMCIgcj0iMy41Ii8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content Column */}
          <div className="flex flex-col stagger-children md:pr-8 order-2 md:order-1">
            <span className="inline-block px-4 py-1.5 mb-5 text-sm font-medium rounded-full bg-brand-blue-100 text-brand-blue-600 self-start">
              Professional Child Consultation Services
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-neutral-900 mb-4 leading-tight">
              Get The Right Support For Your Child's Unique Needs.
            </h1>
            
            <p className="text-lg text-brand-neutral-600 mb-6">
              Embark on your healing journey with our expert consultants. We provide personalized guidance to help your child thrive.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <BookingButton 
                className="w-full sm:w-auto px-8 py-3 text-[16px]"
                variant="default"
              >
                Book a Free Consultation
              </BookingButton>
              <a href="#how-it-works" className="group flex items-center gap-2 text-brand-neutral-700 hover:text-brand-blue-600 transition-colors font-medium">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-brand-neutral-700">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-brand-blue-500 mr-2 flex-shrink-0" />
                <span>Expert Consultants</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-brand-blue-500 mr-2 flex-shrink-0" />
                <span>Personalized Approach</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-brand-blue-500 mr-2 flex-shrink-0" />
                <span>Practical Strategies</span>
              </div>
            </div>
          </div>
          
          {/* Right Image Column */}
          <FadeIn delay={0.3} className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-full">
              <img 
                src="/lovable-uploads/d6e384c8-8a99-4f4a-b4aa-8066b86023d1.png" 
                alt="Mother and daughter sharing a joyful moment" 
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Subtle overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/10 to-transparent"></div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
