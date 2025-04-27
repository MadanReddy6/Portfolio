import React, { useState } from 'react';
import Button from '../ui/Button';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-space-black via-space-purple/20 to-space-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-magenta to-neon-blue bg-clip-text text-transparent inline-block">
            ESTABLISH COMMUNICATION
          </h2>
          <div className="h-1 w-20 bg-neon-magenta mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Ready to collaborate on your next mission? Send a transmission and I'll respond promptly.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="backdrop-blur-sm bg-space-blue/10 border border-gray-800 rounded-lg p-6">
                <h3 className="font-orbitron text-xl font-bold mb-6 text-white">
                  Contact Details
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-neon-cyan mt-1 mr-3" />
                    <div>
                      <h4 className="text-sm font-orbitron text-gray-400">Email</h4>
                      <p className="text-white">kmadanreddy656@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-neon-magenta mt-1 mr-3" />
                    <div>
                      <h4 className="text-sm font-orbitron text-gray-400">Location</h4>
                      <p className="text-white">Kothacheruvu, Sri Sathya Sai District, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-neon-blue mt-1 mr-3" />
                    <div>
                      <h4 className="text-sm font-orbitron text-gray-400">Phone</h4>
                      <p className="text-white">+91 9381651218</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="backdrop-blur-sm bg-space-purple/10 border border-gray-800 rounded-lg p-6">
                <h3 className="font-orbitron text-xl font-bold mb-4 text-white">
                  Response Time
                </h3>
                <p className="text-gray-300">
                  I typically respond to all communications within 24-48 hours. For urgent matters, please indicate in your message.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <form 
                onSubmit={handleSubmit}
                className="backdrop-blur-sm bg-space-blue/10 border border-gray-800 rounded-lg p-6 md:p-8"
              >
                {submitStatus.type && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-900/50 border border-green-500 text-green-100'
                      : 'bg-red-900/50 border border-red-500 text-red-100'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <div className="mb-6">
                  <label 
                    htmlFor="name"
                    className="block text-sm font-orbitron text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-space-black/50 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Your Name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="email"
                    className="block text-sm font-orbitron text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-space-black/50 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message"
                    className="block text-sm font-orbitron text-gray-400 mb-2"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-space-black/50 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-transparent transition-all duration-300"
                      placeholder="Your message here..."
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                </div>
                
                <div className="text-right">
                  <Button type="submit" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send '}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;