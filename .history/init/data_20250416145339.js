const eventData = [
    {
        title: "Tech Conference 2025",
        description: "An annual conference on AI and ML innovations.",
        date: new Date("2025-06-15"),
        time: "10:00 AM",
        location: "San Francisco, CA",
        category: "Conference",
        price: 199,
          
        attendeeCount: 250,
        image: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Paris Fashion Week 2025 - Haute Couture",
        description: "Exclusive showcase of luxury haute couture designs from top designers.",
        date: new Date("2025-09-01"),
        time: "7:00 PM",
        location: "Louvre Museum, Paris, France",
        category: "Fashion Show",
        price: 500, // VIP Tickets
        
        attendeeCount: 1200,
        image: "https://images.unsplash.com/flagged/photo-1568988039441-11f295d74d89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Rock Concert Night",
        description: "Live concert featuring top rock bands.",
        date: new Date("2025-08-05"),
        time: "7:00 PM",
        location: "Los Angeles, CA",
        category: "Concert",
        price: 49,
        
        attendeeCount: 500,
        image: "https://images.unsplash.com/photo-1733636017715-f0cce733b8a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "AI & Blockchain Meetup",
        description: "Discuss AI and Blockchain applications with experts.",
        date: new Date("2025-09-10"),
        time: "6:00 PM",
        location: "New York, NY",
        category: "Meetup",
        price: 0,
       
        attendeeCount: 80,
        image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Apple iPhone 17 Launch Event",
        description: "Apple hosts a global press event to unveil the next-generation iPhone.",
        date: new Date("2025-09-10"),
        time: "11:00 AM",
        location: "Apple Park, Cupertino, CA",
        category: "Press Conference",
        price: 0, // Invite-only event
        
        attendeeCount: 800,
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Startup Pitch Night",
        description: "Startups pitch their ideas to investors.",
        date: new Date("2025-10-01"),
        time: "5:30 PM",
        location: "Silicon Valley, CA",
        category: "Meetup",
        price: 25,
        
        attendeeCount: 60,
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Cybersecurity Webinar",
        description: "Learn about modern cybersecurity threats.",
        date: new Date("2025-06-25"),
        time: "3:00 PM",
        location: "Online",
        category: "Webinar",
        price: 49,
        
        attendeeCount: 100,
        image: "https://plus.unsplash.com/premium_photo-1661754876215-247b4db12e83?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "React Native Hackathon",
        description: "Build mobile apps using React Native.",
        date: new Date("2025-11-12"),
        time: "10:00 AM",
        location: "Boston, MA",
        category: "Workshop",
        price: 59,
        
        attendeeCount: 90,
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Music Festival 2025",
        description: "Annual festival featuring top artists.",
        date: new Date("2025-08-18"),
        time: "4:00 PM",
        location: "Miami, FL",
        category: "Concert",
        price: 89,
       
        attendeeCount: 800,
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Digital Marketing Summit",
        description: "Learn digital marketing strategies.",
        date: new Date("2025-09-20"),
        time: "1:00 PM",
        location: "Online",
        category: "Conference",
        price: 199,
        
        attendeeCount: 300,
        image: "https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=2048x2048&w=is&k=20&c=B0aClNHXUKSOsHPwEVuYWT2u_haG5YGGo24mrzhqcSw="
    },
    {
        title: "Phantom of the Opera - Musical Spectacle",
        description: "An unforgettable night with the legendary Phantom in the Opera House.",
        date: new Date("2025-09-05"),
        time: "7:30 PM",
        location: "Palais Garnier, Paris, France",
        category: "Theatre",
        price: 180, // Standard entry
        
        attendeeCount: 900,
        image: "https://media.istockphoto.com/id/1468187137/photo/young-chinese-female-opera-singer-performing-solo-on-stage.jpg?s=612x612&w=0&k=20&c=_gcRdcJhHDXlNigp2JKra7TEh6pLQHBx-F3F8GF6Dzo="
    },
    {
        title: "New Year's Eve Pop-Up Market",
        description: "Ring in the new year with unique crafts, delicious street food, and live music.",
        date: new Date("2025-12-31"),
        time: "5:00 PM - 1:00 AM",
        location: "Downtown Square, Sydney, Australia",
        category: "Cultural Event",
        price: 10, // Entry fee for special performances
        
        attendeeCount: 2000,
        image: "https://media.istockphoto.com/id/475712484/photo/christmas-market.webp?a=1&b=1&s=612x612&w=0&k=20&c=R8IpxjIAm6PC19LM0BW3IQUxFNsFHUk3sy2HnWMV-2c="
    },
    {
        title: "Photography Workshop",
        description: "Master professional photography skills in a day.",
        date: new Date("2025-07-25"),
        time: "2:00 PM",
        location: "Paris, France",
        category: "Workshop",
        price: 79,
      
        attendeeCount: 50,
        image: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "E-Sports Championship",
        description: "Battle it out in the biggest e-sports tournament.",
        date: new Date("2025-09-15"),
        time: "8:00 PM",
        location: "Los Angeles, CA",
        category: "Sports Events",
        price: 30,
        attendeeCount: 500,
        image: "https://media.istockphoto.com/id/1129493258/photo/esports-team-winning-the-match.jpg?s=2048x2048&w=is&k=20&c=NaP1VU95AaZMu-yZ7eRe0qj0uuGeyeml8QFGTfkjuHg="
    },
    {
        title: "Yoga & Wellness Retreat",
        description: "A 3-day yoga and meditation retreat in the mountains.",
        date: new Date("2025-06-10"),
        time: "6:00 AM",
        location: "Rishikesh, India",
        category: "Wellness",
        price: 299,
        
        attendeeCount: 120,
        image: "https://images.unsplash.com/photo-1529693662653-9d480530a697?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Mental Health Awareness - Break the Stigma",
        description: "A panel discussion on mental health issues, self-care, and professional help.",
        date: new Date("2025-05-10"),
        time: "3:00 PM",
        location: "Mental Wellness Center, Los Angeles, USA",
        category: "Awareness",
        price: 0, // Free
        
        attendeeCount: 700,
        image: "https://media.istockphoto.com/id/1306217369/photo/adult-and-child-hands-holding-encephalography-brain-paper-cutout-autism-stroke-epilepsy-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=t1iCgcOrTZraVUt_KDWQknOXuY3FXSiIh6eFaEsGAXg="
    },
    {
        title: "Art Exhibition",
        description: "Explore eautiful art works beyond your imagination.",
        date: new Date("2025-11-05"),
        time: "11:00 AM",
        location: "Dubai, UAE",
        category: "Exhibition",
        price: 179,
        
        attendeeCount: 350,
        image: "https://media.istockphoto.com/id/1218961092/photo/young-couple-visits-art-exhibition.jpg?s=2048x2048&w=is&k=20&c=XLn4R322nrI8_bNCZJG9GrRrPesYYKG8F3OkCgA76R0="
    },
    {
        title: "Comic Con 2025",
        description: "A massive gathering of comic, anime, and movie fans.",
        date: new Date("2025-12-10"),
        time: "9:00 AM",
        location: "San Diego, CA",
        category: "Entertainment",
        price: 50,
      
        attendeeCount: 1000,
        image: "https://media.istockphoto.com/id/1316581169/photo/stage-with-microphone-and-stool-with-red-neon-lamp-with-the-word-comedy-space-for-text.webp?a=1&b=1&s=612x612&w=0&k=20&c=cBfRqbEd_UooPVxhjTNJYFk_W6buS4X8NWQE-mAi38I="
    },
    {
        title: "Women in Tech Summit",
        description: "Empowering women in technology through networking.",
        date: new Date("2025-10-02"),
        time: "10:30 AM",
        location: "London, UK",
        category: "Conference",
        price: 49,
        attendeeCount: 300,
        image: "https://images.unsplash.com/photo-1573165067541-4cd6d9837902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBpbiUyMHRlY2h8ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "Astronomy Night",
        description: "Stargazing and learning about the cosmos.",
        date: new Date("2025-08-21"),
        time: "9:00 PM",
        location: "Sydney, Australia",
        category: "Science",
        price: 15,
       
        attendeeCount: 70,
        image: "https://media.istockphoto.com/id/915541206/photo/silhouette-of-man-with-backpack-on-the-hill-against-colorful-milky-way-at-night-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=5VyNR9PfcqYi3RXmBAQjQ3LMjvrLGVPzn22jB7NRgY8="
    }
];

module.exports={data:eventData};
