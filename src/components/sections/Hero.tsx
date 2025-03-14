
import { FadeIn } from '@/components/ui/FadeIn';
import BookingButton from '@/components/ui/BookingButton';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-br from-brand-blue-50 to-white relative" 
      id="hero"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIHN0cm9rZT0iI0UwRUFGRiIgc3Ryb2tlLW9wYWNpdHk9Ii4yIiBjeD0iMTAiIGN5PSIxMCIgcj0iMy41Ii8+PC9nPjwvc3ZnPg==')] opacity-60"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left stagger-children order-2 md:order-1">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-brand-blue-100 text-brand-blue-600">
              Child Development & Support
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-neutral-900 mb-6 leading-tight md:leading-tight lg:leading-tight">
              Expert Guidance For Your Child's Journey
            </h1>
            
            <p className="text-lg md:text-xl text-brand-neutral-600 mb-8 max-w-xl">
              We provide personalized consultations to help your child overcome challenges and develop their full potential in a supportive environment.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <BookingButton className="w-full sm:w-auto text-base" />
              <a href="#how-it-works" className="group flex items-center gap-2 text-brand-neutral-700 hover:text-brand-blue-600 transition-colors font-medium w-full sm:w-auto justify-center sm:justify-start">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-brand-neutral-700">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-brand-blue-500 mr-2 flex-shrink-0" />
                <span>Expert Consultants</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-brand-blue-500 mr-2 flex-shrink-0" />
                <span>Personalized Plans</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-brand-blue-500 mr-2 flex-shrink-0" />
                <span>Ongoing Support</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <FadeIn delay={0.2} className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-brand-blue-100 rounded-full z-0 animate-pulse-soft"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 bg-brand-blue-200/50 rounded-full z-0 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
                <div className="relative z-10 overflow-hidden rounded-2xl border-4 border-white shadow-xl bg-white h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Child therapy session" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
