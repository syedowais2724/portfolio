/**
 * @license
 * Copyright (c) 2026 Aitezaz Sikandar. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for license information.
 * Project: Portfolio
 * Author: Aitezaz Sikandar (aitezazdev)
 * Website: https://aitezazdev.vercel.app
 */

import { Geist, Geist_Mono, Space_Grotesk, Instrument_Serif } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import ClientLayout from './ClientLayout';
import { siteMetadata } from '@/lib/metadata';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  preload: true,
  display: 'swap',
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  preload: true,
  display: 'swap',
});
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  preload: true,
  display: 'swap',
});
const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  preload: true,
  display: 'swap',
});
export const metadata = siteMetadata;
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} antialiased bg-cream`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <ClientLayout>{children}</ClientLayout>
        <Script
          id="cardtree-widget-script"
          src="https://thedouble.ai/embed/cardtree-widget.js"
          strategy="afterInteractive"
          data-cardtree-widget=""
          data-slug="syedowais"
          data-mode="bubble"
          data-position="bottom-right"
          data-bubble-style="pill"
          data-widget-style="classic"
          data-accent="%231E293B"
          data-chat-btn="%231E293B"
          data-chat-btn-txt="%23FFFFFF"
          data-voice-btn="%23c6f201"
          data-voice-btn-txt="%23000000"
          data-grad-start="%23D7D8DC"
          data-grad-end="%23F4F4F5"
          data-ring="%23ffffff"
          data-ring-size="2"
          data-pulse="%231000f5"
          data-btn-size="52"
          data-av-size="52"
          data-avatar-on="1"
          data-pulse-on="1"
          data-stroke-on="0"
          data-float-on="1"
          data-border-on="1"
          data-float-speed="3"
          data-float-range="9"
          data-pulse-speed="4"
          data-pulse-density="0.32"
          data-pulse-spread="1.85"
          data-body-title-color="%23FFFFFF"
          data-body-desc-color="%23B8C2CE"
          data-voice-label="Voice"
          data-chat-label="Chat"
          data-theme-mode="auto"
          data-shadow="default"
          data-greet="%5B%22AI%20Twin%22%5D"
          data-avatar="https%3A%2F%2Fcardtree-avatar-bucket.s3.ap-south-1.amazonaws.com%2Fplayground-avatars%2F6a658c791cda8ddeee8a0a1f%2F1786432920971"
          data-hero-grad="%7B%22type%22%3A%22solid%22%2C%22colors%22%3A%5B%22%23E0E0E8%22%2C%22%231E293B%22%5D%2C%22direction%22%3A135%2C%22opacity%22%3A60%7D"
          data-body-grad="%7B%22type%22%3A%22gradient%22%2C%22colors%22%3A%5B%22%231A212D%22%2C%22%23242D3D%22%5D%2C%22direction%22%3A180%2C%22opacity%22%3A100%7D"
          data-banner-bg="https%3A%2F%2Fcardtree-avatar-bucket.s3.ap-south-1.amazonaws.com%2Fplayground-banner-bg%2F6a658c791cda8ddeee8a0a1f%2F1786432896469"
          data-starters="%5B%22What%20do%20you%20do%3F%22%2C%22How%20can%20you%20help%20me%3F%22%2C%22How%20can%20I%20connect%20with%20you%3F%22%2C%22Tell%20me%20about%20your%20background%22%5D"
        />
      </body>
    </html>
  );
}

