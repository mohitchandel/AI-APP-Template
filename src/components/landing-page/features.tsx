import {
  Blocks,
  ChevronRight,
  Infinity,
  Laptop,
  ListEnd,
  Zap,
  ZoomIn,
} from "lucide-react";
import { NeonGradientCard } from "../magicui/neon-gradient-card";

const features = [
  {
    title: "Quality",
    description:
      "Our UI blocks are designed with quality in mind. We make sure that every block is pixel perfect and visually appealing.",
    icon: <ZoomIn className="size-6" />,
    link: "#",
  },
  {
    title: "Customizable",
    description:
      "You can easily customize our UI blocks to fit your needs. Change colors, fonts, and more with our easy-to-use interface.",
    icon: <Blocks className="size-6" />,
    link: "#",
  },
  {
    title: "Responsive",
    description:
      "Our UI blocks are fully responsive and look great on any device. No matter the screen size, your website will look amazing.",
    icon: <Laptop className="size-6" />,
    link: "#",
  },
  {
    title: "Easy to Use",
    description:
      "Our UI blocks are easy to use and require no coding knowledge. Simply drag and drop the blocks you want and you are good to go.",
    icon: <ListEnd className="size-6" />,
    link: "#",
  },
  {
    title: "Fast",
    description:
      "Our UI blocks are optimized for speed and performance. Your website will load fast and provide a great user experience.",
    icon: <Zap className="size-6" />,
    link: "#",
  },
  {
    title: "Modern",
    description:
      "Our UI blocks are designed with modern trends in mind. Your website will look fresh and up-to-date with our blocks.",
    icon: <Infinity className="size-6" />,
    link: "#",
  },
];

const Features = () => {
  return (
    <section className="relative py-32 before:absolute before:inset-0 before:bg-primary/10 before:[mask-image:url(https://www.shadcnblocks.com/images/block/waves.svg)] before:[mask-repeat:repeat] before:[mask-size:_64px_32px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-background"></div>
      <div className="container relative">
        <h2 className="mb-8 max-w-screen-sm text-balance text-2xl font-semibold lg:text-4xl">
          Build your own website with our UI blocks
        </h2>
        <div className="z-30 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <NeonGradientCard className=" items-center justify-center text-center">
              <div
                key={index}
                className="flex flex-col gap-10 rounded-lg border bg-background p-8"
              >
                <div>
                  {feature.icon}
                  <h3 className="mb-2 mt-6 font-medium">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <a
                  href={feature.link}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  Learn more
                  <ChevronRight className="w-4" />
                </a>
              </div>
            </NeonGradientCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
