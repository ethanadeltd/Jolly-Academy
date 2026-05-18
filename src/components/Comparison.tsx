import { XCircle, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Comparison = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-black mb-6 text-slate-900">Why most English courses fail you</h2>
          <p className="text-lg text-slate-600 italic">"I've been studying for years but still can't speak fluently." — Sound familiar?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-red-50/50 border-red-100 rounded-[2rem] p-8">
            <h3 className="text-2xl font-bold text-red-700 mb-8 flex items-center gap-2">
              <XCircle className="h-6 w-6" /> The Old Way
            </h3>
            <ul className="space-y-6">
              {[
                "Boring textbooks and repetitive grammar drills.",
                "Non-native teachers with limited conversational skill.",
                "Learning alone with zero real-world practice.",
                "High costs for just a few hours of class a week.",
                "Focusing on reading/writing while speech lags behind."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-600 font-medium">
                  <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="bg-accent/5 border-accent/20 rounded-[2rem] p-8 shadow-xl shadow-accent/5">
            <h3 className="text-2xl font-bold text-accent mb-8 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" /> The Jolly Way
            </h3>
            <ul className="space-y-6">
              {[
                "100% Native certified teachers from USA/UK/Canada.",
                "Active Acquisition: Speak from the very first minute.",
                "2-for-1 Bonus: Enroll and bring a family member or friend for FREE.",
                "24/7 AI Partner to practice anytime, anywhere.",
                "Small groups focused on real-world scenarios."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-900 font-bold">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
