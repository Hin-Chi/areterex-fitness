"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

export default function TrialModel() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 1. Initialize state keys to match the 'name' attributes exactly
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    primaryGoal: "",
    experience: "",
    message: "",
  });

  // 2. Updated change handler to log updates
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/mjgbywav", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json", 
        "Accept": "application/json" 
      },
      body: JSON.stringify(formData), 
    });

    const result = await response.json();

    if (response.ok) {
      toast.success("Application Sent!");
      setFormData({ fullName: "", phone: "", email: "", primaryGoal: "", experience: "", message: "" });
      setOpen(false); 
    } else {
      // THIS WILL SHOW YOU EXACTLY WHICH FIELD FORMSPREE HATES
      console.log("VALIDATION ERRORS:", result.errors); 
      toast.error("Validation Error", {
        description: result.errors?.[0]?.message || "Please check your inputs."
      });
    }
  } catch (error) {
    console.log(error);
    toast.error("Network Error. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild >
        <Button className="bg-primary hover:bg-primary/90 text-lg font-semibold
                transition-transform duration-300 hover:scale-105 px-8">
          Start Free Consultation
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl bg-white dark:bg-secondary text-black max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center uppercase dark:text-white">
            Free Consultation Form
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 text-black">
              <label className="text-xs font-bold uppercase tracking-wider dark:text-white">Full Name *</label>
              <Input 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                required 
                className="border-gray-300 h-11 text-black dark:text-white" 
              />
            </div>

            <div className="space-y-2 text-black">
              <label className="text-xs font-bold uppercase tracking-wider dark:text-white">Phone Number *</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r pr-2 border-gray-300 text-black">
                  <span className="text-lg dark:text-white">🇮🇳</span>
                  <span className="text-sm font-medium dark:text-white">+91</span>
                </div>
                <Input 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  className="pl-24 border-gray-300 h-11 text-black dark:text-white" 
                />
              </div>
            </div>
          </div>

          <div className="space-y-2 text-black">
            <label className="text-xs font-bold uppercase tracking-wider dark:text-white">Email Address *</label>
            <Input 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="border-gray-300 h-11 dark:text-white" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider dark:text-white">Primary Goal</label>
              <select 
                name="primaryGoal" 
                value={formData.primaryGoal} 
                onChange={handleChange} 
                className="w-full h-11 border border-gray-300 rounded-md px-3 text-sm bg-white text-black "
              >
                <option value="">Select your goal</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="Muscle Gain">Muscle Gain</option>
                <option value="Strength Building">Strength Building</option>
                <option value="Injury Recovery">Injury Recovery</option>
                <option value="Overall Fitness">Overall Fitness</option>
                
              </select>
            </div>

            <div className="space-y-2 text-black">
              <label className="text-xs font-bold uppercase tracking-wider dark:text-white">Fitness Experience *</label>
              <select 
                name="experience" 
                value={formData.experience} 
                onChange={handleChange} 
                required 
                className="w-full h-11 border border-gray-300 rounded-md px-3 text-sm bg-white text-black"
              >
                <option value="">Select experience</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div className="space-y-2 text-black">
            <label className="text-xs font-bold uppercase tracking-wider dark:text-white">Additional Message</label>
            <Textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className="border-gray-300 min-h-[100px] text-black dark:text-white" 
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full bg-black hover:bg-zinc-800 text-white h-12 font-bold">
            {isSubmitting ? (
              <><Loader2 className="animate-spin mr-2 h-4 w-4" /> SUBMITTING...</>
            ) : (
              "CLAIM MY FREE TRIAL"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}