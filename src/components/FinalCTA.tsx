import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section id="enroll" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-slate-900 rounded-[4rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <h2 className="text-5xl md:text-6xl font-headline font-black text-white mb-8 leading-tight">
                Ready to speak English <span className="text-accent">with confidence?</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                {[
                  "Free 15-minute level assessment",
                  "Personalized learning roadmap",
                  "Access to our AI Practice Partner",
                  "2-for-1: Family member or friend learns for FREE"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-white/80 text-xl">
                    <CheckCircle2 className="h-7 w-7 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-2xl h-20 px-12 rounded-3xl shadow-xl shadow-accent/20 group">
                  Enroll Now <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
                <div className="flex flex-col justify-center">
                  <p className="text-white font-bold text-xl">Limited spots available</p>
                  <p className="text-white/50">Next cohort starts in 3 days</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] lg:h-auto">
              <img
                src="https://picsum.photos/seed/cta-student/1000/1200"
                alt="Happy student"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent lg:bg-gradient-to-l" />
              
              <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-white">
                <p className="text-2xl font-headline italic mb-4">"The best investment I've made for my career. The AI partner is a game changer!"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-bold">Sarah Jenkins</p>
                    <p className="text-white/60 text-sm">Marketing Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
