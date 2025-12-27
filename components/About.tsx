"use client";

import { Trophy, Download, Eye } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function About() {
  const features = [
    {
      icon: <Trophy className="text-red-500 w-6 h-6" />,
      title: "ACE Certified Personal Trainer",
      description: "ACE-PT",
      file: "/cert/ACE-PT.pdf",
      preview: "/cert/ACE-PT.jpg" // Ensure you have a JPG version for preview
    },
    {
      icon: <Trophy className="text-red-500 w-6 h-6" />,
      title: "ACE Sports Nutritionist",
      description: "ACE-SN",
      file: "/cert/ACE-SN.pdf",
      preview: "/cert/ACE-SN.jpg"
    },
    {
      icon: <Trophy className="text-red-500 w-6 h-6" />,
      title: "Indian Red Cross Society CPR Certificate",
      description: "IRCS-CPR",
      file: "/cert/ACE-CPR.pdf",
      preview: "/cert/ACE-CPR.jpg"
    }
  ];

  return (
    <section id="about" className="py-24 bg-foreground/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image Gallery/Impact Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-zinc-800">
              <Image 
                src="/gym-interior.jpg" // Add your actual image path here
                alt="Gym Interior" 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 p-6 rounded-xl hidden md:block border-4 border-foreground/20">
              <p className="text-3xl font-bold italic tracking-tighter">10+ YEARS</p>
              <p className="text-sm uppercase font-semibold">Of Excellence</p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div>
              <h4 className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2">Who Am I</h4>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight uppercase italic">
                Pushing Limits <br /> 
                <span className="text-zinc-500 italic">Every Single Day</span>
              </h2>
              <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
                <b className="text-red-500 text-xl">Siddhant Ghosh - Personal Coach and Sports Nutritionist </b><br/>
                Specializing in a science-based approach to fitness, performance, and sports nutrition.
                I work closely with individuals and athletes to create personalized training and nutrition plans.
              </p>
            </div>

            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl  bg-foreground/4 hover:border-red-600 transition-all group">
                  <div className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm md:text-base">{feature.title}</h3>
                      <p className="text-zinc-500 text-xs">{feature.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* PREVIEW BUTTON */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-md transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl bg-zinc-950 border-zinc-800 p-1">
                        <DialogHeader>
                          <DialogTitle className="text-white text-center py-2">{feature.title}</DialogTitle>
                        </DialogHeader>
                        <div className="relative w-full h-[70vh]">
                          <Image 
                            src={feature.preview} 
                            alt={feature.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* DOWNLOAD BUTTON */}
                    <a 
                      href={feature.file} 
                      download={`${feature.description}.pdf`} 
                      className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white p-2 rounded-md transition-colors"
                    >
                      <Download className="w-4 h-4"/>      
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}