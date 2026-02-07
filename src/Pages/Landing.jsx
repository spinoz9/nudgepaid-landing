import Nav from '../components/landing/Nav';
import Hero from '../components/landing/Hero';
import DashboardPreview from '../components/landing/DashboardPreview';
import HowItWorks from '../components/landing/HowItWorks';
import ROICalculator from '../components/landing/ROICalculator';
import Features from '../components/landing/Features';
import IntegrationShowcase from '../components/landing/IntegrationShowcase';
import SecurityCompliance from '../components/landing/SecurityCompliance';
import Testimonials from '../components/landing/Testimonials';
import FinalCTA from '../components/landing/FinalCTA';
import FAQ from '../components/landing/FAQ';
import Footer from '../components/landing/Footer';

export default function NudgePaidLanding() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Nav />
      <Hero />
      <DashboardPreview />
      <HowItWorks />
      <ROICalculator />
      <Features />
      <IntegrationShowcase />
      <SecurityCompliance />
      {/* <Testimonials /> — hidden until real testimonials are available */}
      <FinalCTA />
      <FAQ />
      <Footer />
    </div>
  );
}
