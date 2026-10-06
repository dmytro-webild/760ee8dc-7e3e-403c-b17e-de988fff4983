import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBrand from '@/components/sections/hero/HeroBrand';
import PricingSplitCards from '@/components/sections/pricing/PricingSplitCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialOverlayCards from '@/components/sections/testimonial/TestimonialOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBrand
      brand="DAVONSHOTIT"
      description="Quality Shots. Real Moments. Lasting Memories. Photography and visual content that transforms everyday moments into unforgettable stories."
      primaryButton={{
        text: "Book Your Shoot",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Explore Work",
        href: "#work",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-beautiful-fashion-stylish-brunette-woman-model-with-evening-makeup-red-lips-white-jacket_158538-11541.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="Every frame tells your truth. I don't just capture images; I document the raw emotion and cinematic essence of your milestones."
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="work" data-section="work">
    <SectionErrorBoundary name="work">
          <FeaturesMediaCarousel
      tag="Portfolio"
      title="Selected Works"
      description="A glimpse into the stories we've documented for brands and individuals."
      items={[
        {
          title: "Couple Portraits",
          description: "Authentic chemistry.",
          buttonIcon: "Camera",
          imageSrc: "http://img.b2bpic.net/free-photo/lovely-indian-couple-love-wear-saree-elegant-suit-posed-outdoor-terrace-summer-sunny-day_627829-878.jpg",
        },
        {
          title: "Cinematic BTS",
          description: "Production coverage.",
          buttonIcon: "Film",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-women-enjoying-ice-cream_23-2149428109.jpg",
        },
        {
          title: "Artist Editorial",
          description: "Creative visual identity.",
          buttonIcon: "Mic",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-playing-guitar-studio_23-2150232079.jpg",
        },
        {
          title: "Urban Street Fashion",
          description: "Bold visual narratives.",
          buttonIcon: "Zap",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-posing-outdoors_23-2150204405.jpg",
        },
        {
          title: "Events & Milestones",
          description: "Captured raw emotion.",
          buttonIcon: "Star",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-reading-magazine_1303-9950.jpg",
        },
        {
          title: "Professional Portraits",
          description: "Your brand amplified.",
          buttonIcon: "User",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-suffering-from-schizophrenia_23-2149332544.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="gallery" data-section="gallery">
    <SectionErrorBoundary name="gallery">
          <FeaturesRevealCardsBento
      tag="Highlights"
      title="Visual Storytelling"
      description="Explore the aesthetic diversity of our studio's creative output."
      items={[
        {
          title: "Texture",
          description: "Detail macro photography",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-abstract-photo-shoot_23-2148547003.jpg",
        },
        {
          title: "Branding",
          description: "Product visual identity",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/wet-fresh-beautiful-colorful-feather-textured-background_23-2148114617.jpg",
        },
        {
          title: "Motion",
          description: "Dynamic action shots",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-taking-photos-light-movie-projector_23-2149377354.jpg",
        },
        {
          title: "Portraits",
          description: "Raw human character",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/gorgeous-woman-posing-with-hand-shoulder_23-2148364757.jpg",
        },
        {
          title: "Automotive",
          description: "Metallic luxury detail",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/dynamic-liquid-metal-abstract-background_84443-87053.jpg",
        },
        {
          title: "Weddings",
          description: "Elegant decor events",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/late-april-through-early-may-tulip-fields-netherlands-colourfully-burst-into-full-bloom-fortunately-there-are-hundreds-flower-fields-dotted-dutch-countryside-which_181624-33699.jpg",
        },
        {
          title: "Landscape",
          description: "Cinematic wide angles",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/bearded-elderly-businessman-man-with-mobile-phone-senior-black-suit_1157-46618.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingSplitCards
      tag="Investment"
      title="Custom Packages"
      description="Premium services for creators and couples."
      plans={[
        {
          tag: "Portrait",
          price: "$500",
          period: "/session",
          description: "Perfect for individual portraits or lifestyle moments.",
          primaryButton: {
            text: "Book Now",
            href: "#contact",
          },
          featuresTitle: "Included",
          features: [
            "60 minute session",
            "20 edited shots",
            "Private gallery access",
          ],
        },
        {
          tag: "Event",
          price: "$1,200",
          period: "/event",
          description: "Full coverage for your engagement, prom, or event.",
          primaryButton: {
            text: "Book Now",
            href: "#contact",
          },
          featuresTitle: "Included",
          features: [
            "3 hours coverage",
            "Full gallery access",
            "48hr delivery promise",
          ],
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social" data-section="social">
    <SectionErrorBoundary name="social">
          <SocialProofMarquee
      tag="Trusted by"
      title="Creative Collaborators"
      description="Working with brands and individuals who value high-end vision."
      names={[
        "VOGUE",
        "HARPER'S",
        "NIKE",
        "ADIDAS",
        "APPLE",
        "SONY",
        "NETFLIX",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialOverlayCards
      tag="Reviews"
      title="Client Stories"
      description="Hear what our clients have to say about their visual journey."
      testimonials={[
        {
          name: "Sarah J.",
          role: "Creative Lead",
          company: "Vogue",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-women-working-together_23-2150506066.jpg",
        },
        {
          name: "Michael Chen",
          role: "Founder",
          company: "StartupX",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-with-bright-smile_23-2148563438.jpg",
        },
        {
          name: "Emily R.",
          role: "Marketing Dir.",
          company: "GrowthCo",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/brunette-girl-wearing-blue-dress-high-heels-sitting-fireplace_132075-12009.jpg",
        },
        {
          name: "David Kim",
          role: "Artist",
          company: "Independent",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-businesswoman-with-notebook-holding-her-diary-planner-sitting-office_1258-194721.jpg",
        },
        {
          name: "Alex P.",
          role: "Event Coordinator",
          company: "GlobalEvents",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/special-product-photography-studio-with-workers_23-2148970220.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Support"
      title="Common Questions"
      description="Getting started is easy."
      items={[
        {
          question: "What is the turnaround time?",
          answer: "Standard edits are delivered within 48 hours for event packages.",
        },
        {
          question: "Do you offer prints?",
          answer: "Yes, high-end professional prints are available via your private gallery.",
        },
        {
          question: "Are you available for travel?",
          answer: "Absolutely. I travel for editorial projects and destination sessions.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Contact"
      text="Ready to document your next chapter? Book your session now to secure your date."
      primaryButton={{
        text: "Book Your Shoot",
        href: "#",
      }}
      secondaryButton={{
        text: "Contact Studio",
        href: "#",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
