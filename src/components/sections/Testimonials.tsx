
import { FadeIn } from '@/components/ui/FadeIn';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The strategies they provided transformed our daily routines. My son's behavior has improved significantly, and I finally feel equipped to handle challenging situations.",
      author: "Sarah M.",
      role: "Parent of a 7-year-old",
      rating: 5
    },
    {
      quote: "After struggling for years with my daughter's learning difficulties, the consultation gave us clear direction and practical tools. Her confidence has soared!",
      author: "Michael T.",
      role: "Parent of a 10-year-old",
      rating: 5
    },
    {
      quote: "The personalized attention to our family's unique situation made all the difference. The consultant truly listened and offered solutions that work for us.",
      author: "Jennifer P.",
      role: "Parent of a 5-year-old",
      rating: 5
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white" id="testimonials">
      <div className="container mx-auto">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-brand-blue-100 text-brand-blue-600">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-neutral-900 mb-6">
              What Parents Are Saying
            </h2>
            <p className="text-lg text-brand-neutral-600">
              Discover how our consultations have helped families overcome challenges and support their children's growth.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <TestimonialCard {...testimonial} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <div className="glass-panel rounded-xl p-8 max-w-3xl mx-auto">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-brand-neutral-600 mb-4">
                <span className="text-brand-neutral-900 font-semibold">4.9 out of 5 stars</span> from over 200 parent reviews
              </p>
              <p className="text-brand-neutral-600">
                We're committed to providing exceptional support for families and their children.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, author, role, rating }: { quote: string, author: string, role: string, rating: number }) => {
  return (
    <div className="h-full glass-panel rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <blockquote className="text-brand-neutral-700 mb-6 italic">"{quote}"</blockquote>
      <div>
        <p className="font-semibold text-brand-neutral-900">{author}</p>
        <p className="text-sm text-brand-neutral-500">{role}</p>
      </div>
    </div>
  );
};

export default Testimonials;
