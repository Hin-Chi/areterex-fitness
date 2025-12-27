import { Activity, BadgeCheck, LineChart, ShieldCheck } from 'lucide-react';
import * as motion from 'motion/react-client';
export default function WhyChooseUs() {
    
    const features = [
        {
            icon: BadgeCheck,
            title: "ACE Certified Expertise",
            description: "We don't guess; we calculate. As an ACE Certified professional, my programs are built on the Gold Standard of exercise science, ensuring every movement is safe, effective, and purposeful."
        },
        {
            icon: LineChart,
            title: "Data-Driven Programming",
            description: "Whether you are focusing on hypertrophy, endurance, or hybrid training, we use performance metrics to track your progress and adjust your plan in real-time."
        },
        {
            icon: Activity,
            title: "Total Body Approach",
            description: "Fitness isn't just about the hour you spend in the gym. We integrate sports nutrition, recovery protocols, and lifestyle coaching to ensure you succeed 24/7."
        },
        {
            icon: ShieldCheck,
            title: "Safety First",
            description: "Push your limits without breaking your body. We prioritize proper biomechanics and injury prevention so you can train hard today and still move well tomorrow."
        }
    ]

    return  ( <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2 
                        initial={{opacity:0, y:16}} 
                        whileInView = {{opacity:1, y: 0}}
                        transition={{duration: 0.6, ease: "easeOut"}}
                        viewport={{once: true}}
                        className="text-4xl md:text-5xl font-black font-heading mb-4
                        text-foreground">Why Choose <span className="text-primary">Areterex</span>?
                        </motion.h2>
                        <motion.p 
                        initial={{opacity:0, y:12}} 
                        whileInView = {{opacity:1, y: 0}}
                        transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                        viewport={{once: true}}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto">In a fitness world full of influencers and unproven trends, we prioritize science, safety, and sustainable results.</motion.p>
                    </div>
                
                {/*Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div key={feature.title} 
                        className="group text-center"
                        initial={{opacity: 0, y:24}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.6, ease: "easeOut", delay: index * 0.12}}
                        whileHover={{scale: 1.03}}
                       
                       >
                        <motion.div className="w-16 h-16 rounded-full bg-primary/20 
                        text-primary
                        inline-flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground
                        transition-colors duration-300 mb-6"
                        initial={{scale:0.9, opacity:0}}
                        whileInView={{scale:1, opacity:1}}
                        viewport={{once:true}}
                        transition={
                            {duration:0.5,
                            ease: "easeOut",
                            delay: index * 0.18}}

                        >
                            <feature.icon className="w-8 h-8"></feature.icon>
                        </motion.div>
                        <motion.h3 className="text-xl font-bold font-heading mb-4 
                        text-foreground"
                        initial={{opacity: 0, y: 8}}
                        whileInView={{opacity:1, y:0}}
                        viewport={{once:true}}
                        transition={{duration:0.5, ease: "easeOut", delay: index * 0.14}}
                        >{feature.title}</motion.h3>
                        <motion.p
                        initial={{opacity: 0}}
                        whileInView={{opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:0.5, ease: "easeOut", delay: index * 0.14}}

                        className="text-muted-foreground leading-relaxed"
                        
                        >{feature.description}</motion.p>             


                 </motion.div>
                    ))}
                </div>
                </div>
            </section>
     );
}