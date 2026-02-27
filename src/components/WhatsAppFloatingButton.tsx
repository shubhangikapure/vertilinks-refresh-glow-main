import { MessageCircle } from "lucide-react";

export function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/971505810499"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-40 inline-flex items-center justify-center rounded-full bg-emerald-500 shadow-lg hover:bg-emerald-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-background"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7 text-white" />
    </a>
  );
}

