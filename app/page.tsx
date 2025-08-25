import { Button } from "@/components/ui/button"
import { Check, Shield, CreditCard, Award } from "lucide-react"

export default function LandingPage() {
  const checkoutUrl = "https://pay.hotmart.com/T101544847H?off=gjxwfvpo"
  const guaranteeImageUrl =
    "https://nutricaoalimentos.shop/wp-content/uploads/2025/08/original-8d34935a6d5cfcb53083fb9d284ce723.webp"

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header with urgency */}
        <div className="bg-green-800 text-white text-center py-3 px-4">
          <p className="text-sm sm:text-base font-medium">HURRY! You've got a 57% discount.</p>
        </div>

        {/* Main offer section */}
        <div className="max-w-2xl mx-auto px-4 py-8 sm:py-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Congratulations!!</h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            Your discount has been{" "}
            <span className="bg-orange-500 text-white px-2 py-1 rounded">successfully activated</span>.
          </p>

          {/* Product image */}
          <div className="mb-8">
            <img
              src="/images/recipe-book.png"
              alt="50 Quick & Healthy Recipes"
              className="mx-auto w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-6 mb-8 text-sm">
            <div className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>7-Day Guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Instant access</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Exclusive Bonuses</span>
            </div>
          </div>

          <a href={checkoutUrl} className="block w-full">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg px-6 sm:px-8 py-4 rounded-lg mb-6 w-full max-w-md mx-auto font-semibold">
              YES, I WANT TO BUY WITH 57% OFF
            </Button>
          </a>

          {/* Security badges */}
          <div className="flex justify-center gap-4 sm:gap-8 text-xs text-gray-600">
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-center">Secure Checkout</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-center">Satisfaction Guarantee</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-center">Protected Payment</span>
            </div>
          </div>
        </div>

        {/* Guarantee section */}
        <div className="bg-gray-100 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-shrink-0">
              <img
                src={guaranteeImageUrl || "/placeholder.svg"}
                alt="100% Satisfaction Guarantee"
                className="w-32 h-auto sm:w-60 sm:h-auto object-contain"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">7-Day Satisfaction Guarantee</h2>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                We believe so strongly in our product that we offer a 100% risk-free 7-day challenge. If for any reason
                you don't feel the results, simply request a cancellation within 7 days and get a full refund — no
                questions asked
              </p>
              <a href={checkoutUrl}>
                <Button className="bg-green-800 hover:bg-green-900 text-white px-6 sm:px-8 py-3 rounded-lg w-full sm:w-auto">
                  BUY NOW WITH GUARANTEE
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bonus section */}
        <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            <span className="bg-orange-500 text-white px-2 sm:px-3 py-1 rounded">You've Unlocked</span> 2 Super Bonuses!
          </h2>
          <p className="text-gray-700 mb-8 text-sm sm:text-base">
            When you order today, you'll also receive 2 exclusive digital ebooks for FREE, delivered directly to your
            email.
            <br />
            Take advantage of this limited-time bonus offer!
          </p>

          {/* Bonus products */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-8">
            <div className="flex-1 max-w-xs mx-auto">
              <img
                src="/images/meal-planner.png"
                alt="Weekly Meal Planner"
                className="w-full h-auto object-contain rounded-lg shadow-lg mb-4"
              />
            </div>
            <div className="flex-1 max-w-xs mx-auto">
              <img
                src="/images/shopping-guide.png"
                alt="Your Healthy Shopping Guide"
                className="w-full h-auto object-contain rounded-lg shadow-lg mb-4"
              />
            </div>
          </div>

          <a href={checkoutUrl} className="block w-full">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg px-6 sm:px-8 py-4 rounded-lg mb-6 w-full max-w-md mx-auto font-semibold">
              I WANT TO BUY AND GET THE BONUS
            </Button>
          </a>

          {/* Security badges again */}
          <div className="flex justify-center gap-4 sm:gap-8 text-xs text-gray-600">
            <div className="flex flex-col items-center gap-1">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-center">Secure Checkout</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-center">Satisfaction Guarantee</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-center">Protected Payment</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  1. How does the discount and bonus work?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Once you're on this page, your discount is already activated. Simply choose one of the buttons above,
                  proceed to checkout, and your discount + free bonuses will be automatically applied.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">2. Is delivery guaranteed?</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Yes! You'll receive instant access to your eBooks right after payment.
                </p>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  3. How long is this offer available?
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  This is a limited-time promotion. Once the countdown ends, this offer may be removed without notice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-green-800 text-white py-6 sm:py-8">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-sm mb-4">HEALTH NUTRI</p>
            <div className="flex justify-center gap-4 sm:gap-6 text-sm">
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
