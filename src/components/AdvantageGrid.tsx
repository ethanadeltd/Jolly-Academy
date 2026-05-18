import { ShieldCheck, Zap, Sparkles } from "lucide-react";

export const AdvantageGrid = () => {
  return (
    <section id="courses" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-headline font-black mb-6 text-slate-900">Why Jolly English?</h2>
          <p className="text-xl text-slate-600">Our ecosystem combines native human expertise with AI tools to deliver guaranteed results.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: ShieldCheck,
              title: "Certified Native Teachers",
              desc: "Every teacher is a certified professional from the US, UK, or Canada with years of teaching experience.",
              color: "bg-blue-500"
            },
            {
              icon: Zap,
              title: "Active Immersion",
              desc: "Forget textbooks. Our method forces you to think and speak in English from day one using real-life scenarios.",
              color: "bg-accent"
            },
            {
              icon: Sparkles,
              title: "AI Practice Partner",
              desc: "Get unlimited 24/7 practice with our custom AI tool to strengthen what you learned in class.",
              color: "bg-purple-500"
            }
          ].map((item, idx) => (
            <div key={idx} className="group p-10 bg-white rounded-[2.5rem] shadow-lg border border-slate-100 hover:shadow-2xl hover:translate-y-[-8px] transition-all">
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
