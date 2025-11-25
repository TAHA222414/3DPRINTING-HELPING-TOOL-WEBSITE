import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";

// Regular pages
import Home from "@/pages/home";
import Calculator from "@/pages/calculator";
import Converter from "@/pages/converter";
import TimeEstimator from "@/pages/time-estimator";
import Calibration from "@/pages/calibration";
import Contact from "@/pages/contact";
import About from "@/pages/about";
import Support from "@/pages/support";
import Privacy from "@/pages/privacy";
import Disclaimer from "@/pages/disclaimer";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";

// BLOG PAGES (added by you)
import GettingStarted from "@/pages/getting-started";
import FilamentTypes from "@/pages/filament-types";
import PrintQuality from "@/pages/print-quality";
import Troubleshooting from "@/pages/troubleshooting";

function Router() {
  return (
    <Switch>
      {/* Main navigation pages */}
      <Route path="/" component={Home} />
      <Route path="/tools" component={Calculator} />
      <Route path="/converter" component={Converter} />
      <Route path="/time-estimator" component={TimeEstimator} />
      <Route path="/calibration" component={Calibration} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/support" component={Support} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/terms" component={Terms} />

      {/* BLOG ROUTES */}
      <Route path="/blog/getting-started" component={GettingStarted} />
      <Route path="/blog/filament-types" component={FilamentTypes} />
      <Route path="/blog/print-quality" component={PrintQuality} />
      <Route path="/blog/troubleshooting" component={Troubleshooting} />

      {/* Always keep NotFound last */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Toaster />
          <Router />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
