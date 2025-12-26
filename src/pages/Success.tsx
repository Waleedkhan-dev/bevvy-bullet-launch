import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfettiExplosion from 'react-confetti-explosion';

const Success = () => {
    const navigate = useNavigate();
    const [isExploding, setIsExploding] = useState(true);

    useEffect(() => {
        setIsExploding(true);
    }, []);

    return (
        <div className="min-h-screen bg-bevvy-dark flex items-center justify-center p-5">
            <div className="text-center max-w-2xl relative">
                {isExploding && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <ConfettiExplosion
                            force={0.8}
                            duration={3000}
                            particleCount={250}
                            width={1600}
                            colors={['#ff0080', '#e9008c', '#ff1493', '#c71585', '#ffffff']}
                        />
                    </div>
                )}

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 font-mono tracking-tighter">
                    🎉 Congratulations!
                </h1>

                <p className="text-2xl md:text-3xl lg:text-4xl text-bevvy-pink mb-8 font-mono font-bold">
                    YOUR PAYMENT WAS SUCCESSFUL
                </p>

                <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                    Thank you for your order! Get ready to start throwing drinks instead of walking for them.
                </p>

                <button 
                    onClick={() => navigate('/')}
                    className="bg-bevvy-pink hover:bg-bevvy-pink-dark text-white font-bold py-4 px-12 text-lg font-mono uppercase tracking-wider rounded-lg transition-all duration-300 shadow-lg shadow-bevvy-pink/30 hover:shadow-xl hover:shadow-bevvy-pink/50 hover:-translate-y-0.5 active:translate-y-0"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default Success;