import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Building clean, scalable software designed for long-term success.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing performance to deliver fast, seamless, and engaging user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Collaborating with cross-functional teams to transform ideas into impactful digital experiences.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Continuously learning and embracing emerging technologies and industry best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-8">

            <div className="animate-fade-in">
  <span className="text-primary text-sm font-medium tracking-wider uppercase">
    About Me
  </span>
</div>

<h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-foreground">
  Building the future,
  <span className="font-serif italic font-normal text-primary">
    {" "}one component at a time.
  </span>
</h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a passionate software engineer with 1 year of experience building digital products that make a difference.
              </p>

              <p>
                I specialize in React, Next.js, and TypeScript, building modern and scalable applications.
              </p>

              <p>
                When I'm not coding, I explore new technologies and improve my skills continuously.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I strive to build digital experiences that are not only functional and efficient,
                but also intuitive, enjoyable, and built to stand the test of time."
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-6">

            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};