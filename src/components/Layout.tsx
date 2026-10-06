import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Work",
    "href": "#work"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Pricing",
    "href": "#pricing"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Gallery",
    "href": "#gallery"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="floatingGradient" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="DAVONSHOTIT"
      ctaButton={{
        text: "Book Now",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "DavonShotIt",
          items: [
            {
              label: "Portfolio",
              href: "#work",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com",
            },
            {
              label: "Twitter",
              href: "https://twitter.com",
            },
            {
              label: "Behance",
              href: "https://behance.net",
            },
          ],
        },
      ]}
      leftText="© 2024 DAVONSHOTIT. All rights reserved."
      rightText="Visual Storyteller for the Modern Creative."
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
