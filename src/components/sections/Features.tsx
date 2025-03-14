
import { FadeIn } from '@/components/ui/FadeIn';
import { Brain, Lightbulb, Users, Heart, BookOpen, Compass } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-7 w-7" />,
      title: "Developmental Assessments",
      description: "Comprehensive evaluations to identify your child's strengths, challenges, and unique developmental patterns."
    },
    {
      icon: <Lightbulb className="h-7 w-7" />,
      title: "Learning Strategies",
      description: "Customized approaches to help your child excel academically and develop effective learning habits."
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Social Skills Development",
      description: "Build confidence in social interactions through evidence-based techniques and guided practice."
    },
    {
      icon: <Heart className="h-7 w-7" />,
      title: "Emotional Regulation",
      description: "Help your child understand and manage their emotions effectively in various situations."
    },
    {
      icon: <BookOpen className="h-7 w-7" />,
      title: "Parent Coaching",
      description: "Gain tools and strategies to navigate parenting challenges and create a supportive home environment."
    },
    {
      icon: <Compass className="h-7 w-7" />,
      title: "Educational Planning",
      description: "Navigate school choices, IEPs, and learning accommodations with expert guidance and advocacy."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white" id="services">
      <div className="container mx-auto">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-brand-blue-100 text-brand-blue-600">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-neutral-900 mb-6">
              Specialized Support for Children
            </h2>
            <p className="text-lg text-brand-neutral-600">
              We provide comprehensive services to address your child's developmental, educational, and emotional needs through personalized consultations.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <FeatureCard {...feature} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="h-full bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-brand-neutral-100 hover:border-brand-blue-200 group">
      <div className="bg-brand-blue-50 rounded-xl h-16 w-16 flex items-center justify-center text-brand-blue-500 mb-6 group-hover:bg-brand-blue-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-brand-neutral-900 mb-3">{title}</h3>
      <p className="text-brand-neutral-600">{description}</p>
    </div>
  );
};

export default Features;
