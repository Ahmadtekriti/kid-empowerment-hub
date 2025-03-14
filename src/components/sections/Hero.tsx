
import { FadeIn } from '@/components/ui/FadeIn';
import BookingButton from '@/components/ui/BookingButton';
import { ArrowRight, CheckCircle, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden relative bg-gradient-to-br from-brand-blue-50/70 via-white to-brand-blue-50/50" 
      id="hero"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIHN0cm9rZT0iI0UwRUFGRiIgc3Ryb2tlLW9wYWNpdHk9Ii4yIiBjeD0iMTAiIGN5PSIxMCIgcj0iMy41Ii8+PC9nPjwvc3ZnPg==')] opacity-60"></div>
      <div className="absolute top-32 right-10 w-64 h-64 bg-brand-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-blue-100/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left content column */}
          <div className="lg:col-span-6 text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center px-3 py-1.5 mb-6 text-sm font-medium rounded-full bg-brand-blue-100/80 text-brand-blue-700 border border-brand-blue-200/50">
                <span className="flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute h-2 w-2 rounded-full bg-brand-blue-500 opacity-75"></span>
                  <span className="relative rounded-full h-2 w-2 bg-brand-blue-600"></span>
                </span>
                Expert Child Development Support
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-brand-neutral-900">
                <span className="text-brand-blue-600">Personalized Guidance</span> for Your Child's Journey
              </h1>
              
              <p className="text-lg md:text-xl text-brand-neutral-700 mb-8 max-w-xl">
                We provide professional consultations to help your child overcome challenges, develop essential skills, and thrive with confidence in a supportive environment.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <BookingButton className="w-full sm:w-auto text-base shadow-lg" />
                <a href="#how-it-works" className="group flex items-center gap-2 text-brand-neutral-700 hover:text-brand-blue-600 transition-colors font-medium w-full sm:w-auto justify-center sm:justify-start px-4 py-2.5">
                  See how it works
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-brand-neutral-700 mt-8">
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-3 shadow-sm border border-brand-blue-100/50">
                  <CheckCircle className="h-5 w-5 text-brand-blue-500 mr-2 flex-shrink-0" />
                  <span className="font-medium">Certified Experts</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-3 shadow-sm border border-brand-blue-100/50">
                  <CheckCircle className="h-5 w-5 text-brand-blue-500 mr-2 flex-shrink-0" />
                  <span className="font-medium">Custom Programs</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-4 py-3 shadow-sm border border-brand-blue-100/50">
                  <CheckCircle className="h-5 w-5 text-brand-blue-500 mr-2 flex-shrink-0" />
                  <span className="font-medium">Ongoing Support</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right image column */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.2} className="relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-blue-200/50 rounded-full z-0 animate-pulse-soft"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-blue-300/30 rounded-full z-0 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Child therapist working with a child" 
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 z-20 flex items-center gap-3 border border-brand-blue-100">
                  <div className="bg-brand-blue-100 rounded-full p-2">
                    <Calendar className="h-5 w-5 text-brand-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-neutral-700">First Session</p>
                    <p className="text-brand-blue-600 font-bold">Free Consultation</p>
                  </div>
                </div>
                
                <div className="absolute top-8 -right-4 bg-white rounded-full shadow-lg px-4 py-2 z-20 flex items-center gap-2 border border-brand-blue-100">
                  <span className="flex h-2.5 w-2.5">
                    <span className="animate-ping absolute h-2.5 w-2.5 rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="font-medium text-sm text-brand-neutral-700">100+ Specialists Available</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
