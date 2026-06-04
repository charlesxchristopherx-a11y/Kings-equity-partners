import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import HowItWorksPage from "./pages/how-it-works";
import ContactPage from "./pages/contact";
import BlogPage from "./pages/blog";
import BlogPostPage from "./pages/blog-post";
import DisclaimerPage from "./pages/disclaimer";
import PrivacyPage from "./pages/privacy";
import TermsPage from "./pages/terms";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
