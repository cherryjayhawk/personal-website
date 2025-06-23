"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

interface RippleButtonProps extends ButtonProps {
  children: React.ReactNode;
  rippleClassName?: string;
  rippleDuration?: number;
  rippleScale?: number;
  enableTapScale?: boolean;
  tapScale?: number;
  asChild?: boolean;
}

const RippleButton: React.FC<RippleButtonProps> = ({ 
  children, 
  className = "", 
  rippleClassName = "bg-white/30",
  rippleDuration = 1.2,
  rippleScale = 2,
  enableTapScale = true,
  tapScale = 0.98,
  asChild = false,
  ...props 
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * rippleScale;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const newRipple: Ripple = {
      x,
      y,
      size,
      id: Date.now() + Math.random()
    };

    setRipples(prev => [...prev, newRipple]);
  };

  const removeRipple = (id: number) => {
    setRipples(prev => prev.filter(ripple => ripple.id !== id));
  };

  const buttonContent = enableTapScale ? (
    <motion.span 
      className="relative z-10"
      whileTap={{ scale: tapScale }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.span>
  ) : (
    <span className="relative z-10">
      {children}
    </span>
  );

  return (
    <Button
      className={`relative overflow-hidden ${className}`}
      onMouseDown={createRipple}
      asChild={asChild}
      {...props}
    >
      {asChild ? (
        // When asChild is true, clone the child element and add ripple functionality
        React.cloneElement(children as React.ReactElement, {
          className: `relative overflow-hidden ${className}`,
          onMouseDown: createRipple,
          children: (
            <>
              {enableTapScale ? (
                <motion.span 
                  className="relative z-10"
                  whileTap={{ scale: tapScale }}
                  transition={{ duration: 0.1 }}
                >
                  {(children as React.ReactElement).props.children}
                </motion.span>
              ) : (
                <span className="relative z-10">
                  {(children as React.ReactElement).props.children}
                </span>
              )}
              
              <AnimatePresence>
                {ripples.map((ripple) => (
                  <motion.span
                    key={ripple.id}
                    className={`absolute rounded-full pointer-events-none ${rippleClassName}`}
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      width: ripple.size,
                      height: ripple.size,
                    }}
                    initial={{ 
                      scale: 0, 
                      opacity: 0.8,
                    }}
                    animate={{ 
                      scale: 1, 
                      opacity: 0,
                    }}
                    transition={{
                      duration: rippleDuration,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    onAnimationComplete={() => removeRipple(ripple.id)}
                  />
                ))}
              </AnimatePresence>
            </>
          )
        })
      ) : (
        <>
          {buttonContent}
          
          <AnimatePresence>
            {ripples.map((ripple) => (
              <motion.span
                key={ripple.id}
                className={`absolute rounded-full pointer-events-none ${rippleClassName}`}
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: ripple.size,
                  height: ripple.size,
                }}
                initial={{ 
                  scale: 0, 
                  opacity: 0.8,
                }}
                animate={{ 
                  scale: 1, 
                  opacity: 0,
                }}
                transition={{
                  duration: rippleDuration,
                  ease: [0.23, 1, 0.32, 1],
                }}
                onAnimationComplete={() => removeRipple(ripple.id)}
              />
            ))}
          </AnimatePresence>
        </>
      )}
    </Button>
  );
};

export default RippleButton;

// const Demo: React.FC = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
//       <div className="max-w-6xl mx-auto text-center space-y-8">
//         <motion.div 
//           className="space-y-4"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl font-bold text-white mb-2">
//             Customizable Tailwind Ripple Buttons
//           </h1>
//           <p className="text-slate-300 text-lg">
//             Fully customizable with Tailwind classes and props
//           </p>
//         </motion.div>

//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           {/* Default white ripple */}
//           <div className="space-y-3">
//             <RippleButton 
//               size="lg" 
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white"
//             >
//               Default Ripple
//             </RippleButton>
//             <p className="text-sm text-slate-400">bg-white/30 (default)</p>
//           </div>

//           {/* Custom blue ripple */}
//           <div className="space-y-3">
//             <RippleButton 
//               size="lg" 
//               className="w-full bg-purple-600 hover:bg-purple-700 text-white"
//               rippleClassName="bg-cyan-400/40"
//             >
//               Cyan Ripple
//             </RippleButton>
//             <p className="text-sm text-slate-400">bg-cyan-400/40</p>
//           </div>

//           {/* Green gradient ripple */}
//           <div className="space-y-3">
//             <RippleButton 
//               size="lg" 
//               className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
//               rippleClassName="bg-gradient-to-r from-green-300/50 to-emerald-300/50"
//             >
//               Gradient Ripple
//             </RippleButton>
//             <p className="text-sm text-slate-400">Gradient background</p>
//           </div>

//           {/* Fast ripple */}
//           <div className="space-y-3">
//             <RippleButton 
//               size="lg" 
//               className="w-full bg-red-600 hover:bg-red-700 text-white"
//               rippleClassName="bg-yellow-400/60"
//               rippleDuration={0.6}
//             >
//               Fast Ripple
//             </RippleButton>
//             <p className="text-sm text-slate-400">Duration: 0.6s</p>
//           </div>

//           {/* Slow large ripple */}
//           <div className="space-y-3">
//             <RippleButton 
//               size="lg" 
//               className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
//               rippleClassName="bg-pink-400/50"
//               rippleDuration={2.0}
//               rippleScale={3}
//             >
//               Slow Large Ripple
//             </RippleButton>
//             <p className="text-sm text-slate-400">Duration: 2s, Scale: 3x</p>
//           </div>

//           {/* Dark button with light ripple */}
//           <div className="space-y-3">
//             <RippleButton 
//               variant="outline"
//               size="lg" 
//               className="w-full bg-white text-black border-slate-300 hover:bg-slate-50"
//               rippleClassName="bg-black/20"
//               enableTapScale={false}
//             >
//               No Tap Scale
//             </RippleButton>
//             <p className="text-sm text-slate-400">Tap scale disabled</p>
//           </div>

//           {/* Link as Button example */}
//           <div className="space-y-3">
//             <RippleButton 
//               asChild
//               size="lg" 
//               className="w-full bg-green-600 hover:bg-green-700 text-white"
//               rippleClassName="bg-emerald-300/50"
//             >
//               <Link href="/dashboard">
//                 Link to Dashboard
//               </Link>
//             </RippleButton>
//             <p className="text-sm text-slate-400">Next.js Link with ripple</p>
//           </div>

//           {/* External link */}
//           <div className="space-y-3">
//             <RippleButton 
//               asChild
//               size="lg" 
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white"
//               rippleClassName="bg-sky-300/50"
//             >
//               <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
//                 External Link
//               </a>
//             </RippleButton>
//             <p className="text-sm text-slate-400">External link with ripple</p>
//           </div>

//           {/* Blur ripple */}
//           <div className="space-y-3">
//             <RippleButton 
//               size="lg" 
//               className="w-full bg-orange-600 hover:bg-orange-700 text-white"
//               rippleClassName="bg-yellow-300/40 backdrop-blur-sm"
//             >
//               Blur Ripple
//             </RippleButton>
//             <p className="text-sm text-slate-400">With backdrop blur</p>
//           </div>

//           {/* Custom tap scale */}
//           <div className="space-y-3">
//             <RippleButton 
//               size="lg" 
//               className="w-full bg-teal-600 hover:bg-teal-700 text-white"
//               rippleClassName="bg-emerald-400/50"
//               tapScale={0.92}
//             >
//               Strong Tap Scale
//             </RippleButton>
//             <p className="text-sm text-slate-400">Tap scale: 0.92</p>
//           </div>
//         </motion.div>

//         <motion.div 
//           className="mt-12 p-6 bg-slate-800/50 rounded-lg border border-slate-700"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <h2 className="text-xl font-semibold text-white mb-4">Customization Props</h2>
//           <div className="text-slate-300 text-left space-y-2 text-sm">
//             <p>• <strong>asChild:</strong> Use with Link or other elements (default: false)</p>
//             <p>• <strong>rippleClassName:</strong> Tailwind classes for ripple styling (default: "bg-white/30")</p>
//             <p>• <strong>rippleDuration:</strong> Animation duration in seconds (default: 1.2)</p>
//             <p>• <strong>rippleScale:</strong> Size multiplier for ripples (default: 2)</p>
//             <p>• <strong>enableTapScale:</strong> Enable/disable tap scale effect (default: true)</p>
//             <p>• <strong>tapScale:</strong> Scale factor for tap animation (default: 0.98)</p>
//             <p>• <strong>className:</strong> Standard button styling with Tailwind</p>
//           </div>
//         </motion.div>

//         <motion.div 
//           className="mt-8 p-6 bg-slate-800/30 rounded-lg border border-slate-600"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           <h3 className="text-lg font-semibold text-white mb-3">Usage Examples</h3>
//           <div className="text-slate-300 text-left space-y-3 text-sm font-mono bg-slate-900/50 p-4 rounded">
//             <p>{'// Regular Button'}</p>
//             <p>{'<RippleButton className="bg-blue-600 text-white">'}</p>
//             <p className="ml-4">{'Click me'}</p>
//             <p>{'</RippleButton>'}</p>
//             <br />
//             <p>{'// Link as Button (NextJS)'}</p>
//             <p>{'<RippleButton asChild>'}</p>
//             <p className="ml-4">{'<Link href="/dashboard">Dashboard</Link>'}</p>
//             <p>{'</RippleButton>'}</p>
//             <br />
//             <p>{'// External Link'}</p>
//             <p>{'<RippleButton asChild>'}</p>
//             <p className="ml-4">{'<a href="https://example.com">External</a>'}</p>
//             <p>{'</RippleButton>'}</p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Demo;