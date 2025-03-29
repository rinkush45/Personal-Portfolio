
import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { supabase } from '@/integrations/supabase/client';
import { ContactMessage } from '@/types/contact';

export default function ContactAdmin() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useScrollReveal();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data, error } = await supabase
          .from('contact_messages')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        setMessages(data || []);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Messages</h1>
        
        <div ref={sectionRef} className="space-y-4">
          {loading ? (
            <div className="text-center py-12">Loading messages...</div>
          ) : messages.length === 0 ? (
            <div className="text-center py-12">No messages found.</div>
          ) : (
            messages.map((message) => (
              <div 
                key={message.id} 
                className="glass-card glass-card-dark p-6 rounded-xl border border-neon-cyan/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{message.name}</h3>
                  <span className="text-sm text-gray-400">
                    {new Date(message.created_at!).toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{message.email}</p>
                <p className="text-gray-100">{message.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
