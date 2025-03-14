
import React, { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { timeSlots } from './time-slots';
import { toast } from 'sonner';

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const [step, setStep] = useState<number>(1);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isDateInPast = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  };

  const nextStep = () => {
    if (step === 1 && !date) {
      toast.error("Please select a date for your consultation");
      return;
    }
    
    if (step === 2 && !timeSlot) {
      toast.error("Please select a time slot for your consultation");
      return;
    }

    if (step === 3) {
      if (!formData.name || !formData.email) {
        toast.error("Please fill in all required fields");
        return;
      }
      
      if (!formData.email.includes('@')) {
        toast.error("Please enter a valid email address");
        return;
      }
    }

    if (step < 4) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', {
      date,
      timeSlot,
      ...formData
    });
    
    toast.success("Booking successful! We'll contact you soon to confirm your appointment.", {
      duration: 5000,
    });
    
    // Reset form and close dialog
    setStep(1);
    setDate(undefined);
    setTimeSlot(undefined);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-brand-blue-700">
            Book a Free Consultation
          </DialogTitle>
          <DialogDescription>
            Schedule a session with one of our child development specialists.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          {/* Step indicator */}
          <div className="flex mb-6 w-full justify-between">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm",
                    step >= i
                      ? "bg-brand-blue-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  )}
                >
                  {i}
                </div>
                <span className="text-xs mt-1 text-gray-500">
                  {i === 1 ? "Date" : i === 2 ? "Time" : i === 3 ? "Details" : "Confirm"}
                </span>
              </div>
            ))}
          </div>

          {/* Step 1: Date Selection */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-medium text-brand-blue-700">Select a Date</h3>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => isDateInPast(date) || isWeekend(date)}
                  className={cn("border rounded-md p-3 pointer-events-auto")}
                />
              </div>
            </div>
          )}

          {/* Step 2: Time Selection */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-medium text-brand-blue-700">
                Select a Time Slot for {date ? format(date, 'EEEE, MMMM d, yyyy') : ''}
              </h3>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {timeSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant="outline"
                    className={cn(
                      "justify-start",
                      timeSlot === slot
                        ? "bg-brand-blue-100 border-brand-blue-500 text-brand-blue-700"
                        : ""
                    )}
                    onClick={() => setTimeSlot(slot)}
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    {slot}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Contact Information */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-medium text-brand-blue-700">Your Information</h3>
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-gray-400" />
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number (optional)"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="message">Additional Information</Label>
                  <div className="flex">
                    <MessageSquare className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0 mt-3" />
                    <Input
                      id="message"
                      name="message"
                      as="textarea"
                      placeholder="Brief description of your child's needs (optional)"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <div className="space-y-4">
              <h3 className="font-medium text-brand-blue-700">Confirm Your Booking</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-gray-500">Date:</div>
                  <div className="font-medium">{date ? format(date, 'MMMM d, yyyy') : 'Not selected'}</div>
                  
                  <div className="text-gray-500">Time:</div>
                  <div className="font-medium">{timeSlot || 'Not selected'}</div>
                  
                  <div className="text-gray-500">Name:</div>
                  <div className="font-medium">{formData.name}</div>
                  
                  <div className="text-gray-500">Email:</div>
                  <div className="font-medium">{formData.email}</div>
                  
                  {formData.phone && (
                    <>
                      <div className="text-gray-500">Phone:</div>
                      <div className="font-medium">{formData.phone}</div>
                    </>
                  )}
                  
                  {formData.message && (
                    <>
                      <div className="text-gray-500 col-span-2">Additional Information:</div>
                      <div className="font-medium col-span-2 border-t pt-2">{formData.message}</div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="flex justify-between sm:justify-between">
          {step > 1 && (
            <Button 
              type="button" 
              variant="outline" 
              onClick={prevStep}
            >
              Back
            </Button>
          )}
          <div className="flex justify-end">
            {step < 4 ? (
              <Button type="button" onClick={nextStep}>
                Continue
              </Button>
            ) : (
              <Button 
                type="button" 
                onClick={handleSubmit}
                className="bg-brand-blue-600 hover:bg-brand-blue-700"
              >
                Confirm Booking
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
