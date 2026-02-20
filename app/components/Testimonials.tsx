
// "use client";

// import { motion } from "framer-motion";
// import { Quote } from "lucide-react";

// const testimonials = [
//     {
//         name: "John Doe",
//         role: "Startup Founder",
//         text: "Siddhartha allows us to move faster with confidence. His attention to detail and ability to translate designs into code is matched by few.",
//     },
//     {
//         name: "Jane Smith",
//         role: "Project Manager",
//         text: "Working with Siddhartha was a pleasure. He is proactive, communicative, and delivers high-quality work on time.",
//     },
//     {
//         name: "Mike Johnson",
//         role: "Tech Lead",
//         text: "Impressive technical skills and a great problem solver. He quickly understood our complex requirements and delivered a robust solution.",
//     },
// ];

// export default function Testimonials() {
//     return (
//         <section id="testimonials" className="py-20 bg-background/50 relative overflow-hidden">
//             <div className="container px-6 mx-auto">
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     className="text-center mb-16"
//                 >
//                     <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                         Client <span className="text-primary">Stories</span>
//                     </h2>
//                     <p className="text-text_secondary max-w-2xl mx-auto">
//                         Feedback from people I have worked with.
//                     </p>
//                 </motion.div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {testimonials.map((testimonial, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             className="bg-white/5 border border-white/10 p-8 rounded-2xl relative"
//                         >
//                             <Quote className="absolute top-8 right-8 text-white/10 h-12 w-12" />
//                             <p className="text-text_secondary mb-6 relative z-10 italic">
//                                 "{testimonial.text}"
//                             </p>
//                             <div>
//                                 <h4 className="font-bold text-text_primary">{testimonial.name}</h4>
//                                 <p className="text-sm text-primary">{testimonial.role}</p>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
