// // // // src/components/nav.tsx
// // // 'use client'

// // // import Link from 'next/link'
// // // import { usePathname } from 'next/navigation'

// // // export function Nav() {
// // //   const pathname = usePathname()

// // //   return (
// // //     <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
// // //       <nav className="mx-auto max-w-5xl px-6 h-16">
// // //         <div className="flex h-full items-center justify-between">
// // //           <Link 
// // //             href="/" 
// // //             className="text-xl font-semibold"
// // //           >
// // //             Your Name
// // //           </Link>
          
// // //           <div className="hidden md:flex space-x-8">
// // //             {[
// // //               ['About', '/about'],
// // //               ['Blog', '/blog'],
// // //               ['A11y', '/a11y'],
// // //             ].map(([label, href]) => (
// // //               <Link
// // //                 key={href}
// // //                 href={href}
// // //                 className={`text-sm ${
// // //                   pathname === href 
// // //                     ? 'text-black font-medium' 
// // //                     : 'text-gray-500 hover:text-black'
// // //                 }`}
// // //               >
// // //                 {label}
// // //               </Link>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </nav>
// // //     </header>
// // //   )
// // // }

// // // // src/components/nav.tsx
// // 'use client'

// // import Link from 'next/link'
// // import { usePathname } from 'next/navigation'
// // import { useState } from 'react'

// // export function Nav() {
// //   const pathname = usePathname()
// //   const [isMenuOpen, setIsMenuOpen] = useState(false)

// //   return (
// //     <header className="fixed w-full bg-white/95 backdrop-blur-md z-50">
// //       {/* Desktop Navigation */}
// //       <nav className="hidden md:block h-12 border-b border-gray-200">
// //         <div className="max-w-5xl mx-auto px-4 h-full flex items-center justify-between">
// //           <Link 
// //             href="/" 
// //             className="text-[22px] font-medium text-gray-900"
// //           >
// //             Newsroom
// //           </Link>
          
// //           <div className="flex items-center space-x-8">
// //             {[
// //               ['Apple Services', '/services'],
// //               ['Apple Stories', '/stories'],
// //             ].map(([label, href]) => (
// //               <Link
// //                 key={href}
// //                 href={href}
// //                 className="text-sm text-gray-600 hover:text-gray-900"
// //               >
// //                 {label}
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       </nav>

// //     {/* Mobile Navigation */}
// //     <nav className="md:hidden">
// //     <div className="flex items-center justify-between h-12 px-4">
// //         <Link 
// //         href="/" 
// //         className="text-[22px] font-medium text-gray-900"
// //         >
// //         Newsroom
// //         </Link>
        
// //         <div className="flex items-center space-x-4">
// //         <button 
// //             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //             className="p-2"
// //             aria-label="Toggle menu"
// //         >
// //             {/* Updated chevron SVG */}
// //             <svg 
// //             width="12" 
// //             height="12" 
// //             viewBox="0 0 12 12"
// //             className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
// //             >
// //             <path 
// //                 d="M6 8.825L11.4 3.425L10.675 2.7L6 7.375L1.325 2.7L0.6 3.425L6 8.825Z"
// //                 fill="currentColor"
// //             />
// //             </svg>
// //         </button>
// //         </div>
// //     </div>

// //     {/* Mobile Menu */}
// //     {isMenuOpen && (
// //         <div className="border-t border-gray-200 bg-white">
// //         <div className="py-3 px-4 space-y-4">
// //             {[
// //             ['Apple Services', '/services'],
// //             ['Apple Stories', '/stories'],
// //             ].map(([label, href]) => (
// //             <Link
// //                 key={href}
// //                 href={href}
// //                 className="block text-[28px] font-medium text-gray-900"
// //             >
// //                 {label}
// //             </Link>
// //             ))}
// //         </div>
// //         </div>
// //     )}
// //     </nav>
// //     </header>
// //   )
// // }


// // src/components/nav.tsx
// 'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { useState, useRef, useEffect } from 'react'

// export function Nav() {
//   const pathname = usePathname()
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const expandAnimation = useRef<SVGAnimateElement>(null)
//   const collapseAnimation = useRef<SVGAnimateElement>(null)

//   const toggleMenu = () => {
//     if (isMenuOpen) {
//       collapseAnimation.current?.beginElement()
//     } else {
//       expandAnimation.current?.beginElement()
//     }
//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <header className="fixed w-full bg-white/95 backdrop-blur-md z-50">
//        {/* Desktop Navigation */}
//        <nav className="hidden md:block h-12 border-b border-gray-200">
//          <div className="max-w-5xl mx-auto px-4 h-full flex items-center justify-between">
//            <Link 
//              href="/" 
//              className="text-[22px] font-medium text-gray-900"
//            >
//              Newsroom
//            </Link>
          
//            <div className="flex items-center space-x-8">
//              {[
//                ['Apple Services', '/services'],
//                ['Apple Stories', '/stories'],
//              ].map(([label, href]) => (
//                <Link
//                  key={href}
//                  href={href}
//                  className="text-sm text-gray-600 hover:text-gray-900"
//                >
//                  {label}
//                </Link>
//              ))}
//            </div>
//          </div>
//        </nav>
//       {/* Mobile Navigation */}
//       <nav className="md:hidden">
//         <div className="flex items-center justify-between h-12 px-4">
//           <Link 
//             href="/" 
//             className="text-[22px] font-medium text-black"
//           >
//             Newsroom
//           </Link>
          
//           <div className="flex items-center space-x-4">
//             <button 
//               onClick={toggleMenu}
//               className="p-2 text-black"
//               aria-label="Toggle menu"
//               aria-expanded={isMenuOpen}
//             >
//               <svg 
//                 viewBox="0 0 16 9" 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 className="w-4 h-4"
//               >
//                 <polyline 
//                   shapeRendering="geometricPrecision"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   vectorEffect="non-scaling-stroke"
//                   strokeLinejoin="round"
//                   fill="none"
//                   fillRule="evenodd"
//                   points="15.265 .835 8 8.167 .735 .835"
//                 >
//                   <animate
//                     ref={expandAnimation}
//                     attributeName="points"
//                     values="15.265 .835 8 8.167 .735 .835;
//                             15.25 4.5 8 4.5 .75 4.5;
//                             15.265 8.165 8 .835 .735 8.165"
//                     dur="320ms"
//                     begin="indefinite"
//                     fill="freeze"
//                     keyTimes="0; 0.5; 1"
//                     calcMode="spline"
//                     keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"
//                   />
//                   <animate
//                     ref={collapseAnimation}
//                     attributeName="points"
//                     values="15.265 8.165 8 .835 .735 8.165;
//                             15.25 4.5 8 4.5 .75 4.5;
//                             15.265 .835 8 8.167 .735 .835"
//                     dur="320ms"
//                     begin="indefinite"
//                     fill="freeze"
//                     keyTimes="0; 0.5; 1"
//                     calcMode="spline"
//                     keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"
//                   />
//                 </polyline>
//               </svg>
//             </button>
//             <button className="bg-white rounded-full p-2">
//               <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="border-t border-gray-200 bg-[#f5f5f7]">
//             <div className="py-3 px-4 space-y-4">
//               {[
//                 ['Apple Services', '/services'],
//                 ['Apple Stories', '/stories'],
//               ].map(([label, href]) => (
//                 <Link
//                   key={href}
//                   href={href}
//                   className="block text-[28px] font-medium text-black"
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Desktop Navigation remains the same */}
//     </header>
//   )
// }

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef } from 'react'

export function Nav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const expandAnimation = useRef<SVGAnimateElement>(null)
  const collapseAnimation = useRef<SVGAnimateElement>(null)

  const toggleMenu = () => {
    if (isMenuOpen) {
      collapseAnimation.current?.beginElement()
    } else {
      expandAnimation.current?.beginElement()
    }
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed w-full bg-background/95 backdrop-blur-md z-50">
      {/* Desktop Navigation */}
      <nav className="hidden md:block h-12 border-b border-black/[.08] dark:border-white/[.145]">
        <div className="max-w-5xl mx-auto px-4 h-full flex items-center justify-between">
          <Link 
            href="/" 
            className="text-[22px] font-medium text-foreground"
          >
            Newsroom
          </Link>
          
          <div className="flex items-center space-x-8">
            {[
              ['Apple Services', '/services'],
              ['Apple Stories', '/stories'],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden">
        <div className="flex items-center justify-between h-12 px-4">
          <Link 
            href="/" 
            className="text-[22px] font-medium text-foreground"
          >
            Newsroom
          </Link>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleMenu}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg 
                viewBox="0 0 16 9" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-4 h-4"
              >
                <polyline 
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  strokeLinejoin="round"
                  fill="none"
                  fillRule="evenodd"
                  points="15.265 .835 8 8.167 .735 .835"
                >
                    <animate
                    ref={expandAnimation}
                    attributeName="points"
                    values="15.265 .835 8 8.167 .735 .835;
                            15.25 4.5 8 4.5 .75 4.5;
                            15.265 8.165 8 .835 .735 8.165"
                    dur="320ms"
                    begin="indefinite"
                    fill="freeze"
                    keyTimes="0; 0.5; 1"
                    calcMode="spline"
                    keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"
                  />
                  <animate
                    ref={collapseAnimation}
                    attributeName="points"
                    values="15.265 8.165 8 .835 .735 8.165;
                            15.25 4.5 8 4.5 .75 4.5;
                            15.265 .835 8 8.167 .735 .835"
                    dur="320ms"
                    begin="indefinite"
                    fill="freeze"
                    keyTimes="0; 0.5; 1"
                    calcMode="spline"
                    keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"
                  />
                </polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-black/[.08] dark:border-white/[.145] bg-background">
            <div className="py-3 px-4 space-y-4">
              {[
                ['Apple Services', '/services'],
                ['Apple Stories', '/stories'],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-[28px] font-medium text-foreground"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
