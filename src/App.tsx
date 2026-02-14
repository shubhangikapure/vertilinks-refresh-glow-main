import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import SolutionDetail from "./pages/SolutionDetail";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Softwares from "./pages/Softwares";
import SoftwareDetail from "./pages/SoftwareDetail";
import Brands from "./pages/Brands";
import BrandDetail from "./pages/BrandDetail";
import SupportTechnical from "./pages/SupportTechnical";
import FAQs from "./pages/FAQs";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Sitemap from "./pages/Sitemap";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/softwares" element={<Softwares />} />
          <Route path="/softwares/:slug" element={<SoftwareDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/:slug" element={<BrandDetail />} />
          <Route path="/support/technical" element={<SupportTechnical />} />
          <Route path="/support/faqs" element={<FAQs />} />
          <Route path="/support/terms" element={<Terms />} />
          <Route path="/support/privacy" element={<Privacy />} />
          <Route path="/support/sitemap" element={<Sitemap />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
