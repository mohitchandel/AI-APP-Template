import {
  BookTemplate,
  Globe2,
  Mic2Icon,
  Navigation,
} from "lucide-react";
import { NeonGradientCard } from "../magicui/neon-gradient-card";
import { MagicWandIcon, SpeakerLoudIcon } from "@radix-ui/react-icons";

const features = [
  {
    title: "Create Unique Stories Instantly",
    description:
      "Craft compelling stories with just a few clicks. Our AI story generator helps you brainstorm, plot, and write original tales tailored to your style and preferences. Whether you’re a seasoned writer or a beginner, unleash your creativity and watch your ideas come to life effortlessly.",
    icon: <MagicWandIcon className="size-6" />,
  },
  {
    title: "Bring Your Stories to Life",
    description:
      "Convert your written stories into spoken words with our advanced text-to-speech feature. Choose from a variety of realistic voice options to match the tone and emotion of your narrative, making your stories even more immersive.",
    icon: <SpeakerLoudIcon className="size-6" />,
  },
  {
    title: "Clone Voices for Your Characters",
    description:
      "Give your characters unique voices with our state-of-the-art voice cloning technology. Easily generate distinct voices for different characters, enhancing the storytelling experience and making your stories truly one-of-a-kind.",
    icon: <Mic2Icon className="size-6" />,
  },
  {
    title: "Intuitive and User-Friendly Design",
    description:
      "Navigate seamlessly with our simple, user-friendly interface. Designed for both novice and experienced users, our app makes it easy to create, edit, and share stories. Spend less time learning the tool and more time crafting your next masterpiece.",
    icon: <Navigation className="size-6" />,
  },
  {
    title: "Start with Ready-Made Templates",
    description:
      "Kickstart your writing with our customizable story templates. From fairy tales to sci-fi adventures, select a template that matches your genre and customize it to fit your vision. Perfect for those who need a little inspiration to get started.",
    icon: <BookTemplate className="size-6" />,
  },
  {
    title: "Create Stories in Any Language",
    description:
      "Write and generate stories in multiple languages with ease. Our multilingual support allows you to reach a global audience and make your stories accessible to readers and listeners around the world.",
    icon: <Globe2 className="size-6" />,
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-32 before:absolute before:inset-0 before:bg-primary/10 before:[mask-image:url(https://www.shadcnblocks.com/images/block/waves.svg)] before:[mask-repeat:repeat] before:[mask-size:_64px_32px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-background"></div>
      <div className="container relative">
        <h2 className="mb-8 max-w-screen-sm text-balance text-2xl font-semibold lg:text-4xl">
          Transform Your Storytelling Experience with Our AI Services
        </h2>
        <div className="z-30 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <NeonGradientCard  key={index} className=" items-center justify-center text-center">
              <div
                className="flex flex-col gap-10 rounded-lg border bg-background p-8"
              >
                <div>
                  {feature.icon}
                  <h3 className="mb-2 mt-6 font-medium">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </NeonGradientCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
