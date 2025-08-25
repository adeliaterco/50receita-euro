import { Button } from "@/components/ui/button"
import { Check, Shield, CreditCard, Award } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const checkoutUrl = "https://pay.hotmart.com/T101544847H?checkoutMode=10"
  const guaranteeImageUrl =
    "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/original-8d34935a6d5cfcb53083fb9d284ce723.webp"

  return (
    <>
      <link rel="preload" href="/images/recipe-book.png" as="image" />
      <link rel="preconnect" href="https://pay.hotmart.com" />
      <link rel="preconnect" href="https://nutricaoalimentos.shop" />

      <div className="min-h-screen bg-gray-50">
        {/* Header with urgency */}
        <div className="bg-green-800 text-white text-center py-2 px-4">
          <p className="text-sm font-medium">HURRY! You&apos;ve got a 57% discount.</p>
        </div>

        {/* Main offer section */}
        <div className="max-w-2xl mx-auto px-4 py-6 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">Congratulations!!</h1>
          <p className="text-base sm:text-xl text-gray-700 mb-6">
            Your discount has been{" "}
            <span className="bg-orange-500 text-white px-2 py-1 rounded">successfully activated</span>.
          </p>

          <div className="mb-6">
            <Image
              src="/images/recipe-book.png"
              alt="50 Quick & Healthy Recipes"
              width={240}
              height={320}
              priority
              sizes="(max-width: 640px) 240px, 300px"
              className="mx-auto w-full max-w-[240px] sm:max-w-xs h-auto object-contain rounded-lg shadow-lg"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-6 text-sm">
            <div className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>7-Day Guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>Instant access</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>Exclusive Bonuses</span>
            </div>
          </div>

          <a href={checkoutUrl} className="block w-full" rel="noopener">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-base px-6 py-3 rounded-lg mb-4 w-full max-w-md mx-auto font-semibold">
              YES, I WANT TO BUY WITH 57% OFF
            </Button>
          </a>

          <div className="flex justify-center gap-6 text-xs text-gray-600">
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-4 h-4" />
              <span>Secure</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Award className="w-4 h-4" />
              <span>Guarantee</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <CreditCard className="w-4 h-4" />
              <span>Protected</span>
            </div>
          </div>
        </div>

        {/* Guarantee section */}
        <div className="bg-gray-100 py-8">
          <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-4">
            <div className="flex-shrink-0">
              <Image
                src={guaranteeImageUrl || "/placeholder.svg"}
                alt="100% Satisfaction Guarantee"
                width={120}
                height={120}
                loading="lazy"
                sizes="(max-width: 640px) 120px, 200px"
                className="w-24 h-auto sm:w-40 object-contain"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-3">7-Day Satisfaction Guarantee</h2>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                We believe so strongly in our product that we offer a 100% risk-free 7-day challenge. If for any reason
                you don&apos;t feel the results, simply request a cancellation within 7 days and get a full refund — no
                questions asked
              </p>
              <a href={checkoutUrl} rel="noopener">
                <Button className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg w-full sm:w-auto">
                  BUY NOW WITH GUARANTEE
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bonus section */}
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-2">
            <span className="bg-orange-500 text-white px-2 py-1 rounded">You&apos;ve Unlocked</span> 2 Super Bonuses!
          </h2>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            When you order today, you&apos;ll also receive 2 exclusive digital ebooks for FREE, delivered directly to
            your email.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <div className="flex-1 max-w-[200px] sm:max-w-xs mx-auto">
              <Image
                src="/images/meal-planner.png"
                alt="Weekly Meal Planner"
                width={200}
                height={267}
                loading="lazy"
                sizes="(max-width: 640px) 200px, 300px"
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 max-w-[200px] sm:max-w-xs mx-auto">
              <Image
                src="/images/shopping-guide.png"
                alt="Your Healthy Shopping Guide"
                width={200}
                height={267}
                loading="lazy"
                sizes="(max-width: 640px) 200px, 300px"
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>

          <a href={checkoutUrl} className="block w-full" rel="noopener">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-base px-6 py-3 rounded-lg mb-4 w-full max-w-md mx-auto font-semibold">
              I WANT TO BUY AND GET THE BONUS
            </Button>
          </a>

          <div className="flex justify-center gap-6 text-xs text-gray-600">
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-4 h-4" />
              <span>Secure</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Award className="w-4 h-4" />
              <span>Guarantee</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <CreditCard className="w-4 h-4" />
              <span>Protected</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-8">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl sm:text-3xl font-bold text-center text-gray-900 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2">
                  1. How does the discount and bonus work?
                </h3>
                <p className="text-gray-700 text-sm">
                  Once you&apos;re on this page, your discount is already activated. Simply choose one of the buttons
                  above, proceed to checkout, and your discount + free bonuses will be automatically applied.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2">2. Is delivery guaranteed?</h3>
                <p className="text-gray-700 text-sm">
                  Yes! You&apos;ll receive instant access to your eBooks right after payment.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-2">
                  3. How long is this offer available?
                </h3>
                <p className="text-gray-700 text-sm">
                  This is a limited-time promotion. Once the countdown ends, this offer may be removed without notice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-green-800 text-white py-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm mb-2">HEALTH NUTRI</p>
            <div className="flex justify-center gap-4 text-xs">
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
