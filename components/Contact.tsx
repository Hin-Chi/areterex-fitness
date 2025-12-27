"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Loader2 } from "lucide-react"; // Install lucide-react if not present
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
   const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("LOADING");

    try {
      const response = await fetch("https://formspree.io/f/meejaqwd", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent!", {
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
       throw new Error();
      }
    } catch (error) {
      console.log(error);
     // 3. Error Sonner Notification
      toast.error("Submission failed", {
        description: "Please check your network and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20  bg-foreground/4">
      <div className="max-w-6xl mx-auto px-4 ">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get In <span className="text-red-500">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side: Original Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-400">Transform your life with our expert trainers and supportive community.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-red-500/10 p-3 rounded-full"><Phone className="text-red-500" /></div>
                <span>+91 9646504849</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-red-500/10 p-3 rounded-full"><Mail className="text-red-500" /></div>
                <span>siddsg395@gmail.com</span>
              </div>
              
            </div>
          </div>

          {/* Right Side: The Form with Original Classes */}
          <form onSubmit={handleSubmit} className="space-y-4  bg-foreground/4 p-8 rounded-xl">
            <Input 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Your Name" 
              required 
              className=" bg-foreground/4" 
            />
            <Input 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Email Address" 
              required 
              className=" bg-foreground/4" 
            />
            <Textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="How can we help you?" 
              required 
              className=" bg-foreground/4" 
            />
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-red-700 text-white dark:text-black font-bold transition-all"
            >
             {isSubmitting ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
            ) : (
              "Send Message"
            )}
            </Button>

            {status === "ERROR" && (
              <p className="text-red-500 text-sm text-center animate-pulse">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}