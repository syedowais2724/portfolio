'use client';

import { useEffect } from 'react';

export default function DoubleAgentWidget() {
  useEffect(() => {
    // Avoid appending multiple times if already present
    if (document.querySelector('script[data-cardtree-widget]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://thedouble.ai/embed/cardtree-widget.js';
    script.async = true;
    script.dataset.cardtreeWidget = '';
    script.dataset.slug = 'syedowais';
    script.dataset.mode = 'bubble';
    script.dataset.position = 'bottom-right';
    script.dataset.bubbleStyle = 'pill';
    script.dataset.widgetStyle = 'classic';
    script.dataset.accent = '%231E293B';
    script.dataset.chatBtn = '%231E293B';
    script.dataset.chatBtnTxt = '%23FFFFFF';
    script.dataset.voiceBtn = '%23c6f201';
    script.dataset.voiceBtnTxt = '%23000000';
    script.dataset.gradStart = '%23D7D8DC';
    script.dataset.gradEnd = '%23F4F4F5';
    script.dataset.ring = '%23ffffff';
    script.dataset.ringSize = '2';
    script.dataset.pulse = '%231000f5';
    script.dataset.btnSize = '80';
    script.dataset.avSize = '80';
    script.dataset.avatarOn = '1';
    script.dataset.pulseOn = '1';
    script.dataset.strokeOn = '0';
    script.dataset.floatOn = '1';
    script.dataset.borderOn = '1';
    script.dataset.floatSpeed = '3';
    script.dataset.floatRange = '9';
    script.dataset.pulseSpeed = '4';
    script.dataset.pulseDensity = '0.32';
    script.dataset.pulseSpread = '1.85';
    script.dataset.bodyTitleColor = '%23FFFFFF';
    script.dataset.bodyDescColor = '%23B8C2CE';
    script.dataset.voiceLabel = 'Voice';
    script.dataset.chatLabel = 'Chat';
    script.dataset.themeMode = 'auto';
    script.dataset.shadow = 'default';
    script.dataset.greet = '%5B%22Talk%20with%20my%20twin.%22%5D';
    script.dataset.avatar = 'https%3A%2F%2Fcardtree-avatar-bucket.s3.ap-south-1.amazonaws.com%2Fplayground-avatars%2F6a658c791cda8ddeee8a0a1f%2F1786432920971';
    script.dataset.heroGrad = '%7B%22type%22%3A%22solid%22%2C%22colors%22%3A%5B%22%23E0E0E8%22%2C%22%231E293B%22%5D%2C%22direction%22%3A135%2C%22opacity%22%3A60%7D';
    script.dataset.bodyGrad = '%7B%22type%22%3A%22gradient%22%2C%22colors%22%3A%5B%22%231A212D%22%2C%22%23242D3D%22%5D%2C%22direction%22%3A180%2C%22opacity%22%3A100%7D';
    script.dataset.bannerBg = 'https%3A%2F%2Fcardtree-avatar-bucket.s3.ap-south-1.amazonaws.com%2Fplayground-banner-bg%2F6a658c791cda8ddeee8a0a1f%2F1786432896469';
    script.dataset.starters = '%5B%22What%20do%20you%20do%3F%22%2C%22How%20can%20you%20help%20me%3F%22%2C%22How%20can%20I%20connect%20with%20you%3F%22%2C%22Tell%20me%20about%20your%20background%22%5D';

    document.body.appendChild(script);

    return () => {
      try {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      } catch {}
    };
  }, []);

  return null;
}
