
import { FadeIn } from '@/components/ui/FadeIn';
import BookingButton from '@/components/ui/BookingButton';
import { CheckCircle } from 'lucide-react';

const CallToAction = () => {
  const benefits = [
    "Free 30-minute initial consultation",
    "No obligation to continue",
    "Personalized recommendations",
    "Expert child development guidance"
  ];

  return (
    <section className="py-20 md:py-32 bg-brand-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBjeD0iMTAiIGN5PSIxMCIgcj0iMy41Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Take the First Step Toward Your Child's Success
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Book your free consultation today and discover how our expert guidance can help your child thrive.
            </p>
            
            <div className="flex justify-center mb-10">
              <BookingButton 
                className="bg-white text-brand-blue-600 hover:bg-brand-blue-50 hover:shadow-[0_0_30px_0_rgba(255,255,255,0.3)]"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-blue-200 mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
