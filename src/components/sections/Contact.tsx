
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { ContactFormData } from '@/types/contact';
import { Loader2 } from 'lucide-react';

// Form validation schema using zod
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form with react-hook-form and zod validation
  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  // Submit handler
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Insert data into Supabase
      const { error } = await supabase
        .from('contact_messages')
        .insert([data]);
      
      if (error) throw error;
      
      // Show success toast
      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for reaching out. I will get back to you soon.',
      });
      
      // Reset form
      form.reset();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Show error toast
      toast({
        title: 'Something went wrong',
        description: 'There was an error sending your message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "sharmarinku@outlook.com",
      link: "mailto:sharmarinku@outlook.com",
      color: "text-neon-violet"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210",
      color: "text-neon-pink"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "New Delhi, India",
      link: null,
      color: "text-neon-orange"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden w-full">
      <div className="content-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div 
          ref={sectionRef}
          className="max-w-md mx-auto glass-card glass-card-dark p-8 rounded-xl border border-neon-cyan/50 shadow-neon-cyan"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Write your message here..." 
                        className="min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-neon-cyan hover:bg-neon-cyan/80 text-background"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : 'Send Message'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
