import { ArrowRight, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold text-primary">Certified Native Instructors Only</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-headline font-black leading-[1.1] text-slate-900">
              Stop Studying English. <span className="text-primary underline decoration-accent underline-offset-8">Start Speaking It.</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Master fluency 2x faster with immersion methodology. Join 2,000+ students learning from world-class native speakers online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-16 px-10 text-xl font-bold rounded-2xl shadow-lg shadow-primary/20">
                <a href="#courses" className="flex items-center">View Our Courses <ArrowRight className="ml-2 h-6 w-6" /></a>
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-10 text-xl font-bold rounded-2xl border-2">
                <a href="#enroll">Claim 2-for-1 Promo</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                    <img 
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="User" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-amber-500 mb-0.5 font-bold">
                  ★★★★★ <span className="text-slate-900 ml-1">4.9/5 Rating</span>
                </div>
                <p className="text-slate-500 font-medium">Trusted by families worldwide</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://picsum.photos/seed/academy-student/1200/1000"
                alt="Student learning English"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-6 rounded-2xl flex items-center gap-4">
                  <div className="h-12 w-12 bg-accent rounded-xl flex items-center justify-center text-white shrink-0">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Family Exclusive</p>
                    <p className="text-sm text-slate-600">Free access for a family member</p>
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
