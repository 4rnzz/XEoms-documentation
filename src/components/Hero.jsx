import Image from 'next/future/image'
import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'
import XEomsImage from '@/images/XEoms.png'

export function Hero() {
  return (
    <div className="overflow-hidden bg-neutral-900 py-16 lg:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        {/* Responsive layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-12">
          
          {/* Left image (desktop), center image (mobile) */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
            <Image
              src={XEomsImage}
              alt="XEoms Hero"
              width={600}
              height={600}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>

          {/* Right section (desktop), top text (mobile) */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Title */}
            <h1 className="text-5xl font-bold text-white mb-6">
              亗 XΞoms Latest Version
            </h1>

            {/* TikTok + Buttons (kept below on mobile) */}
            <div className="mt-4 flex flex-col items-center lg:items-start">
              <p className="text-2xl text-neutral-400 mb-6">
                TikTok: <span className="font-semibold text-white">TXT RENZ FF</span>
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button href="/docs/AllFeature">Get Started</Button>
                <Button
                  href="https://www.tiktok.com/@4rnz_eliteee"
                  variant="secondary"
                >
                  View on TikTok
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background blur images */}
      <Image
        className="absolute -bottom-40 -right-64 grayscale opacity-50"
        src={blurCyanImage}
        alt=""
        width={530}
        height={530}
        unoptimized
        priority
      />
      <Image
        className="absolute -bottom-20 -left-40 grayscale opacity-50"
        src={blurIndigoImage}
        alt=""
        width={567}
        height={567}
        unoptimized
        priority
      />

      <HeroBackground className="absolute inset-0" />
    </div>
  )
}
