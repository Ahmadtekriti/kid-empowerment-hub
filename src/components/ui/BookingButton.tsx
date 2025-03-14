
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import BookingDialog from '@/components/booking/BookingDialog';

interface BookingButtonProps {
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  children?: React.ReactNode;
  onClick?: () => void;
}

const BookingButton = ({ 
  className, 
  size = 'default', 
  variant = 'default',
  children = 'Book a Free Consultation',
  onClick 
}: BookingButtonProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    } else {
      setDialogOpen(true);
    }
  };

  return (
    <>
      <Button
        size={size}
        variant={variant}
        className={cn(
          'relative overflow-hidden group transition-all duration-300',
          'bg-brand-blue-600 hover:bg-brand-blue-700',
          'text-white font-semibold rounded-full',
          'shadow-sm hover:shadow-lg',
          'px-6 py-2.5 text-[15px]',
          className
        )}
        onClick={handleButtonClick}
      >
        <span className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {children}
        </span>
        <span className="absolute inset-0 rounded-full bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
      </Button>
      
      <BookingDialog 
        open={dialogOpen} 
        onOpenChange={setDialogOpen} 
      />
    </>
  );
};

export default BookingButton;
