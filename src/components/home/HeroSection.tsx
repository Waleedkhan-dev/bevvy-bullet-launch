import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import HeroImg from "@/images/heroimg.png";
import HeroImg1 from "@/images/image.png";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';



export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState<number>(47293182);
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [rotatingTextIndex, setRotatingTextIndex] = useState(0);
  const [rotatingButtonIndex, setRotatingButtonIndex] = useState(0);
  const { toast } = useToast();

  const rotatingTexts = [
    "You wish your tailgate had this",
    "Literally the easiest party flex",
    "Turn any can into a backyard legend",
    "Your uncle's definitely stealing this",
  ];

  const rotatingButtonTexts = [
    "JOIN THE REVOLUTION",
    "I'M DONE WALKING",
    "END MY 47 MILES",
    "I'M NEVER FETCHING AGAIN",
    "BE THE FIRST TO THROW",
    "THE FETCH ENDS WITH ME",
    "NO MORE FETCH QUESTS",
    "47 MILES IS ENOUGH",
    "STOP THE WALKING",
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Rotating text - changes every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingButtonIndex((prev) => (prev + 1) % rotatingButtonTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmailSubmitted(true);
    setShowPhonePopup(true);
  };


  const handlePhoneSubmit = async (skipPhone = false) => {
    setIsLoading(true);
    setShowPhonePopup(false);

    try {
      const payload: any = { action: "update_email", email };
      if (!skipPhone && phone) {
        payload.phone = phone;
        payload.action = "update_phone";
      }

      await axios.post(
        "https://bevvy-bullet.app.n8n.cloud/webhook/email-capture",
        payload
      );

      toast({
        title: "You're in! 🎉",
        description: skipPhone
          ? "You'll be the first to know when we launch."
          : "You'll get exclusive text alerts + early access.",
      });

      setEmail("");
      setPhone("");
      setEmailSubmitted(false);
    } catch (error) {
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
      setEmailSubmitted(false);
    } finally {
      setIsLoading(false);
    }
  };



  const imageArray = [HeroImg, HeroImg1, HeroImg, HeroImg1, HeroImg];


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern w-full">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 sm:left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Headline with Counter */}
            <h1 className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
              AMERICANS HAVE WALKED{" "}
              <span className="text-primary">{formatNumber(count)}</span> MILES
              FOR OTHER PEOPLE'S DRINKS
            </h1>

            {/* Rotating Text */}
            <div className="h-8 mb-4 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={rotatingTextIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm md:text-base text-muted-foreground italic"
                >
                  {rotatingTexts[rotatingTextIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-primary uppercase mb-6 max-w-xl font-bold">
              THE LAKE INCIDENT THAT STARTED A REVOLUTION
            </p>

            {/* Tagline */}
            <p className="text-base md:text-lg text-foreground/90 mb-8 max-w-xl leading-relaxed">
              One bad throw. One near concussion. One question: Why are we
              throwing metal cans at people we love?
            </p>

            {/* Three Bullets */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground font-mono font-bold tracking-wide">
                  PHYSICS: FIXED
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground font-mono font-bold tracking-wide">
                  FETCH: ENDED
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-foreground font-mono font-bold tracking-wide">
                  REVOLUTION: STARTING
                </span>
              </div>
            </div>

            {/* Email Signup Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="glass-card p-4 sm:p-6 w-full lg:max-w-md border-primary/30"
            >
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-sm">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background border-border focus:border-primary mt-1"
                    required
                    disabled={emailSubmitted}
                  />
                </div>

                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  className="w-full"
                  disabled={isLoading || emailSubmitted}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                      />
                      Joining...
                    </span>
                  ) : (
                    rotatingButtonTexts[rotatingButtonIndex]
                  )}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Get early access when we launch
              </p>
            </motion.div>
          </motion.div>



          {/* Right Content - Product Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full flex items-center justify-center"
          >
            <div className="w-full">
              <Swiper
                loop={true}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                // slidesPerView="auto"
                slidesPerView={1}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 150,
                  modifier: 2.5,
                  slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="hero-swiper"
              >
                {imageArray.map((img, index) => (
                  <SwiperSlide key={index} className="hero-slide">
                    <img
                      src={img}
                      alt={`Bevvy Bullet Product ${index + 1}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Phone Number Popup */}
      <AnimatePresence>
        {showPhonePopup && (
          <>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => handlePhoneSubmit(true)}
            />

            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 100, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 100, y: 100 }}
              className="fixed bottom-4 right-4 w-full max-w-md z-50 px-4"
            >
              <div className="glass-card p-6 sm:p-8 border-primary/30 relative">
                {/* Close Button */}
                <button
                  onClick={() => handlePhoneSubmit(true)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Headline */}
                <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-4 text-primary">
                  WANT TO SKIP THE LINE?
                </h2>

                {/* Text */}
                <p className="text-foreground/90 mb-6">
                  First to know when we launch via text. Exclusive colorways
                  and accessories coming.
                </p>


                <div className="mb-6">
                  <Label htmlFor="phone-popup" className="text-sm mb-2 block">
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone-popup"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>


                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 whitespace-nowrap"
                    onClick={() => handlePhoneSubmit(true)}
                    disabled={isLoading}
                  >
                    SKIP
                  </Button>
                  <Button
                    variant="glow"
                    size="lg"
                    className="flex-1 whitespace-normal sm:whitespace-nowrap text-xs sm:text-sm"
                    onClick={() => handlePhoneSubmit(false)}
                    disabled={isLoading || !phone}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      "GET EXCLUSIVE ACCESS"
                    )}
                  </Button>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};