# Loan Utilization Tracking System

A comprehensive platform for managing loan applications, tracking utilization, and providing administrative oversight. Built for Smart India Hackathon 2025.

## 🚀 Quick Start

### Option 1: Start All Applications (Development)
```bash
# Windows
start-all.bat

# Linux/Mac
./start-all.sh
```

### Option 2: Deploy for Production
```bash
# Windows
deploy.bat

# Linux/Mac
./deploy.sh
```

### Option 3: Using npm scripts
```bash
# Install all dependencies
npm run install:all

# Start all applications in development mode
npm run dev

# Build all applications for production
npm run build:all

# Deploy the complete system
npm run deploy
```

## 📱 Applications

### 1. Admin Dashboard
- **Port**: 5173 (dev) / Static files (production)
- **Purpose**: Administrative interface for managing loans, users, and submissions
- **Features**: Complete oversight and control panel

### 2. Beneficiary Mobile App
- **Port**: 5175 (dev) / Static files (production)
- **Purpose**: Mobile interface for loan beneficiaries
- **Features**: Submit applications and track loan status

### 3. Backend Architecture
- **Port**: 5174 (dev) / Static files (production)
- **Purpose**: API documentation and architecture overview
- **Features**: Technical specifications and endpoints

### 4. Main Page
- **Port**: 8080
- **Purpose**: Central navigation hub
- **Features**: Access all applications from one place

## 🛠️ Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Python 3 (for local server)

### Individual Application Development

#### Admin Dashboard
```bash
cd Admin
npm install
npm run dev
# Available at http://localhost:5173
```

#### Backend Architecture
```bash
cd "Backend Architecture"
npm install
npm run dev
# Available at http://localhost:5174
```

#### Beneficiary Mobile App
```bash
cd "Beneficiary Mobile App Design"
npm install
npm run dev
# Available at http://localhost:5175
```

## 📦 Project Structure

```
Prototype/
├── index.html                          # Main landing page
├── styles.css                          # Main page styles
├── package.json                        # Root package configuration
├── start-all.bat                       # Windows script to start all apps
├── start-all.sh                        # Linux/Mac script to start all apps
├── deploy.bat                          # Windows deployment script
├── deploy.sh                           # Linux/Mac deployment script
├── README.md                           # This file
├── README-DEPLOYMENT.md                # Detailed deployment guide
├── SIH2025-logo.png                    # SIH logo
├── Admin/                              # Admin React application
│   ├── package.json
│   ├── src/
│   └── ...
├── Backend Architecture/               # Backend docs React application
│   ├── package.json
│   ├── src/
│   └── ...
└── Beneficiary Mobile App Design/      # Mobile app React application
    ├── package.json
    ├── src/
    └── ...
```

## 🎯 Features

### Main Page
- **Modern UI**: Beautiful, responsive design with gradient backgrounds
- **Interactive Cards**: Hover effects and smooth animations
- **Smart Navigation**: Direct links to all applications
- **Development Tools**: Buttons to start individual dev servers
- **Deployment Options**: Quick deployment and production setup

### Admin Dashboard
- **User Management**: Manage system users and permissions
- **Loan Management**: Create, edit, and track loan applications
- **Analytics**: Comprehensive reporting and analytics
- **Settings**: System configuration and preferences

### Beneficiary Mobile App
- **Mobile-First Design**: Optimized for mobile devices
- **Application Submission**: Easy loan application process
- **Status Tracking**: Real-time loan status updates
- **Document Upload**: Secure document submission

### Backend Architecture
- **API Documentation**: Complete API reference
- **Architecture Diagrams**: Visual system overview
- **Technical Specifications**: Detailed technical documentation
- **Integration Guides**: How to integrate with the system

## 🚀 Deployment

### Local Development
1. Run `start-all.bat` (Windows) or `./start-all.sh` (Linux/Mac)
2. All applications will start automatically
3. Access the main page at http://localhost:8080

### Production Deployment
1. Run `deploy.bat` (Windows) or `./deploy.sh` (Linux/Mac)
2. All applications will be built for production
3. Static files will be served from http://localhost:8080

### Manual Deployment
1. Build all applications: `npm run build:all`
2. Deploy the static files to your web server
3. Configure your web server to serve the files

## 🔧 Configuration

### Port Configuration
- Admin Dashboard: 5173 (dev), static files (prod)
- Backend Architecture: 5174 (dev), static files (prod)
- Beneficiary Mobile App: 5175 (dev), static files (prod)
- Main Page: 8080

### Environment Variables
No environment variables are required for basic functionality.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🏆 Smart India Hackathon 2025

This project was developed for Smart India Hackathon 2025. It demonstrates modern web development practices and provides a comprehensive solution for loan utilization tracking.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation in each application folder

## 🔄 Updates

- **v1.0.0**: Initial release with all three applications
- **v1.1.0**: Added main page with navigation
- **v1.2.0**: Added deployment scripts and automation
- **v1.3.0**: Enhanced UI and user experience

---

**Built with ❤️ for Smart India Hackathon 2025**
