const express = require('express');
const cors = require('cors');
const path = require('path');

// Import your news router
const newsRouter = require('./routes/news');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Serve your frontend files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Your existing sample data

const teamMembers = [
    { id: 1, name: "John Smith", role: "Public Speaker", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, name: "Andrea Brown", role: "Faculty & Peer", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 3, name: "Marwan Ahmed", role: "Head of Faculty & Peers", image: "https://randomuser.me/api/portraits/men/54.jpg" }
];

const tutorials = [
    { id: 1, title: "Complete Speech Structure Mastery", description: "Learn the foundation of powerful presentations - from captivating openings to memorable conclusions", duration: "45 min course", level: "Beginner", image: "https://www.eventi.polimi.it/wp-content/uploads/2024/07/AdobeStock_283017482_800x600.jpg" },
    { id: 2, title: "Voice Projection & Modulation", description: "Master breathing techniques and vocal variety", duration: "20 min course", level: "Intermediate", image: "https://miro.medium.com/v2/1*v4Tq51C48FwTJ51wdDXK4g.jpeg" },
    { id: 3, title: "Overcoming Stage Fright", description: "Proven strategies to build confidence and calm nerves", duration: "15 min course", level: "All Levels", image: "https://images.stockcake.com/public/2/f/9/2f90dcf6-c181-4537-85e1-6c5c6378fe40_large/confident-speaker-performing-stockcake.jpg" }
];

const userFeedback = [
    { id: 1, quote: 'An outstanding platform, gathering people around the globe!', stars: 5, author: 'John Smith', role: 'Public Speaker', image: 'images/user1.png' },
    { id: 2, quote: 'A fantastic bit of feedback', stars: 3, author: 'Andrea Brown', role: 'Faculty & Peer', image: 'images/user2.png' },
    { id: 3, quote: 'A genuinely glowing review', stars: 4, author: 'Marwan Ahmed', role: 'Head of Faculty & Peers', image: 'images/user3.png' }
];

// Topics data (still here)
const topics = [
    {
        id: 1,
        title: "Storytelling Techniques",
        description: "Share your best narrative methods",
        posts: 24,
        imageUrl: "https://ecmpprofessionalportfolio.weebly.com/uploads/4/0/7/2/40721813/header_images/1416718261.jpg"
    },
    {
        id: 2,
        title: "Cultural Speaking Styles",
        description: "Explore how cultures present",
        posts: 31,
        imageUrl: "https://live-production.wcms.abc-cdn.net.au/fc7d8cdf920a022fa855e0cd789c1b5c?impolicy=wcms_crop_resize&cropH=2199&cropW=3910&xPos=10&yPos=661&width=862&height=485"
    },
    {
        id: 3,
        title: "Voice Training Tips",
        description: "Warm-ups & vocal exercises",
        posts: 18,
        imageUrl: "https://www.shutterstock.com/image-photo/closeup-focused-hispanic-man-wearing-260nw-2496487755.jpg"
    },
    {
        id: 4,
        title: "Success Stories",
        description: "Celebrate your public speaking wins",
        posts: 42,
        imageUrl: "https://www.alnoorclinics.com/wp-content/uploads/2023/09/mission.webp"
    },
    {
        id: 5,
        title: "Beginner Questions Hub",
        description: "New to public speaking? Start here",
        posts: 67,
        imageUrl: "https://www.the-rheumatologist.org/wp-content/uploads/2018/08/THR_0818_pg38a.png"
    },
    {
        id: 6,
        title: "Advanced Techniques",
        description: "Expert-level delivery strategies",
        posts: 29,
        imageUrl: "https://d1kvkzjpuym02z.cloudfront.net/60ac79015e9c7107e5fd7e4b.jpg?Expires=2094959537&Signature=i-~vveQC3Eob6W6xthPGlWtB-FQ89k3CL3c5Hjgm3xVVROTmCOmtRTyjcMfgiXLJiJgE-Hnc2JkF3o4oxpln3yNs9aRA03T57f3bXYNRACY6JOzKUzg80UZ2ic51KDP9TBx~es6hJnA4wx0WX68bXW8r3LtPfhz5c2-huSZeSOw_&Key-Pair-Id=APKAJXYWFXCDTRLR3EFA"
    }
];

// Routes for existing data:
app.get('/api/team', (req, res) => res.json(teamMembers));
app.get('/api/tutorials', (req, res) => res.json(tutorials));
app.get('/api/feedback', (req, res) => res.json(userFeedback));
app.get('/api/topics', (req, res) => res.json(topics));

// Use your news router here (data from routes/news.js)
app.use('/api/news', newsRouter);

// Dummy login/register endpoints (optional)
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        return res.json({ success: true, message: `Welcome ${username}!` });
    }
    return res.status(400).json({ success: false, message: 'Missing credentials' });
});

app.post('/api/register', (req, res) => {
    const { username, password, email } = req.body;
    if (username && password && email) {
        return res.json({ success: true, message: `User ${username} registered!` });
    }
    return res.status(400).json({ success: false, message: 'Missing registration info' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
