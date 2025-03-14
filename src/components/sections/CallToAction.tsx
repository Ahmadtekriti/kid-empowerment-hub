
import { FadeIn } from '@/components/ui/FadeIn';
import BookingButton from '@/components/ui/BookingButton';
import { CheckCircle } from 'lucide-react';

const CallToAction = () => {
  const benefits = [
    "Free 30-minute consultation",
    "Personalized assessment",
    "Expert child development specialists",
    "Flexible scheduling options"
  ];

  return (
    <section className="py-20 md:py-32 bg-brand-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBjeD0iMTAiIGN5PSIxMCIgcj0iMy41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn className="text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Begin Your Child's Success Story Today
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Take the first step towards unlocking your child's full potential with our expert guidance and support.
            </p>
            
            <div className="mb-10">
              <BookingButton 
                className="bg-white text-brand-blue-600 hover:bg-brand-blue-50 hover:shadow-[0_0_30px_0_rgba(255,255,255,0.3)]"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-blue-200 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 p-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue-500/10 rounded-full -mt-16 -mr-16 z-0"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-blue-500/10 rounded-full -mb-20 -ml-20 z-0"></div>
              
              <div className="relative text-center z-10">
                <div className="inline-block rounded-full bg-white/15 p-4 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">Schedule Your Free Consultation</h3>
                <p className="text-white/80 mb-6">
                  Our team is ready to meet with you and learn about your child's unique needs.
                </p>
                
                <ul className="text-left mb-8 space-y-3">
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-brand-blue-200 mr-2 flex-shrink-0" />
                    <span>No obligation or pressure</span>
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-brand-blue-200 mr-2 flex-shrink-0" />
                    <span>Virtual or in-person options</span>
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-brand-blue-200 mr-2 flex-shrink-0" />
                    <span>Speak directly with a specialist</span>
                  </li>
                </ul>
                
                <BookingButton 
                  className="bg-white text-brand-blue-600 hover:bg-brand-blue-50 hover:shadow-[0_0_30px_0_rgba(255,255,255,0.3)] w-full"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
