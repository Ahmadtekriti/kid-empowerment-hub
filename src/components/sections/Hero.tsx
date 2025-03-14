
import { FadeIn } from '@/components/ui/FadeIn';
import BookingButton from '@/components/ui/BookingButton';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden hero-gradient relative" 
      id="hero"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIHN0cm9rZT0iI0UwRUFGRiIgc3Ryb2tlLW9wYWNpdHk9Ii4yIiBjeD0iMTAiIGN5PSIxMCIgcj0iMy41Ii8+PC9nPjwvc3ZnPg==')] opacity-60"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center stagger-children">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-brand-blue-100 text-brand-blue-600">
            Professional Child Consultation Services
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-neutral-900 mb-6 leading-tight md:leading-tight lg:leading-tight">
            Get The Right Support For Your Child's Unique Needs
          </h1>
          
          <p className="text-lg md:text-xl text-brand-neutral-600 mb-8 max-w-2xl mx-auto">
            Expert guidance to help your child thrive. Our personalized consultations address your child's specific challenges and build on their strengths.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <BookingButton className="w-full sm:w-auto text-base" />
            <a href="#how-it-works" className="group flex items-center gap-2 text-brand-neutral-700 hover:text-brand-blue-600 transition-colors font-medium w-full sm:w-auto justify-center">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-brand-neutral-700">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-brand-blue-500 mr-2" />
              <span>Expert Consultants</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-brand-blue-500 mr-2" />
              <span>Personalized Approach</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-brand-blue-500 mr-2" />
              <span>Practical Strategies</span>
            </div>
          </div>
        </div>
        
        <FadeIn delay={0.4} className="mt-16 max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl shadow-brand-blue-500/10 border border-white/50 bg-white/20 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-100/80 to-brand-blue-50/40 animate-pulse-soft">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-brand-neutral-400 font-medium">Consultation preview image</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
