import React, { Fragment } from 'react'

const VIPOffer = () => {
    const BASE_URL = "http://localhost:3000"
    const handleTransCript = async () => {
       const res = await fetch(`${BASE_URL}/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [{
            id: "vip-backer",
            name: "VIP Backer",
            price: 1,
            quantity: 1,
          }],
          shippingCost: 0,
        }),
      });
      if (!res.ok) {
        throw new Error("Failed to create checkout session");
      }
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL received");
      }
    }
  return (
    <Fragment>
      <section className="bg-bevvy-dark py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Info */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-mono">
                Become a <span className="text-bevvy-pink">VIP Backer</span>
              </h2>
              
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Lock in your exclusive early-bird pricing with just $1. Get priority access, exclusive updates, and guaranteed lowest price when we launch.
              </p>

              {/* Benefits List */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-bevvy-pink rounded-md flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Guaranteed Lowest Price</h3>
                    <p className="text-gray-400">Lock in up to 40% off retail — the best deal we'll ever offer.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-bevvy-pink rounded-md flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Exclusive VIP Community</h3>
                    <p className="text-gray-400">Join our private Discord with direct access to the founders.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-bevvy-pink rounded-md flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Behind-the-Scenes Updates</h3>
                    <p className="text-gray-400">Weekly video updates and first look at new features.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-bevvy-pink rounded-md flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Priority Shipping</h3>
                    <p className="text-gray-400">VIP backers get their orders shipped first.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - VIP Card */}
            <div className="relative">
         
              <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold py-2 px-4 rounded-lg shadow-lg transform rotate-12 z-10">
                HOT DEAL
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
           
                <div className="text-center mb-8">
                  <div className="flex items-start justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-800 mt-2">$</span>
                    <span className="text-8xl font-bold text-gray-900 font-mono">1</span>
                  </div>
                  <p className="text-gray-500 text-sm">Refundable deposit</p>
                </div>

           
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                  VIP Early Access
                </h3>
                <p className="text-gray-600 text-center mb-8">
                  Reserve your spot now and save big on launch day
                </p>

         
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-bevvy-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Up to 40% Early Bird Discount</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-bevvy-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Exclusive VIP Discord Access</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-bevvy-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Weekly Founder Updates</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-bevvy-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">First Access to Limited Editions</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-bevvy-pink flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Beta Testing Opportunities</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button onClick={handleTransCript}  className="w-full bg-bevvy-pink hover:bg-bevvy-pink-dark bg-primary text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-bevvy-pink/30 hover:shadow-xl hover:shadow-bevvy-pink/50 font-mono uppercase tracking-wider flex items-center justify-center gap-2">
                  Reserve My VIP Spot
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                {/* Refund Notice */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <svg className="w-4 h-4 text-bevvy-pink" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-gray-500">100% refundable if you change your mind</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default VIPOffer