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
import { Loader2, Mail, Phone, MapPin, SendIcon } from 'lucide-react';

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

  return (
    <section id="contact" className="py-20 relative overflow-hidden w-full">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Let's Talk</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-10">
                Have a project in mind or just want to chat about DevOps 
                and cloud technologies? Feel free to reach out to me 
                through any of these channels or by using the contact form.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-violet-100/80 dark:bg-background/20 border border-violet-300 dark:border-neon-violet/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-violet-600 dark:text-neon-violet" />
                </div>
                <div>
                  <div className="text-gray-500 dark:text-gray-400">Email</div>
                  <a href="mailto:sharmarinku@outlook.com" className="text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-neon-cyan transition-colors">
                    sharmarinku@outlook.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-pink-100/80 dark:bg-background/20 border border-pink-300 dark:border-neon-pink/30 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-pink-600 dark:text-neon-pink" />
                </div>
                <div>
                  <div className="text-gray-500 dark:text-gray-400">Phone</div>
                  <a href="tel:+919876543210" className="text-gray-900 dark:text-white hover:text-violet-600 dark:hover:text-neon-cyan transition-colors">
                    +91 9876543210
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-orange-100/80 dark:bg-background/20 border border-orange-300 dark:border-neon-orange/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-600 dark:text-neon-orange" />
                </div>
                <div>
                  <div className="text-gray-500 dark:text-gray-400">Location</div>
                  <div className="text-gray-900 dark:text-white">New Delhi, India</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div 
            ref={sectionRef} 
            className="bg-white dark:bg-transparent rounded-xl border border-gray-200 dark:border-gray-800 shadow-md dark:shadow-none p-8 dark:glass-card dark:glass-card-dark"
          >
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Send Me a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field} 
                            className="bg-gray-50 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 focus:border-violet-400 dark:focus:border-violet-400" 
                          />
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
                        <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email" 
                            {...field} 
                            className="bg-gray-50 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 focus:border-violet-400 dark:focus:border-violet-400" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          className="min-h-[150px] bg-gray-50 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800 focus:border-violet-400 dark:focus:border-violet-400" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full py-6 bg-gradient-to-r from-violet-600 to-pink-600 dark:from-neon-orange dark:to-neon-pink hover:opacity-90 text-white font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <SendIcon className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
