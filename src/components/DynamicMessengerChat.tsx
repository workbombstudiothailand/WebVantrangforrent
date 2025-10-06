'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the MessengerChat component with SSR disabled.
// This is the actual component that will be rendered on the client side.
const MessengerChat = dynamic(() => import('./MessengerChat'), {
  ssr: false,
});

// This component acts as a client-side wrapper that can be safely imported
// into a Server Component (like RootLayout).
export default function DynamicMessengerChat() {
  return <MessengerChat />;
}