'use client';

export default function WhatsAppButton() {
  const phoneNumber = '213793692289';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <>
      <style>{`
        .whatsapp-fab {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.25s cubic-bezier(.34,1.56,.64,1),
                      box-shadow 0.25s ease;
          outline: none;
          border: none;
        }

        .whatsapp-fab:hover {
          transform: scale(1.12) translateY(-3px);
          box-shadow: 0 8px 28px rgba(37, 211, 102, 0.6), 0 4px 12px rgba(0,0,0,0.3);
        }

        .whatsapp-fab:active {
          transform: scale(0.96);
        }

        .whatsapp-fab svg {
          width: 32px;
          height: 32px;
          fill: #ffffff;
          flex-shrink: 0;
        }

        /* Pulse ring animation */
        .whatsapp-fab::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2.5px solid rgba(37, 211, 102, 0.55);
          animation: wa-pulse 2.2s ease-out infinite;
        }

        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 0.8; }
          70%  { transform: scale(1.35); opacity: 0; }
          100% { transform: scale(1.35); opacity: 0; }
        }

        /* Tooltip */
        .whatsapp-fab .wa-tooltip {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%) translateX(6px);
          background: #1b1b2f;
          color: #fff;
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          padding: 6px 12px;
          border-radius: 8px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
          box-shadow: 0 4px 14px rgba(0,0,0,0.3);
        }

        .whatsapp-fab .wa-tooltip::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-left-color: #1b1b2f;
        }

        .whatsapp-fab:hover .wa-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }
      `}</style>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Contact us on WhatsApp"
        title="Chat on WhatsApp"
      >
        {/* Official WhatsApp icon */}
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.77.72 5.38 1.98 7.65L.5 31.5l8.1-2.12A15.44 15.44 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.3a12.76 12.76 0 0 1-6.52-1.79l-.47-.28-4.82 1.26 1.28-4.7-.3-.48A12.77 12.77 0 1 1 16 28.8zm7.01-9.56c-.38-.19-2.27-1.12-2.62-1.25-.35-.13-.61-.19-.86.19-.26.38-1 1.25-1.22 1.5-.23.26-.45.29-.83.1-.38-.19-1.6-.59-3.05-1.88-1.13-1-1.89-2.24-2.11-2.62-.22-.38-.02-.59.17-.77.17-.17.38-.45.57-.67.19-.22.25-.38.38-.64.13-.25.06-.48-.03-.67-.1-.19-.86-2.08-1.18-2.85-.31-.75-.63-.65-.86-.66h-.73c-.26 0-.67.1-1.02.48-.35.38-1.34 1.31-1.34 3.19s1.37 3.7 1.56 3.96c.19.25 2.7 4.12 6.54 5.78.91.4 1.63.63 2.18.81.92.29 1.75.25 2.41.15.74-.11 2.27-.93 2.59-1.83.32-.9.32-1.67.22-1.83-.1-.16-.35-.25-.73-.44z"/>
        </svg>

        <span className="wa-tooltip">Chat on WhatsApp</span>
      </a>
    </>
  );
}
