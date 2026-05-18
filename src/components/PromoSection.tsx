import { Heart, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const PromoSection = () => {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="promo-gradient rounded-[4rem] p-12 md:p-24 text-white relative shadow-2xl">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <GraduationCap className="w-full h-full" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/30 text-lg py-2 px-6">
                LIMITED FAMILY OFFER
              </Badge>
              <h2 className="text-5xl md:text-7xl font-headline font-black leading-tight">
                Families that learn together, <span className="text-white/80">grow together.</span>
              </h2>
              <div className="space-y-4">
                <p className="text-2xl text-white/90 leading-relaxed font-light">
                  Register today and your <span className="font-black text-white">family member or friend gets access at NO EXTRA COST!</span>
                </p>
                <p className="text-lg text-white/70">
                  When you enroll, your family member or friend gets full access for free. It's truly 2 for the price of 1. Available for children or adults.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-2xl h-20 px-12 rounded-3xl shadow-xl hover:translate-y-[-4px] transition-all">
                  <a href="#enroll">Claim 2-for-1 Offer</a>
                </Button>
                <div className="flex flex-col">
                  <span className="text-3xl font-black">2 for 1</span>
                  <span className="text-white/70 font-bold uppercase tracking-widest text-sm">Pay for one, two people learn</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-10 bg-white/10 rounded-full blur-3xl" />
              <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden transform rotate-2">
                <div className="relative h-[400px] w-full">
                  <img
                    src="/my-family.png"
                    alt="Family learning online"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 bg-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-red-500 fill-red-500" />
                    </div>
                    <div>
                      <p className="font-bold text-xl text-slate-900">Double the Progress</p>
                      <p className="text-slate-500">Available for kids & adults</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
