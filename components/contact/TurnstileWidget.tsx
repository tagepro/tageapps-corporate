// components/contact/TurnstileWidget.tsx

"use client";

import Turnstile from "react-turnstile";

type TurnstileWidgetProps = {
  onVerify: (token: string) => void;
  onExpire: () => void;
  onError: () => void;
};

export default function TurnstileWidget({
  onVerify,
  onExpire,
  onError,
}: TurnstileWidgetProps) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!siteKey) {
    return (
      <p className="text-sm text-red-600">
        Turnstile site key tanımlı değil.
      </p>
    );
  }

  return (
    <Turnstile
      sitekey={siteKey}
      onVerify={onVerify}
      onExpire={onExpire}
      onError={onError}
      theme="light"
      size="normal"
    />
  );
}