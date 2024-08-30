import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      question: "What is the AI Story Generator, and how does it work?",
      answer:
        "The AI Story Generator is a powerful tool that uses advanced artificial intelligence to help you create stories quickly and easily. Simply input your ideas, select a genre or theme, and the AI will generate a complete story based on your preferences. You can customize and edit the generated content to fit your needs.",
    },
    {
      question: "How does the Text-to-Speech feature work?",
      answer:
        "Our Text-to-Speech feature converts your written stories into spoken audio. You can choose from a variety of realistic voices to match the tone and emotion of your story. Simply select the text you want to convert, choose a voice, and the app will generate an audio file that you can listen to or share.",
    },
    {
      question: "What is Voice Cloning, and how can I use it?",
      answer:
        "Voice Cloning allows you to create unique voices for your characters by replicating specific vocal characteristics. You can use this feature to generate voices that sound like different people or fictional characters. Upload a sample of the desired voice, and our AI will create a clone that you can use in your stories.",
    },
    {
      question: "What are Story Credits, and how are they used?",
      answer:
        "Story Credits are used to access certain features and functionalities within the app. Each plan comes with a set number of credits per month, which can be used to generate stories, convert text to speech, and utilize voice cloning. Additional credits can be purchased if needed. Unused credits do not roll over to the next month.",
    },
    {
      question: "How can I cancel or change my subscription?",
      answer:
        "You can manage your subscription through your account settings in the app. To cancel or change your plan, go to the Billing section, where you can choose to cancel your subscription or switch to a different plan. If you have any issues or need assistance, our support team is available to help.",
    },
  ];

  return (
    <section id="faq" className="py-32">
      <div className="container">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-5xl">
          Frequently asked questions
        </h1>
        {faqs.map((faq, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger className="hover:text-foreground/60	hover:no-underline text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-normal">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Faq;
