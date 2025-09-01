# 📋 Zerodha Clone - Technical Documentation

## 🏗️ Architecture Overview

### System Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Dashboard     │    │   Backend API   │
│   (Port 3000)   │    │   (Port 3001)   │    │   (Port 3002)   │
│                 │    │                 │    │                 │
│ ┌─────────────┐ │    │ ┌─────────────┐ │    │ ┌─────────────┐ │
│ │ Landing     │ │    │ │ Trading     │ │    │ │ Express.js  │ │
│ │ Pages       │ │    │ │ Interface   │ │    │ │ Server      │ │
│ └─────────────┘ │    │ └─────────────┘ │    │ └─────────────┘ │
│ ┌─────────────┐ │    │ ┌─────────────┐ │    │ ┌─────────────┐ │
│ │ Auth Forms  │ │    │ │ Charts &    │ │    │ │ JWT Auth    │ │
│ │ & Pages     │ │    │ │ Analytics   │ │    │ │ Middleware  │ │
│ └─────────────┘ │    │ └─────────────┘ │    │ └─────────────┘ │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   MongoDB       │
                    │   Database      │
                    │                 │
                    │ ┌─────────────┐ │
                    │ │ Users       │ │
                    │ │ Holdings    │ │
                    │ │ Positions   │ │
                    │ │ Orders      │ │
                    │ └─────────────┘ │
                    └─────────────────┘
```

### Data Flow Architecture
```
User Request → Frontend/Dashboard → API Gateway → Authentication → 
Business Logic → Database → Response → Frontend Update → UI Render
```

## 🗂️ Project Structure Deep Dive

### Frontend Structure (Landing Page)
```
frontend/
├── public/
│   ├── Media/                 # Static assets and images
│   │   ├── homeHero.png      # Hero section image
│   │   ├── logo.svg          # Brand logo
│   │   ├── pricing*.svg      # Pricing illustrations
│   │   └── *.jpg, *.png      # Various images
│   ├── index.html            # Main HTML template
│   ├── manifest.json         # PWA manifest
│   └── robots.txt            # SEO robots file
├── src/
│   ├── Landing_page/
│   │   ├── home/
│   │   │   ├── HomePage.js   # Main home component
│   │   │   ├── Hero.js       # Hero section
│   │   │   ├── Stats.js      # Statistics section
│   │   │   ├── Awards.js     # Awards showcase
│   │   │   ├── Education.js  # Educational content
│   │   │   └── Pricing.js    # Pricing preview
│   │   ├── about/
│   │   │   ├── Aboutpage.js  # About page container
│   │   │   ├── Hero.js       # About hero section
│   │   │   └── Team.js       # Team information
│   │   ├── pricing/
│   │   │   ├── Pricingpage.js # Pricing page container
│   │   │   ├── Hero.js       # Pricing hero
│   │   │   └── Brokerage.js  # Brokerage details
│   │   ├── products/
│   │   │   ├── ProductPage.js # Products container
│   │   │   ├── Hero.js       # Products hero
│   │   │   ├── Leftimg.js    # Left image component
│   │   │   ├── Rightimg.js   # Right image component
│   │   │   └── Universe.js   # Product universe
│   │   ├── login/
│   │   │   └── Login.js      # Login form
│   │   ├── signup/
│   │   │   └── Signup.js     # Registration form
│   │   ├── Support/
│   │   │   ├── SupportPage.js # Support container
│   │   │   ├── Hero.js       # Support hero
│   │   │   └── RaceTicket.js # Ticket system
│   │   ├── Footer.js         # Global footer
│   │   ├── Navbar.js         # Navigation bar
│   │   ├── NotFound.js       # 404 page
│   │   └── OpenAccount.js    # Account opening CTA
│   ├── components/
│   │   └── ThemeToggle.js    # Theme switcher
│   ├── contexts/
│   │   └── ThemeContext.js   # Theme state management
│   ├── styles/
│   │   └── themes.css        # Theme definitions
│   ├── index.css             # Global styles
│   └── index.js              # App entry point
└── package.json              # Dependencies and scripts
```

### Dashboard Structure (Trading Interface)
```
dashboard/
├── public/
│   ├── index.html            # Dashboard HTML template
│   ├── logo.png              # Dashboard logo
│   ├── manifest.json         # PWA configuration
│   └── robots.txt            # SEO configuration
├── src/
│   ├── components/
│   │   ├── Apps.jsx          # Main app component
│   │   ├── AuthContext.jsx   # Authentication context
│   │   ├── Dashboard.jsx     # Main dashboard
│   │   ├── Holdings.jsx      # Holdings display
│   │   ├── Positions.jsx     # Positions management
│   │   ├── Orders.jsx        # Order history
│   │   ├── WatchList.jsx     # Stock watchlist
│   │   ├── Charts.jsx        # Chart components
│   │   ├── BuyActionWindow.jsx    # Buy order modal
│   │   ├── BuyActionWindow.css    # Buy modal styles
│   │   ├── SellActionWindow.jsx   # Sell order modal
│   │   ├── DoughnoutChart.jsx     # Doughnut chart
│   │   ├── VerticalGraph.jsx      # Vertical graph
│   │   ├── EnhancedWatchList.jsx  # Advanced watchlist
│   │   ├── FeatureDemo.jsx        # Feature demonstrations
│   │   ├── Funds.jsx              # Funds management
│   │   ├── GeneralContext.jsx     # General state context
│   │   ├── Home.jsx               # Dashboard home
│   │   ├── LoadingComponents.jsx  # Loading states
│   │   ├── Menu.jsx               # Navigation menu
│   │   ├── PortfolioAnalytics.jsx # Portfolio analysis
│   │   ├── ProtectedRoute.jsx     # Route protection
│   │   ├── Summary.jsx            # Portfolio summary
│   │   ├── ThemeToggle.jsx        # Theme switcher
│   │   ├── ToastContainer.jsx     # Notification system
│   │   └── TopBar.jsx             # Top navigation
│   ├── contexts/
│   │   ├── ResponsiveContext.jsx  # Responsive state
│   │   ├── ThemeContext.jsx       # Theme management
│   │   └── WatchlistContext.jsx   # Watchlist state
│   ├── Data/
│   │   └── Data.js                # Mock data
│   ├── styles/
│   │   └── themes.css             # Theme styles
│   ├── index.css                  # Global dashboard styles
│   └── index.jsx                  # Dashboard entry point
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
└── package.json                   # Dependencies
```

### Backend Structure (API Server)
```
backend/
├── middleware/
│   └── auth.js               # JWT authentication middleware
├── model/
│   ├── HoldingsModel.js      # Holdings data model
│   ├── OrdersModel.js        # Orders data model
│   ├── PositionsModel.js     # Positions data model
│   └── UserModel.js          # User data model
├── schemas/
│   ├── HoldingSchema.js      # Holdings database schema
│   ├── OrdersSchema.js       # Orders database schema
│   ├── PositionsSchema.js    # Positions database schema
│   └── UserSchema.js         # User database schema
├── .env                      # Environment variables
├── index.js                  # Main server file
├── package.json              # Server dependencies
└── package-lock.json         # Dependency lock file
```

## 🔧 Technology Stack Details

### Frontend Technologies

#### React 19.1.1 Features Used
- **Concurrent Features**: Automatic batching, transitions
- **Hooks**: useState, useEffect, useContext, useReducer
- **Custom Hooks**: useAuth, useTheme, useWatchlist
- **Error Boundaries**: Graceful error handling
- **Code Splitting**: Lazy loading with React.lazy()
- **Suspense**: Loading states for async components

#### Material-UI Implementation
```javascript
// Theme customization
const theme = createTheme({
  palette: {
    primary: {
      main: '#387ed1',
      light: '#6fa8dc',
      dark: '#2c5aa0'
    },
    secondary: {
      main: '#ff6600',
      light: '#ff8533',
      dark: '#cc5200'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif'
  }
});

// Component usage
<ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider>
```

#### Tailwind CSS Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#387ed1',
        secondary: '#ff6600',
        success: '#00c896',
        danger: '#eb5757'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
```

#### Chart.js Configuration
```javascript
// Chart options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Portfolio Performance'
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0,0,0,0.1)'
      }
    }
  }
};
```

### Backend Technologies

#### Express.js Server Setup
```javascript
// Server configuration
const app = express();

// Middleware stack
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(cookieParser());
app.use(helmet()); // Security headers
app.use(compression()); // Response compression

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);
```

#### MongoDB Schema Design
```javascript
// User Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Invalid email']
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

// Indexes for performance
UserSchema.index({ email: 1 });
UserSchema.index({ createdAt: -1 });
```

#### JWT Authentication Implementation
```javascript
// Token generation
const generateToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { 
      expiresIn: '7d',
      issuer: 'zerodha-clone',
      audience: 'zerodha-users'
    }
  );
};

// Authentication middleware
const authenticateToken = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'Access token required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await UserModel.findById(decoded.userId);
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
```

## 🔒 Security Implementation

### Authentication Security
```javascript
// Password hashing
const hashPassword = async (password) => {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
};

// Password validation
const validatePassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasNonalphas = /\W/.test(password);
  
  return password.length >= minLength && 
         hasUpperCase && 
         hasLowerCase && 
         hasNumbers && 
         hasNonalphas;
};
```

### Input Validation & Sanitization
```javascript
// Order validation
const validateOrder = (req, res, next) => {
  const { name, qty, price, mode } = req.body;
  
  // Sanitize inputs
  const sanitizedName = validator.escape(name?.toString() || '');
  const sanitizedQty = parseInt(qty);
  const sanitizedPrice = parseFloat(price);
  
  // Validation rules
  if (!sanitizedName || sanitizedName.length < 1) {
    return res.status(400).json({ error: 'Invalid stock name' });
  }
  
  if (!Number.isInteger(sanitizedQty) || sanitizedQty <= 0) {
    return res.status(400).json({ error: 'Quantity must be a positive integer' });
  }
  
  if (!Number.isFinite(sanitizedPrice) || sanitizedPrice <= 0) {
    return res.status(400).json({ error: 'Price must be a positive number' });
  }
  
  if (!['BUY', 'SELL'].includes(mode?.toUpperCase())) {
    return res.status(400).json({ error: 'Mode must be BUY or SELL' });
  }
  
  req.validatedBody = {
    name: sanitizedName,
    qty: sanitizedQty,
    price: sanitizedPrice,
    mode: mode.toUpperCase()
  };
  
  next();
};
```

### CORS Configuration
```javascript
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://zerodha-clone-frontend.vercel.app',
      'https://zerodha-clone-dashboard.vercel.app'
    ];
    
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200
};
```

## 📊 Performance Optimization

### Frontend Optimization Strategies

#### Code Splitting
```javascript
// Route-based code splitting
const Home = lazy(() => import('./components/Home'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Holdings = lazy(() => import('./components/Holdings'));

// Component lazy loading
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/holdings" element={<Holdings />} />
  </Routes>
</Suspense>
```

#### Image Optimization
```javascript
// Lazy loading images
const LazyImage = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} {...props}>
      {loaded && <img src={src} alt={alt} loading="lazy" />}
    </div>
  );
};
```

#### State Management Optimization
```javascript
// Memoized context provider
const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  
  const contextValue = useMemo(() => ({
    watchlist,
    addToWatchlist: useCallback((stock) => {
      setWatchlist(prev => [...prev, stock]);
    }, []),
    removeFromWatchlist: useCallback((stockId) => {
      setWatchlist(prev => prev.filter(stock => stock.id !== stockId));
    }, [])
  }), [watchlist]);

  return (
    <WatchlistContext.Provider value={contextValue}>
      {children}
    </WatchlistContext.Provider>
  );
};
```

### Backend Optimization Strategies

#### Database Query Optimization
```javascript
// Efficient pagination
const getOrders = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;

  try {
    const orders = await OrdersModel
      .find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(); // Returns plain JavaScript objects

    const total = await OrdersModel.countDocuments({ userId: req.user._id });

    res.json({
      orders,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};
```

#### Caching Implementation
```javascript
// Redis caching
const redis = require('redis');
const client = redis.createClient();

const cacheMiddleware = (duration = 300) => {
  return async (req, res, next) => {
    const key = `cache:${req.originalUrl}`;
    
    try {
      const cached = await client.get(key);
      if (cached) {
        return res.json(JSON.parse(cached));
      }
      
      // Store original res.json
      const originalJson = res.json;
      res.json = function(data) {
        // Cache the response
        client.setex(key, duration, JSON.stringify(data));
        return originalJson.call(this, data);
      };
      
      next();
    } catch (error) {
      next();
    }
  };
};

// Usage
app.get('/api/holdings', authenticateToken, cacheMiddleware(60), getHoldings);
```

## 🧪 Testing Strategy

### Frontend Testing
```javascript
// Component testing with React Testing Library
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BuyActionWindow } from '../components/BuyActionWindow';

describe('BuyActionWindow', () => {
  test('should place buy order successfully', async () => {
    const mockOnClose = jest.fn();
    const mockStock = { name: 'RELIANCE', price: 2500 };

    render(<BuyActionWindow stock={mockStock} onClose={mockOnClose} />);

    // Fill form
    fireEvent.change(screen.getByLabelText(/quantity/i), {
      target: { value: '10' }
    });
    
    fireEvent.change(screen.getByLabelText(/price/i), {
      target: { value: '2500' }
    });

    // Submit order
    fireEvent.click(screen.getByRole('button', { name: /buy/i }));

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/order placed successfully/i)).toBeInTheDocument();
    });

    expect(mockOnClose).toHaveBeenCalled();
  });
});
```

### Backend Testing
```javascript
// API testing with Jest and Supertest
const request = require('supertest');
const app = require('../index');

describe('Orders API', () => {
  let authToken;

  beforeAll(async () => {
    // Login and get token
    const response = await request(app)
      .post('/login')
      .send({
        email: 'test@example.com',
        password: 'password123'
      });
    
    authToken = response.body.token;
  });

  test('POST /newOrder should create new order', async () => {
    const orderData = {
      name: 'RELIANCE',
      qty: 10,
      price: 2500,
      mode: 'BUY'
    };

    const response = await request(app)
      .post('/newOrder')
      .set('Authorization', `Bearer ${authToken}`)
      .send(orderData)
      .expect(200);

    expect(response.body.message).toBe('Order saved successfully!');
    expect(response.body.order.name).toBe('RELIANCE');
    expect(response.body.order.qty).toBe(10);
  });
});
```

## 🚀 Deployment Configuration

### Docker Configuration
```dockerfile
# Multi-stage build for frontend
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Nginx Configuration
```nginx
# nginx.conf
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle React Router
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

### Environment Configuration
```bash
# Production environment variables
NODE_ENV=production
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/zerodha-clone
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters-long
PORT=3002
FRONTEND_URL=https://zerodha-clone-frontend.vercel.app
DASHBOARD_URL=https://zerodha-clone-dashboard.vercel.app
REDIS_URL=redis://localhost:6379
LOG_LEVEL=info
MAX_FILE_SIZE=10mb
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX=100
```

## 📈 Monitoring & Analytics

### Application Monitoring
```javascript
// Error tracking with Sentry
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === 'navigation') {
      console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart);
    }
  });
});

performanceObserver.observe({ entryTypes: ['navigation'] });
```

### Analytics Implementation
```javascript
// Google Analytics 4
import { gtag } from 'ga-gtag';

// Track page views
const trackPageView = (path) => {
  gtag('config', 'GA_MEASUREMENT_ID', {
    page_path: path,
  });
};

// Track custom events
const trackEvent = (action, category, label, value) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Usage
trackEvent('order_placed', 'trading', 'BUY_ORDER', orderValue);
```

This comprehensive technical documentation provides detailed insights into the architecture, implementation, and deployment strategies of the Zerodha Clone project. It serves as a complete reference for developers working on or studying the codebase.