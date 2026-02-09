import { useState, useEffect } from 'react';
import { usePostHog } from 'posthog-js/react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const posthog = usePostHog();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (posthog && !posthog.has_opted_in_capturing() && !posthog.has_opted_out_capturing()) {
      setVisible(true);
    }
  }, [posthog]);

  const accept = () => {
    posthog.opt_in_capturing();
    setVisible(false);
  };

  const reject = () => {
    posthog.opt_out_capturing();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-xl mx-auto bg-navy border border-neutral-200/10 rounded-xl p-5 shadow-2xl">
        <p className="text-neutral-200/80 text-sm leading-relaxed mb-4">
          We use cookies to understand how you use our site and improve your experience.
          See our <Link to="/privacy" className="text-emerald hover:underline">Privacy Policy</Link> for details.
        </p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm text-neutral-200/60 hover:text-white transition cursor-pointer"
          >
            Reject
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-emerald text-white rounded-lg hover:bg-emerald/90 transition cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
