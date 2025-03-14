
import { FadeIn } from '@/components/ui/FadeIn';
import BookingButton from '@/components/ui/BookingButton';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Book Your Free Consultation",
      description: "Schedule a convenient time for your initial consultation with one of our child development experts."
    },
    {
      number: "02",
      title: "Share Your Concerns",
      description: "During your session, discuss your child's unique situation and the specific challenges you're facing."
    },
    {
      number: "03",
      title: "Receive a Personalized Plan",
      description: "Get tailored recommendations and strategies designed specifically for your child's needs and strengths."
    },
    {
      number: "04",
      title: "Ongoing Support",
      description: "Access follow-up sessions and resources to help implement strategies and track your child's progress."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-brand-blue-50" id="how-it-works">
      <div className="container mx-auto">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-brand-blue-100 text-brand-blue-600">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-neutral-900 mb-6">
              How Our Consultation Works
            </h2>
            <p className="text-lg text-brand-neutral-600">
              We've designed a straightforward process to ensure you and your child get the support you need without any unnecessary complexity.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm border border-brand-neutral-100">
                <div className="absolute -top-5 left-8 bg-brand-blue-500 text-white text-xl font-bold px-4 py-2 rounded-lg">
                  {step.number}
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-brand-neutral-900 mb-4 mt-2">{step.title}</h3>
                  <p className="text-brand-neutral-600">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-lg text-brand-neutral-600 mb-6 max-w-3xl mx-auto">
              Ready to get the support your child needs? Book your free consultation today and take the first step toward helping your child thrive.
            </p>
            <BookingButton />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HowItWorks;
