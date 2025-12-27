export const navItems = [
    { name: "Home" , href: "#home"},
    { name: "Programs" , href: "#programs"},
    { name: "About" , href: "#about"},
    { name: "Pricing" , href: "#pricing"},
    { name: "Contact" , href: "#contact"},
]

export const programs = [
    {
        title : "Strength Training",
        description: "Build a solid foundation of raw power through our structured strength program. We focus on compound movements like squats, deadlifts, and presses to increase bone density, improve functional strength, and boost your overall metabolism.", 
        image: "/strength.png"
    },
    {
        title : "Hypertrophy Training",
        description: "Designed specifically for maximum muscle growth, this program utilizes volume-based training to enhance muscle size and definition. Perfect for bodybuilders or anyone looking to sculpt their physique through targeted isolation and compound exercises.",
        image: "/hyper.png"
    },
    
    {
        title: "Performance-based Training 1 on 1 For Athletes",
        description: "Elevate your game with specialized coaching tailored to your specific sport. We focus on agility, speed and explosive power to ensure you perform at your peak potential on the field, court, or track.",
        image: "/performance.png"
    },
    {
        title: "General Nutrition",
        description: "Fuel your body right with a balanced, sustainable approach to eating. We provide easy-to-follow meal plans and education on whole foods to help you maintain a healthy weight, boost immunity, and feel your best every day.",
        image: "/nutrition.png"
    },
     {
        title: "Sports Nutrition 1 on 1",
        description: "Optimize your recovery and gains with nutrition plans designed for high-performance training. We cover pre-workout fueling, protein intake, and supplement integration to ensure your diet actively supports your muscle-building goals.",
        image: "/sports.png"
    },
     {
        title: "1 on 1 Personal Training",
        description: "Get expert guidance from anywhere in the world. Our remote personal training offers customized workout plans, real-time form checks, and daily accountability to help you reach your fitness goals from the comfort of your own home.",
        image: "/pt.png"
    },
]

export const plans = [
    {
        name: "Basic",
        price: 999,
        period: "month",
        description: "Perfect for getting started with fitness",
        features: [
            "Limited Video Exercise Library Access",
            "Workout & Diet Plans",
            "Performance Check"
        ],
        cta: "Join Now", 
        popular: false,
        qrImage: "/payments/QR-1.jpeg",
    }, 
    {
        name: "Pro",
        price: 5999,
        period: "month",
        description: "Most popular choice for serious fitness enthusiasts",
        features: [
            "Everything in Basic",
            "15 Personal Training Session",
            "Full Exercise Video Library Access",
            "1-on-1 Live Assessment",
            "Smart Supplement Strategy",
            "Nutrition Consultation",
            "Custom Workout Plans"
        ],
        cta: "Join Now", 
        popular: true,
        qrImage: "/payments/QR-2.jpeg",
    },
    {
        name: "Elite",
        price: 9999,
        period: "month",
        description: "Complete fitness transformation package",
        features: [
            "Everything in Pro",
            "21 Personal Training Sessions",
            "Personal Nutrition Coach",
            "Advance Supplement Strategy",
            "Gut Health Management",
            "Advanced Progress Tracking",
            "Recovery & Wellness Sessions",
            "Habit + Lifestyle Hacks",
            "Priority Support",
            "VIP Member Benefits"
        ],
        cta: "Join Now", 
        popular: false,
        qrImage: "/payments/QR-3.jpeg"
    }
]