# 📈 Zerodha Clone - Full Stack Trading Platform

A comprehensive clone of the Zerodha trading platform built with React, Node.js, and MongoDB. Features a complete trading dashboard, landing page, and backend API with authentication.

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

## 📝 Project Overview

1. **Login / Signup**
   - Users start by creating an account or logging in.
   - Authentication is secured with JWT.

2. **Frontend Landing Page**
   - The first page contains a brief overview of the project and its features.
   - Users can navigate to login/signup from here.

3. **Dashboard**
   - After login, users land on the dashboard.
   - The dashboard shows portfolio overview, watchlist, and buy/sell options.

4. **Features**
   - Users can add stocks to their watchlist.
   - Users can buy or sell stocks, which updates their portfolio.
   - Interactive charts show profit/loss and portfolio performance.
   - Dark/light theme toggle and responsive design for mobile devices.

---

## 🚀 Features

### Core
- 🔐 **User Authentication** (Login/Signup/Logout) using JWT  
- 📊 **Interactive Portfolio Dashboard** with P&L charts  
- ⭐ **Stock Watchlist** (add/remove stocks)  
- 💹 **Buy & Sell Stocks** (simulated trading)  
- 📱 **Responsive Design** (mobile, tablet, desktop)  
- 🌗 **Dark/Light Theme Toggle** with persistence  

### Additional
- 📈 **Interactive Charts** using Chart.js  
- 🔍 **Stock Search** functionality  
- 💾 **Data Persistence** with LocalStorage  

---

## 🛠️ Tech Stack

**Frontend**  
- React.js  
- JavaScript (ES6+)  
- HTML5, CSS3, Bootstrap  
- Chart.js  

**Backend**  
- Node.js  
- Express.js  
- MongoDB  

**Other**  
- JWT Authentication  
- Context API (state management)  

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


```
Home Page
![image alt](https://github.com/Vivekrathore13/Stock-Trading-Platform/blob/4e59cbf1a01f0b6cc8a2412ab6b327750ffefc62/Screenshot%20(45).png)
Login/Signup
![image alt](https://github.com/Vivekrathore13/Stock-Trading-Platform/blob/4e59cbf1a01f0b6cc8a2412ab6b327750ffefc62/Screenshot%20(46).png)
Dashboard
![image alt](https://github.com/Vivekrathore13/Stock-Trading-Platform/blob/4e59cbf1a01f0b6cc8a2412ab6b327750ffefc62/Screenshot%20(47).png)
WatchList
![image alt](https://github.com/Vivekrathore13/Stock-Trading-Platform/blob/4e59cbf1a01f0b6cc8a2412ab6b327750ffefc62/Screenshot%20(48).png)

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
```




