
import { FadeIn } from '@/components/ui/FadeIn';
import { Brain, Lightbulb, Users, Heart, BookOpen, Compass } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Developmental Guidance",
      description: "Understand your child's developmental milestones and how to support their growth at every stage."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Learning Strategies",
      description: "Discover effective approaches to support your child's unique learning style and academic needs."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Behavioral Support",
      description: "Address challenging behaviors with proven techniques that foster positive change and emotional regulation."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Emotional Wellbeing",
      description: "Help your child build resilience, self-confidence, and healthy emotional expression."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Parenting Skills",
      description: "Enhance your parenting toolkit with strategies tailored to your family's specific dynamics and needs."
    },
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Future Planning",
      description: "Navigate educational transitions and create roadmaps for your child's continued success."
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
              Comprehensive Support for Your Child's Journey
            </h2>
            <p className="text-lg text-brand-neutral-600">
              Our experienced consultants provide personalized guidance across all areas of your child's development, learning, and wellbeing.
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
    <div className="h-full glass-panel rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
      <div className="bg-brand-blue-50 rounded-xl h-16 w-16 flex items-center justify-center text-brand-blue-500 mb-6 group-hover:bg-brand-blue-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-brand-neutral-900 mb-3">{title}</h3>
      <p className="text-brand-neutral-600">{description}</p>
    </div>
  );
};

export default Features;
