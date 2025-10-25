// "use client";
// import Image from "next/image";
// import Container from "./container";
// import HeadingTwo from "./heading-two";
// import { useState } from "react";

// const PricingFees = () => {
//   const [expanded, setExpanded] = useState<number | null>(null);
//   const toggleExpand = (name: number) => {
//     setExpanded((prev) => (prev === name ? null : name));
//   };

//   return (
//     <>
//       <Container>
//         <HeadingTwo classes="text-center">Our Pricing</HeadingTwo>
//         <p className="text-sm text-center text-[#333]">
//           Our treatment fees are designed to reflect the quality and care you’ll
//           receive. Please keep in mind that costs may vary slightly depending on
//           the complexity of your individual needs, and we’ll always discuss
//           these with you during your assessment to ensure transparency.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
//           {FEES_PRICING.map((item, index) => (
//             <div
//               key={item.name}
//               onClick={() => toggleExpand(index)}
//               className={`flex flex-col relative gap-4 text-olive-dark shadow-[0_2px_11px_1px_#0000001c] transition-all duration-300 hover:shadow-[0_2px_11px_1px_#9E7F61] p-4 py-6 rounded-2xl cursor-pointer
//                       }`}>
//               <div className="flex items-center justify-center">
//                 <Image
//                   width={150}
//                   height={150}
//                   quality={95}
//                   className={`w-14 ${item.imageSmall ? "h-10 mb-3" : "h-14"}`}
//                   src={item.image}
//                   alt={item.name}
//                 />
//               </div>
//               <h3 className="text-center text-black">{item.name}</h3>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </>
//   );
// };

// export default PricingFees;
