// components/footers/FooterSoft.tsx

export default function FooterSoft() {
  return (
    <footer className="bg-base-100 text-base-content/60 text-sm py-10 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div>
          made with <span className="text-pink-400">♥</span> and ink — aubade ©{" "}
          {new Date().getFullYear()}
        </div>
        <div className="flex gap-4">
          <a href="/about" className="hover:text-primary transition-colors">
            about
          </a>
          <a href="/privacy" className="hover:text-primary transition-colors">
            privacy
          </a>
          <a href="/contact" className="hover:text-primary transition-colors">
            contact
          </a>
        </div>
      </div>
    </footer>
  );
}
