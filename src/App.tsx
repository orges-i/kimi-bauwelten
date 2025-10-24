import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import UberUns from "./pages/UberUns";
import Dienstleistungen from "./pages/Dienstleistungen";
import ServiceDetail from "./pages/ServiceDetail";
import Kontakt from "./pages/Kontakt";
import NotFound from "./pages/NotFound";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
   <BrowserRouter
  basename={import.meta.env.PROD ? "/kimi-bauwelten" : "/"}
  future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}
>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/uber-uns" element={<UberUns />} />
        <Route path="/dienstleistungen" element={<Dienstleistungen />} />
        <Route path="/dienstleistungen/:serviceSlug" element={<ServiceDetail />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
