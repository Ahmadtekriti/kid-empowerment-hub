
import { FadeIn } from '@/components/ui/FadeIn';
import BookingButton from '@/components/ui/BookingButton';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Free Initial Consultation",
      description: "Begin with a complimentary 30-minute session to discuss your concerns and goals for your child."
    },
    {
      number: "02",
      title: "Comprehensive Assessment",
      description: "We'll evaluate your child's unique strengths, challenges, and needs through standardized and observational assessments."
    },
    {
      number: "03",
      title: "Personalized Plan Creation",
      description: "Receive a detailed action plan with specific strategies tailored to your child's individual profile."
    },
    {
      number: "04",
      title: "Implementation & Support",
      description: "Regular sessions to implement strategies, track progress, and adjust approaches as your child develops."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-brand-blue-50 to-white" id="how-it-works">
      <div className="container mx-auto">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-brand-blue-100 text-brand-blue-600">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-neutral-900 mb-6">
              How We Support Your Child
            </h2>
            <p className="text-lg text-brand-neutral-600">
              Our structured approach ensures your child receives the personalized support they need while keeping you involved every step of the way.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-brand-blue-100 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className={`relative md:grid md:grid-cols-2 items-center gap-8 mb-16 ${index % 2 !== 0 ? 'md:rtl' : ''}`}>
                <div className={`relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-brand-neutral-100 ${index % 2 !== 0 ? 'md:ltr text-left' : 'text-left'}`}>
                  <div className="absolute -top-5 left-8 bg-brand-blue-500 text-white text-xl font-bold px-4 py-2 rounded-lg">
                    {step.number}
                  </div>
                  <div className="pt-6">
                    <h3 className="text-xl font-semibold text-brand-neutral-900 mb-4 mt-2">{step.title}</h3>
                    <p className="text-brand-neutral-600">{step.description}</p>
                  </div>
                  
                  <div className="absolute top-1/2 -translate-y-1/2 hidden md:block"
                    style={{ [index % 2 !== 0 ? 'left' : 'right']: '-30px' }}>
                    <div className="h-10 w-10 rounded-full bg-brand-blue-500 border-4 border-white"></div>
                  </div>
                </div>
                
                <div className={`hidden md:block ${index % 2 !== 0 ? 'md:ltr' : ''}`}>
                  <div className="w-full h-56 bg-brand-blue-100/30 rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-brand-blue-100 to-brand-blue-50 flex items-center justify-center text-brand-blue-500">
                      <span className="text-6xl font-bold opacity-20">{step.number}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-lg text-brand-neutral-600 mb-6 max-w-3xl mx-auto">
              Ready to start your child's journey to success? Our expert team is here to provide the support and guidance they need.
            </p>
            <BookingButton />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HowItWorks;
