export interface TeamMember {
  name: string;
  usn: string;
  role: string;
  contributions: string[];
  photo: string | null; // null triggers high-tech initial avatar
  email: string;
  linkedin: string;
  github: string;
}

export interface Mentor {
  name: string;
  role: string;
  designation: string;
  department: string;
  institution: string;
}

export interface Metric {
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}

export interface ProjectConfig {
  title: string;
  shortTitle: string;
  tagline: string;
  academicSubtitle: string;
  abstract: string;
  institution: {
    name: string;
    shortName: string;
    department: string;
    affiliation: string;
    accreditation: string;
    exhibitionEvent: string;
    academicYear: string;
    location: string;
    bitmLogo: string;
    vtuLogo: string;
    smartattendLogo: string;
  };
  links: {
    liveDemo: string;
    backendApi: string;
    youtubeVideoUrl: string;
    youtubeVideoId: string; // e.g. "dQw4w9WgXcQ" or placeholder
    researchPaperPdf: string;
    sourceCodeRepo: string;
    showcaseRepo: string;
    publishedSiteUrl: string;
  };
  metrics: Metric[];
  team: TeamMember[];
  mentors: Mentor[];
  verificationWorkflow: {
    step: number;
    title: string;
    duration: string;
    description: string;
    technology: string;
    screenshot?: string;
  }[];
  features: {
    id: string;
    title: string;
    category: 'Security' | 'Verification' | 'Architecture' | 'Experience';
    description: string;
    status: 'Implemented' | 'Empirically Validated' | 'Production Ready';
    badge: string;
    icon: string;
  }[];
  techStack: {
    category: string;
    description: string;
    technologies: {
      name: string;
      role: string;
      icon: string;
    }[];
  }[];
  threatMatrix: {
    attackVector: string;
    traditionalDefect: string;
    smartAttendMechanism: string;
    interceptionRate: string;
  }[];
}

export const projectConfig: ProjectConfig = {
  title: "SmartAttend: A Spatio-Temporal Multi-Factor Verification Framework for Secure Attendance Management",
  shortTitle: "SmartAttend",
  tagline: "A Zero-Trust Physical Presence Verification Engine for Modern Academia",
  academicSubtitle: "Engineering a multi-factor physical presence verification engine integrating sub-second time-rotating cryptographic QR tokens, ellipsoidal GNSS geofencing, 3D facial liveness, and hardware device binding.",
  
  abstract: "Contemporary academic and corporate establishments face persistent vulnerabilities in attendance auditing, where surrogate check-ins, credential delegation, optical QR forwarding, virtual location spoofing, and biometric presentation attacks frequently undermine record validity. Single-modality check-in mechanisms fail to enforce unforgeable physical co-presence while often inducing severe serialization delays during peak classroom entry. To resolve these challenges, SmartAttend coordinates four tightly coupled spatial-temporal checkpoints: (1) transient dynamic QR visual tokens generated via time-synchronized HMAC-SHA256, (2) fine-grained Haversine geofence verification integrating real-time GNSS readings, (3) active facial liveness analysis coupled with deep facial feature matching, and (4) cryptographic hardware device fingerprint binding. Built upon high-throughput asynchronous services, in-memory state caching, and Supabase cloud persistence, SmartAttend completes verification with a median processing latency of 30.1 ms and 100% deflection across 5,000 simulated adversarial spoofing attempts.",

  institution: {
    name: "Ballari Institute of Technology & Management",
    shortName: "BITM Ballari",
    department: "Department of Computer Science & Engineering (Data Science)",
    affiliation: "Affiliated to Visvesvaraya Technological University (VTU), Belagavi",
    accreditation: "Approved by AICTE, New Delhi • Accredited by NAAC & NBA",
    exhibitionEvent: "B.E. Final Year Project Exhibition (Knowledge • Innovation • Excellence)",
    academicYear: "Academic Year 2025–2026",
    location: "Ballari, Karnataka, India",
    bitmLogo: "./assets/logos/bitm_logo.jpeg",
    vtuLogo: "./assets/logos/vtu_logo.png",
    smartattendLogo: "./assets/logos/smartattend_logo.png",
  },

  links: {
    liveDemo: "https://smartattend.app",
    backendApi: "https://smartattend-api-lpbx.onrender.com",
    // When final YouTube video is published, place the YouTube Video ID below
    youtubeVideoUrl: "https://www.youtube.com/watch?v=placeholder_smartattend",
    youtubeVideoId: "", // Set e.g. "AbCdEf12345" once uploaded to YouTube
    researchPaperPdf: "./assets/SmartAttend_Research_Paper.pdf",
    sourceCodeRepo: "https://github.com/RushikeshPatil03/smartattend",
    showcaseRepo: "https://github.com/RushikeshPatil03/Major-Project-Showcase",
    publishedSiteUrl: "https://rushikeshpatil03.github.io/Major-Project-Showcase/",
  },

  metrics: [
    {
      label: "Median Processing Latency",
      value: "30.1 ms",
      subtext: "End-to-end cryptographic and spatial validation",
      iconName: "Zap"
    },
    {
      label: "Sustained Concurrency",
      value: "300 req/s",
      subtext: "99.87% success rate under peak rush load",
      iconName: "TrendingUp"
    },
    {
      label: "Proxy Interception Rate",
      value: "100%",
      subtext: "Zero fraudulent passes across 5,000 attack trials",
      iconName: "ShieldCheck"
    },
    {
      label: "Biometric Accuracy",
      value: "0.02% FAR",
      subtext: "1.15% FRR with randomized movement liveness",
      iconName: "ScanFace"
    }
  ],

  team: [
    {
      name: "Rushikesh Patil",
      usn: "3BR22CD042",
      role: "Lead Architect & Full-Stack Engineer",
      contributions: [
        "Architected 4-tier zero-trust verification pipeline and HMAC dynamic QR engine",
        "Engineered Node.js/Express API and Supavisor PostgreSQL transaction pooler",
        "Designed student PWA scanner and faculty studio projection interface"
      ],
      photo: "./assets/team/rushikesh.jpg",
      email: "rushipatil7611@gmail.com",
      linkedin: "https://www.linkedin.com/in/rushikesh-patil-97425825a/",
      github: "https://github.com/RushikeshPatil03"
    },
    {
      name: "S G Pramod",
      usn: "3BR22CD037",
      role: "Biometrics & Security Specialist",
      contributions: [
        "Implemented MediaPipe 468-point facial mesh landmark detection and liveness state machine",
        "Configured FastApi/DeepFace FaceNet-512 high-dimensional embedding inference",
        "Co-authored research methodology and automated load-testing verification suites"
      ],
      photo: "./assets/team/pramod.jpeg",
      email: "pramupramod2360@gmail.com",
      linkedin: "https://www.linkedin.com/in/pramod-s-g-72993b2a2/",
      github: "https://github.com/RushikeshPatil03/smartattend"
    },
    {
      name: "Shivamani B",
      usn: "3BR22CD048",
      role: "Distributed Systems & Database Engineer",
      contributions: [
        "Architected Supabase PostgreSQL schema, RLS policies, and immutable cohort snapshots",
        "Integrated Haversine ellipsoidal geofence boundary validation with GNSS telemetry",
        "Structured stress-testing harnesses and proxy mitigation attack simulation data"
      ],
      photo: null, // High-tech styled initials avatar displayed automatically until photo supplied
      email: "shivamanishiva56@gmail.com",
      linkedin: "https://www.linkedin.com/in/shivamani-b-465a39281/",
      github: "https://github.com/RushikeshPatil03/smartattend"
    },
    {
      name: "Srirama Aravind",
      usn: "3BR22CD051",
      role: "Frontend UI/UX & PWA Engineer",
      contributions: [
        "Constructed responsive Progressive Web App with offline caching and native camera bindings",
        "Built faculty attendance matrix editor, live WebSocket rosters, and CSV exports",
        "Optimized mobile scan responsiveness across low-end Android and iOS devices"
      ],
      photo: "./assets/team/aravind.jpeg",
      email: "123sriramaravind123@gmail.com",
      linkedin: "https://www.linkedin.com/in/srirama-aravind-4a6902263/",
      github: "https://github.com/RushikeshPatil03/smartattend"
    }
  ],

  mentors: [
    {
      name: "Dr. ARADHANA D",
      role: "Project Guide",
      designation: "Professor",
      department: "Dept. of Computer Science & Engineering (Data Science)",
      institution: "Ballari Institute of Technology & Management"
    },
    {
      name: "Prof. VARSHA K",
      role: "Project Coordinator",
      designation: "Assistant Professor",
      department: "Dept. of Computer Science & Engineering (Data Science)",
      institution: "Ballari Institute of Technology & Management"
    }
  ],

  verificationWorkflow: [
    {
      step: 1,
      title: "Faculty Session Initialization",
      duration: "0.0s - Instant",
      description: "Faculty launches an attendance session from the Projector Studio. The backend records room GNSS anchor coordinates, sets an enforcement perimeter (e.g., 30-50m), and freezes an immutable cohort snapshot.",
      technology: "React 19 Studio • Express API • PostgreSQL Snapshot",
      screenshot: "./assets/figures/faculty_studio.png"
    },
    {
      step: 2,
      title: "Dynamic Cryptographic QR Generation",
      duration: "Rotates Every 1.0 – 3.0s",
      description: "The faculty display renders time-rotating visual tokens signed with HMAC-SHA256 and synchronized monotonic sequence counters. Tokens expire in seconds, rendering screenshots and video captures useless.",
      technology: "HMAC-SHA256 • Redis Nonces • Sub-second Expiry",
      screenshot: "./assets/figures/faculty_studio.png"
    },
    {
      step: 3,
      title: "Student Dual-Step Scan & Hardware Check",
      duration: "< 1.5s Execution",
      description: "The student opens the mobile PWA in class. The device fingerprint is checked against authorized registrations. The camera scans consecutive QR iterations within a tight sequence drift to prove real-time viewing.",
      technology: "PWA BarcodeDetector • IndexedDB Fingerprint Lock",
      screenshot: "./assets/figures/qr_scanner.jpg"
    },
    {
      step: 4,
      title: "Spatial GNSS & Biometric Liveness",
      duration: "< 25.0 ms Compute",
      description: "The client acquires GPS coordinates filtered by accuracy and computes Haversine displacement from the classroom anchor. Concurrently, MediaPipe BlazeFace executes random directional liveness challenges.",
      technology: "Haversine Distance • MediaPipe Vision • FaceNet-512",
      screenshot: "./assets/figures/face_liveness.jpg"
    },
    {
      step: 5,
      title: "Atomic Ledger Commit & Realtime Broadcast",
      duration: "30.1 ms Total Latency",
      description: "The server verifies cryptographic grants, prevents concurrent double-taps via sliding locks, and records the verified attendance atomically. Supabase Realtime instantly pushes the update to the faculty roster.",
      technology: "Supavisor Pooler • Supabase Realtime WebSockets",
      screenshot: "./assets/figures/attendance_marked.jpg"
    }
  ],

  features: [
    {
      id: "dynamic-qr",
      title: "Time-Rotating Dynamic QR Tokens",
      category: "Security",
      description: "QR tokens regenerate every 1 to 3 seconds using cryptographically signed HMAC-SHA256 hashes. Defeats screen recording, social media forwarding, and projector photography.",
      status: "Production Ready",
      badge: "Cryptographic",
      icon: "QrCode"
    },
    {
      id: "spatial-geofence",
      title: "Ellipsoidal Haversine Geofencing",
      category: "Verification",
      description: "Enforces strict physical presence within a configurable 30–50 meter radius around the faculty's classroom anchor. Filters out mock locations and low-accuracy coordinates.",
      status: "Production Ready",
      badge: "Location-Bound",
      icon: "MapPin"
    },
    {
      id: "facial-liveness",
      title: "Biometric Liveness & 3D Matching",
      category: "Verification",
      description: "Client-side 468-point facial mesh landmark tracking with randomized challenge-response movements (head turn, blink), backed by optional 512-dimensional deep embeddings.",
      status: "Production Ready",
      badge: "Anti-Spoofing",
      icon: "ScanFace"
    },
    {
      id: "device-binding",
      title: "Hardware-Bound Device Fingerprinting",
      category: "Security",
      description: "Binds verified student accounts to a unique client hardware hash stored in persistent browser storage. Rejects multiple accounts originating from the same physical smartphone.",
      status: "Implemented",
      badge: "Zero-Trust",
      icon: "Smartphone"
    },
    {
      id: "high-concurrency",
      title: "High-Throughput In-Memory Pipeline",
      category: "Architecture",
      description: "Asynchronous Node.js & FastAPI backend paired with in-memory single-use token nonces and PgBouncer/Supavisor pooling, yielding 30.1 ms median response times under 300 req/s load.",
      status: "Empirically Validated",
      badge: "High-Scale",
      icon: "Cpu"
    },
    {
      id: "role-portals",
      title: "Role-Segregated Web Ecosystem",
      category: "Experience",
      description: "Dedicated interfaces for Institutional Administrators (catalogs, audit logs), Faculty Instructors (projector studio, override matrix), and Students (mobile PWA, attendance history).",
      status: "Production Ready",
      badge: "Multi-Role",
      icon: "Users"
    },
    {
      id: "immutable-snapshots",
      title: "Immutable Session Roster Snapshots",
      category: "Architecture",
      description: "Freezes active student rosters at the exact millisecond of session initiation, ensuring subsequent semester reassignments never corrupt historic attendance records.",
      status: "Implemented",
      badge: "Integrity",
      icon: "Database"
    },
    {
      id: "realtime-websocket",
      title: "Real-Time WebSocket Session Broadcast",
      category: "Experience",
      description: "Live roster sync powered by Supabase Realtime channels. Faculty monitors live attendance check-ins on their dashboard instantaneously without manual page refreshes.",
      status: "Production Ready",
      badge: "Low-Latency",
      icon: "Radio"
    },
    {
      id: "offline-totp",
      title: "Resilient Fallback TOTP Verification",
      category: "Security",
      description: "In lecture halls with damaged projectors or low-light conditions, students can toggle into a synchronized 6-digit TOTP code fallback that preserves full spatial verification.",
      status: "Implemented",
      badge: "Fail-Safe",
      icon: "KeyRound"
    }
  ],

  techStack: [
    {
      category: "Core Application Frontend",
      description: "Modern, type-safe progressive client architecture running natively on commodity hardware",
      technologies: [
        { name: "React 19 & TypeScript", role: "Component UI & strict static typing", icon: "Code" },
        { name: "Tailwind CSS v4", role: "Design tokens, glassmorphism & responsive layout", icon: "Palette" },
        { name: "Vite PWA", role: "Service Worker caching, offline shell & home-screen install", icon: "Download" },
        { name: "MediaPipe Vision", role: "Client-side 468-point facial landmark mesh & liveness", icon: "Eye" },
        { name: "HTML5 QR & BarcodeDetector", role: "High-frequency multi-frame video stream decoding", icon: "Scan" }
      ]
    },
    {
      category: "Backend Microservices & APIs",
      description: "High-throughput asynchronous compute services delivering sub-second response times",
      technologies: [
        { name: "Node.js 20 & Express", role: "High-concurrency REST gateway & session orchestration", icon: "Server" },
        { name: "Python FastAPI", role: "DeepFace FaceNet-512 asynchronous biometric inference", icon: "Cpu" },
        { name: "Redis In-Memory Engine", role: "Single-use scan nonces & sub-millisecond locks", icon: "Layers" },
        { name: "JWT & HMAC-SHA256", role: "Stateless authorization & cryptographic dynamic QR signing", icon: "Shield" },
        { name: "Render Cloud (Singapore)", role: "Containerized deployment located close to Mumbai DB", icon: "Cloud" }
      ]
    },
    {
      category: "Data Persistence & Realtime",
      description: "ACID-compliant relational database with connection pooling and WebSocket streaming",
      technologies: [
        { name: "Supabase PostgreSQL", role: "Relational storage, Row Level Security (RLS) & schemas", icon: "Database" },
        { name: "Supavisor Pooler (Port 6543)", role: "Transaction-level connection reuse (97% reduction)", icon: "Network" },
        { name: "Supabase Realtime (ws)", role: "Low-latency WebSocket channel pushes for live rosters", icon: "Radio" },
        { name: "Supabase Storage", role: "Access-controlled cloud buckets for institutional assets", icon: "HardDrive" }
      ]
    },
    {
      category: "Showcase & Exhibition Infrastructure",
      description: "Static deployment pipeline designed for zero-latency QR code exhibition access",
      technologies: [
        { name: "React + Vite Static", role: "Blazing fast single-page showcase bundle", icon: "Zap" },
        { name: "Tailwind CSS", role: "Dark-mode academic aesthetics & responsive grid", icon: "Sliders" },
        { name: "GitHub Pages", role: "Zero-cost global static hosting via GitHub CDN", icon: "Globe" },
        { name: "GitHub Actions", role: "Continuous delivery workflow on git push to main", icon: "GitBranch" }
      ]
    }
  ],

  threatMatrix: [
    {
      attackVector: "Static QR Screenshot Sharing",
      traditionalDefect: "Students photograph QR codes and share via WhatsApp to absent peers",
      smartAttendMechanism: "Sub-second rotating dynamic QR codes signed with HMAC-SHA256 & sequence drift checks",
      interceptionRate: "100% Deflected"
    },
    {
      attackVector: "GPS Coordinates Spoofing",
      traditionalDefect: "Students inject mock GPS coordinates using Android developer settings",
      smartAttendMechanism: "GNSS accuracy filtering combined with dual-tier Haversine validation against teacher anchor",
      interceptionRate: "100% Deflected"
    },
    {
      attackVector: "Biometric 2D Photo Presentation",
      traditionalDefect: "Holding a printed color photograph or smartphone screen in front of camera",
      smartAttendMechanism: "Active randomized movement challenge (blink, directional head turns) on 468 landmarks",
      interceptionRate: "100% Deflected"
    },
    {
      attackVector: "Single Device Multi-Account Proxy",
      traditionalDefect: "One student in class logs into multiple friends' accounts to mark attendance",
      smartAttendMechanism: "Cryptographic hardware device fingerprint locked to student account in persistent storage",
      interceptionRate: "100% Deflected"
    },
    {
      attackVector: "Replay & Concurrent Double-Tap",
      traditionalDefect: "Rapidly resubmitting the same scan payload across parallel browser requests",
      smartAttendMechanism: "Redis atomic single-use nonce consumption and sliding window session locks",
      interceptionRate: "100% Deflected"
    }
  ]
};
