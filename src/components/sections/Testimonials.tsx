
import { FadeIn } from '@/components/ui/FadeIn';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The personalized strategies transformed our daily routines. My son is now more confident and engaged at school, and I have the tools to support him at home.",
      author: "Sarah Miller",
      role: "Mother of 7-year-old with ADHD",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      rating: 5
    },
    {
      quote: "After struggling for years with my daughter's learning difficulties, the consultation gave us clear direction. Her teachers have noticed remarkable improvement in just two months.",
      author: "Michael Thompson",
      role: "Father of 10-year-old with dyslexia",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      rating: 5
    },
    {
      quote: "The consultant's patience and expertise helped us understand our child's sensory needs. We now have practical solutions that have reduced meltdowns by almost 80%.",
      author: "Jennifer Parker",
      role: "Mother of 5-year-old with sensory processing challenges",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
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
              Families We've Helped
            </h2>
            <p className="text-lg text-brand-neutral-600">
              Hear from parents who have seen remarkable changes in their children after working with our consultants.
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
            <div className="bg-brand-blue-50 rounded-xl p-8 max-w-3xl mx-auto">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-brand-neutral-600 mb-4">
                <span className="text-brand-neutral-900 font-semibold">4.9 out of 5 stars</span> from over 200 parent reviews
              </p>
              <p className="text-brand-neutral-600">
                Join the hundreds of families who have transformed their children's lives with our expert guidance.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, author, role, image, rating }: { quote: string, author: string, role: string, image: string, rating: number }) => {
  return (
    <div className="h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-brand-neutral-100 relative">
      <div className="absolute -top-5 -right-3 text-brand-blue-100">
        <Quote className="h-20 w-20 rotate-180" />
      </div>
      <div className="flex mb-6 items-center">
        <div className="mr-4">
          <img src={image} alt={author} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
        </div>
        <div>
          <p className="font-semibold text-brand-neutral-900">{author}</p>
          <p className="text-sm text-brand-neutral-500">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <blockquote className="text-brand-neutral-700 relative z-10">"{quote}"</blockquote>
    </div>
  );
};

export default Testimonials;
