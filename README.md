# 📈 Zerodha Clone - Full Stack Trading Platform

A comprehensive clone of the Zerodha trading platform built with React, Node.js, and MongoDB. Features a complete trading dashboard, landing page, and backend API with authentication.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue.svg)

## 🚀 Features

### 📊 Trading Dashboard
- **Portfolio Management** - Real-time holdings, positions, and P&L tracking
- **Order Management** - Buy/sell orders with validation and history
- **Interactive Charts** - Multiple chart types with real-time data
- **Watchlist** - Live stock monitoring with price alerts
- **Responsive Design** - Works on all devices with dark/light themes

### 🏠 Landing Page
- **Modern UI** - Clean design matching Zerodha's branding
- **Product Showcase** - Feature highlights and pricing
- **Authentication** - Secure signup/login with validation
- **SEO Optimized** - Fast loading and search engine friendly

### 🔧 Backend API
- **RESTful Architecture** - Standard HTTP methods and responses
- **JWT Authentication** - Secure token-based auth
- **MongoDB Integration** - Efficient data storage and retrieval
- **CORS & Security** - Protected routes and middleware

## 🛠️ Tech Stack

| Component | Technology | Port |
|-----------|------------|------|
| **Frontend** | React 19.1.1, React Router, Chart.js, Axios | 3000 |
| **Dashboard** | React 19.1.1, Material-UI, Tailwind CSS, Framer Motion | 3001 |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose, JWT | 3002 |

## 📁 Project Structure

```
Zerodha Clone/
├── 📂 frontend/          # Landing page (Port: 3000)
│   ├── 📂 src/Landing_page/
│   └── 📂 public/Media/
├── 📂 dashboard/         # Trading dashboard (Port: 3001)
│   ├── 📂 src/components/
│   └── 📂 src/contexts/
├── 📂 backend/          # API server (Port: 3002)
│   ├── 📂 model/        # Database models
│   ├── 📂 schemas/      # Mongoose schemas
│   └── 📂 middleware/   # Auth middleware
└── 📂 screenshots/      # Project screenshots
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB (local or cloud)
- Git

### Installation

1. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/zerodha-clone.git
   cd zerodha-clone
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```
   
   Create `.env` file:
   ```env
   MONGO_URL=mongodb://localhost:27017/zerodha-clone
   JWT_SECRET=your-secret-key
   PORT=3002
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Setup Dashboard**
   ```bash
   cd ../dashboard
   npm install
   ```

### 🏃‍♂️ Running the Application

#### Option 1: Windows Batch Scripts
```bash
# Start all services
start-zerodha.bat

# Stop all services
stop-zerodha.bat
```

#### Option 2: Manual Start
```bash
# Terminal 1 - Backend
cd backend && npm start

# Terminal 2 - Frontend
cd frontend && npm start

# Terminal 3 - Dashboard
cd dashboard && npm start
```

### 🌐 Access URLs
- **Landing Page**: http://localhost:3000
- **Dashboard**: http://localhost:3001
- **Backend API**: http://localhost:3002

## 📋 API Endpoints

### Authentication
- `POST /signup` - User registration
- `POST /login` - User login
- `GET /me` - Get current user
- `POST /logout` - User logout

### Trading
- `GET /allHoldings` - Get user holdings
- `GET /allPositions` - Get active positions
- `GET /allOrders` - Get order history
- `POST /newOrder` - Place buy order
- `POST /sellOrder` - Place sell order

## 🎨 Key Components

### Dashboard Components
- **Dashboard.jsx** - Main dashboard layout
- **Holdings.jsx** - Portfolio holdings view
- **Positions.jsx** - Active positions tracking
- **Orders.jsx** - Order management
- **WatchList.jsx** - Stock watchlist
- **Charts.jsx** - Interactive charts

### Landing Page Sections
- **Home** - Hero section and features
- **About** - Company information
- **Pricing** - Transparent pricing
- **Products** - Product showcase
- **Support** - Help and support

## 🔒 Security Features

- **JWT Authentication** - Secure token-based auth
- **Password Hashing** - bcrypt encryption
- **Input Validation** - Server-side validation
- **CORS Protection** - Cross-origin security
- **Protected Routes** - Authentication middleware

## 🚀 Deployment

### Environment Variables
```env
# Production
NODE_ENV=production
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/zerodha-clone
JWT_SECRET=your-super-secret-jwt-key
FRONTEND_URL=https://your-frontend-domain.com
DASHBOARD_URL=https://your-dashboard-domain.com
```

### Deployment Platforms
- **Backend**: Heroku, Railway, AWS EC2
- **Frontend**: Vercel, Netlify
- **Database**: MongoDB Atlas

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Zerodha](https://zerodha.com/) - India's largest stock broker
- Built for educational purposes
- Thanks to the open-source community

## 📞 Contact

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Email**: your.email@example.com

---

⭐ **Star this repository if you found it helpful!**

![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)