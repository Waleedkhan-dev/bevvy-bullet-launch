import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Check,
  ChevronLeft,
  CreditCard,
  Truck,
  User,
  FileText,
} from "lucide-react";

type Step = "contact" | "shipping" | "payment" | "review";

const steps: { id: Step; label: string; icon: React.ElementType }[] = [
  { id: "contact", label: "Contact", icon: User },
  { id: "shipping", label: "Shipping", icon: Truck },
  { id: "payment", label: "Payment", icon: CreditCard },
  { id: "review", label: "Review", icon: FileText },
];

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState<Step>("contact");
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const subtotal = getTotalPrice();
  const shipping = subtotal >= 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  const currentStepIndex = steps.findIndex((s) => s.id === currentStep);

  const handleNext = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex].id);
    }
  };

  const handleBack = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex].id);
    }
  };

  const handlePlaceOrder = () => {
    toast({
      title: "Order Placed! 🎉",
      description:
        "Thank you for your pre-order. We'll notify you when we launch!",
    });
    clearCart();
    navigate("/");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="font-mono text-3xl font-bold uppercase mb-4">
              Your Cart is Empty
            </h1>
            <Button asChild variant="glow" size="lg">
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Step Indicator */}
          <div className="max-w-3xl mx-auto mb-8 md:mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-mono font-bold transition-colors ${
                        index < currentStepIndex
                          ? "bg-accent text-accent-foreground"
                          : index === currentStepIndex
                          ? "bg-primary text-primary-foreground glow-cyan"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {index < currentStepIndex ? (
                        <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <step.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </div>
                    <span
                      className={`mt-1 sm:mt-2 text-[10px] sm:text-xs font-mono uppercase hidden sm:block ${
                        index <= currentStepIndex
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 sm:w-16 md:w-24 h-0.5 mx-1 sm:mx-2 transition-colors ${
                        index < currentStepIndex ? "bg-accent" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass-card p-6 md:p-8"
              >
                {currentStep === "contact" && (
                  <div className="space-y-6">
                    <h2 className="font-mono text-2xl font-bold uppercase">
                      Contact Information
                    </h2>
                    <div className="grid gap-4">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                        <Input
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                )}

                {currentStep === "shipping" && (
                  <div className="space-y-6">
                    <h2 className="font-mono text-2xl font-bold uppercase">
                      Shipping Address
                    </h2>
                    <div className="grid gap-4">
                      <Input
                        name="address"
                        placeholder="Street Address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input
                          name="city"
                          placeholder="City"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                        <Input
                          name="state"
                          placeholder="State"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <Input
                          name="zip"
                          placeholder="ZIP Code"
                          value={formData.zip}
                          onChange={handleInputChange}
                          required
                        />
                        <Input
                          name="country"
                          placeholder="Country"
                          value={formData.country}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === "payment" && (
                  <div className="space-y-6">
                    <h2 className="font-mono text-2xl font-bold uppercase">
                      Payment Method
                    </h2>
                    <div className="glass-card p-6 border-2 border-primary">
                      <div className="flex items-center gap-4 mb-4">
                        <CreditCard className="w-8 h-8 text-primary" />
                        <div>
                          <h3 className="font-mono font-bold">Credit Card</h3>
                          <p className="text-sm text-muted-foreground">
                            Pay securely with your card
                          </p>
                        </div>
                      </div>
                      <div className="grid gap-4">
                        <Input placeholder="Card Number" />
                        <div className="grid grid-cols-2 gap-4">
                          <Input placeholder="MM/YY" />
                          <Input placeholder="CVC" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === "review" && (
                  <div className="space-y-6">
                    <h2 className="font-mono text-2xl font-bold uppercase">
                      Review Your Order
                    </h2>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-4 p-4 bg-muted rounded-lg"
                        >
                          <div className="w-16 h-16 bg-background-secondary rounded flex items-center justify-center text-2xl">
                            🏈
                          </div>
                          <div className="flex-1">
                            <h4 className="font-mono font-bold text-sm uppercase">
                              {item.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Qty: {item.quantity}
                            </p>
                          </div>
                          <span className="font-mono font-bold text-primary">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-mono font-bold text-sm uppercase mb-2">
                        Shipping To:
                      </h4>
                      <p className="text-muted-foreground">
                        {formData.firstName} {formData.lastName}
                        <br />
                        {formData.address}
                        <br />
                        {formData.city}, {formData.state} {formData.zip}
                        <br />
                        {formData.country}
                      </p>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8">
                  {currentStepIndex > 0 && (
                    <Button variant="outline" onClick={handleBack}>
                      <ChevronLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                  )}
                  {currentStep !== "review" ? (
                    <Button
                      variant="glow"
                      onClick={handleNext}
                      className="ml-auto"
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      variant="glow"
                      onClick={handlePlaceOrder}
                      className="ml-auto"
                    >
                      Place Order
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-24">
                <h2 className="font-mono text-xl font-bold uppercase mb-6">
                  Order Summary
                </h2>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-mono">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-mono">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-mono">
                        {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between">
                      <span className="font-mono font-bold uppercase">
                        Total
                      </span>
                      <span className="font-mono text-2xl font-bold text-primary">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
