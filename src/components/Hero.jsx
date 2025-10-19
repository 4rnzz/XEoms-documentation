import Image from 'next/future/image'
import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'
import XEomsImage from '@/images/XEoms.png'

export function Hero() {
return (
<div className="overflow-hidden bg-neutral-900 py-16 lg:py-20 relative">
<div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10 text-center">
<h1 className="text-5xl font-bold text-white mb-4">
亗 XΞoms Latest Version
</h1>
<p className="text-2xl text-neutral-400 mb-8">
Tiktok: <span className="font-semibold text-white">TXT RENZ FF</span>
</p>

{/* Single main image */}  
    <div className="mx-auto max-w-md">  
      <Image  
        src={XEomsImage}  
        alt="XEoms Hero"  
        width={600}  
        height={600}  
        className="rounded-xl shadow-lg"  
      />  
    </div>  

    <div className="mt-8 flex justify-center gap-4">  
      <Button href="/docs/AllFeature">Get Started</Button>  
      <Button href="https://www.tiktok.com/@4rnz_eliteee" variant="secondary">  
        View on Tiktok  
      </Button>  
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
