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
import emailjs from '@emailjs/browser';

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
      // Extract and verify user data
      const userEmail = data.email;
      const userName = data.name;
      const userMessage = data.message;
      
      console.log("Submitting form data:", {
        name: userName,
        email: userEmail, // Log to verify we have the email
        message: userMessage
      });
      
      try {
        // ===== OWNER EMAIL NOTIFICATION =====
        // User form data goes to owner
        const ownerNotificationParams = {
          // User form data to be displayed in email to owner
          name: userName,
          email: userEmail,
          message: `From: ${userName} (${userEmail})
          
Message:
${userMessage}`,
          
          // Owner email address (recipient)
          to_email: 'rinkusharma9833@gmail.com',
          to_name: 'Rinku Sharma',
        };
        
        console.log("SENDING TO OWNER:", ownerNotificationParams);
        
        const ownerEmailResult = await emailjs.send(
          'service_9cgwmhk', // Your EmailJS service ID
          'template_r8wx1ib', // Your OWNER notification template ID
          ownerNotificationParams,
          'CABC8lcIA4gthzRug' // Your EmailJS public key
        );
        console.log("✓ Email sent TO OWNER at rinkusharma9833@gmail.com:", ownerEmailResult);
        
        // ===== USER AUTO-REPLY EMAIL =====
        // This sends a confirmation message back to the user
        const userAutoReplyParams = {
          // Just what's needed for auto-reply
          name: userName,
          email: 'rinkusharma9833@gmail.com', // Your email as the sender
          message: `Thank you for contacting me. I'll get back to you soon!`,
          to_email: userEmail,  // Send to user's email address
          to_name: userName,
          reply_to: 'rinkusharma9833@gmail.com', // Set reply-to as your email
        };
        
        console.log("SENDING TO USER:", userAutoReplyParams);
        console.log("User's email address:", userEmail); // Extra verification
        
        const userEmailResult = await emailjs.send(
          'service_9cgwmhk', // Your EmailJS service ID
          'template_1n3sy2e', // Your USER auto-reply template ID
          userAutoReplyParams,
          'CABC8lcIA4gthzRug' // Your EmailJS public key
        );
        console.log("✓ Email sent TO USER at " + userEmail + ":", userEmailResult);
      } catch (emailError) {
        console.error("EmailJS error:", emailError);
        // Continue execution even if email fails
      }
      
      // Then try to save to Supabase
      try {
        const { error } = await supabase
          .from('contact_messages')
          .insert([data]);
        
        if (error) {
          console.error("Supabase error:", error);
        }
      } catch (dbError) {
        console.error("Supabase error:", dbError);
        // Continue execution even if database fails
      }
      
      // Show success toast if we got this far
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
    <section 
      id="contact" 
      className="py-20 relative overflow-hidden w-full grid-bg"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/80 z-0" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-grid-pattern opacity-30" />
      </div>
      
      <div className="content-container z-10">
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
