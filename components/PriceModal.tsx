"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Smartphone, Laptop, QrCode } from "lucide-react";
import Image from "next/image";
import { plans } from '@/lib/constants'

interface PaymentProps {
  planName: string;
  amount: number;
  Pop: Boolean;
  qrImage: string;
}

export default function PaymentModal({ planName, amount, Pop, qrImage }: PaymentProps) {
  const upiId = "siddsg395@okhdfcbank"; // Replace with your actual UPI ID
  const upiUrl = `upi://pay?pa=${upiId}&pn=SiddhantGhosh&am=${amount}&cu=INR&tn=Gym_${planName}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={`w-full py-3 text-lg font-semibold
                                                transition-colors duration-300 ${Pop ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-secondary hover:bg-primary text-primary-foreground dark:text-foreground"}`}>
          Join Now
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-white dark:bg-black/50 text-black dark:text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center uppercase italic">
            Checkout: {planName}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Option 1: Mobile Pay */}
          <div className="md:hidden">
            <p className="text-center text-sm text-gray-500 mb-4">Click below to pay using any UPI app</p>
            <Button asChild className="w-full h-14 bg-black text-white text-lg">
              <a href={upiUrl}>Pay via UPI App</a>
            </Button>
          </div>

          {/* Option 2: PC/Scanner (Shows on both, but intended for PC) */}
          <p className="md:hidden text-center text-md text-gray-500 mb-4">OR</p>
          <div className="flex flex-col items-center justify-center border-t pt-6">
            
            <p className="text-center font-bold mb-4 flex items-center gap-2">
              <QrCode className="w-5 h-5" /> Scan Below QR to Pay ₹{amount}
            </p>
            <div className="relative w-64 h-64 border-4 border-black p-2 rounded-xl">
              {/* Replace with your actual QR Code image */}
              <Image 
                src={qrImage} 
                alt="UPI QR Code" 
                fill 
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              Secure UPI Transfer
            </p>
          </div>

          <div className="bg-zinc-100 p-4 rounded-lg dark:bg-black/50">
             <p className="text-xs text-center text-gray-600 dark:text-white">
               After payment, please send a screenshot to <b>+91 9646504849</b> to activate your {planName} plan.
             </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}