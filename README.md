# 🛒 E-Commerce Web Application

A modern full-stack **E-Commerce Web Application** designed to provide a seamless online shopping experience. The application includes product browsing, user authentication, shopping cart management, checkout, order processing, and a structured backend with database integration.

The project was developed as a full-stack application with a clear separation between the frontend, backend, database layer, and supporting services.

---

## 🚀 Live Project

🔗 **GitHub Repository:**
https://github.com/umeshkumar-git/e-commerce-app

---

## 📌 Project Overview

This project demonstrates the development of a complete e-commerce platform from frontend UI to backend APIs and database management.

The application focuses on:

* Modern and responsive user interface
* Product discovery and browsing
* User authentication
* Shopping cart functionality
* Checkout and order management
* Backend API development
* Database persistence
* Structured application architecture
* Secure environment configuration

---

## ✨ Key Features

### 👤 User Features

* User registration and authentication
* User login/logout
* Browse available products
* View product details
* Add products to cart
* Update product quantities
* Remove products from cart
* Checkout workflow
* Order creation
* Order management

### 🛍️ Product Management

* Product listing
* Product details
* Product categorization
* Product data stored in the database
* Dynamic product retrieval through backend services

### 🛒 Shopping Cart

* Add products to cart
* Increase/decrease quantity
* Remove products
* Calculate cart totals
* Persistent cart-related data

### 📦 Order Management

* Create orders during checkout
* Store customer/order information
* Maintain order records
* Retrieve order information from the database

### 🔐 Authentication & Security

* User authentication
* Protected application functionality
* Environment-based configuration
* Secure handling of sensitive credentials

---

## 🏗️ Application Architecture

```text
                    ┌──────────────────────┐
                    │       Client         │
                    │      Frontend        │
                    └──────────┬───────────┘
                               │
                               │ API Requests
                               ▼
                    ┌──────────────────────┐
                    │       Backend        │
                    │   Server / API Layer │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Database Layer     │
                    │       Prisma         │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      Database        │
                    └──────────────────────┘
```

---

## 🧰 Tech Stack

### Frontend

* React
* TypeScript
* Modern CSS / UI styling
* Responsive design
* Component-based architecture

### Backend

* Node.js
* API-based backend architecture
* Server-side business logic
* REST/API communication

### Database

* PostgreSQL
* Prisma ORM

### Development Tools

* Git
* GitHub
* npm
* Environment variables
* TypeScript

---

## 📂 Project Structure

```text
e-commerce-app/
│
├── backend/
│   └── Backend application and API logic
│
├── frontend/
│   └── Frontend application
│
├── lib/
│   └── Shared libraries and utilities
│
├── prisma/
│   └── Database schema and Prisma configuration
│
├── docs/
│   └── Project documentation
│
├── prisma.config.ts
├── .gitignore
└── README.md
```

---

## 🔄 Application Workflow

### 1. User Visits the Application

The user accesses the e-commerce frontend and can browse the available products.

### 2. Product Discovery

Products are retrieved from the backend and displayed through the frontend interface.

### 3. Authentication

Users can create an account or log in to access account-related functionality.

### 4. Cart Management

Users can add products to their shopping cart and modify quantities before checkout.

### 5. Checkout

The selected products and required order information are submitted to the backend.

### 6. Order Creation

The backend processes the request and stores the order information in the database.

### 7. Database Persistence

Prisma handles communication between the application and the PostgreSQL database.

---

## 🗄️ Database

The project uses **Prisma ORM** as the database access layer.

Prisma provides:

* Type-safe database queries
* Database schema management
* Structured data models
* Easier database migrations
* Strong integration with TypeScript

The Prisma-related configuration is maintained inside the project's `prisma` directory and root configuration.

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* PostgreSQL database
* Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/umeshkumar-git/e-commerce-app.git

cd e-commerce-app
```

---

### 2. Install Dependencies

Install dependencies for the frontend and backend:

```bash
cd frontend
npm install
```

Then:

```bash
cd ../backend
npm install
```

If your project uses dependencies from the root directory, install them there as well:

```bash
cd ..
npm install
```

---

## 🔐 Environment Variables

Create the required `.env` files according to your local configuration.

Example:

```env
DATABASE_URL="your_database_connection_string"

NEXTAUTH_URL="http://localhost:3000"

NEXTAUTH_SECRET="your_secret_key"
```

If payment functionality is configured:

```env
RAZORPAY_KEY_ID="your_razorpay_key"
RAZORPAY_KEY_SECRET="your_razorpay_secret"
```

> Never commit `.env` files or secret keys to GitHub.

---

## 🗃️ Prisma Setup

After configuring the database connection:

```bash
npx prisma generate
```

Run the required database migration:

```bash
npx prisma migrate dev
```

You can inspect the database using:

```bash
npx prisma studio
```

---

## ▶️ Running the Project

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

Then open the local development URL shown by the frontend development server.

---

## 🔌 API Layer

The backend is responsible for handling application requests such as:

```text
User Authentication
       │
       ▼
Product Requests
       │
       ▼
Cart Operations
       │
       ▼
Checkout
       │
       ▼
Order Processing
       │
       ▼
Database
```

This separation keeps the frontend focused on presentation and user interaction while the backend handles business logic and data operations.

---

## 🎯 Project Goals

The main goals of this project were to:

* Build a complete full-stack e-commerce application
* Understand frontend/backend integration
* Implement database-driven functionality
* Work with Prisma ORM
* Build reusable frontend components
* Develop backend APIs
* Handle authentication and application security
* Understand real-world e-commerce workflows
* Practice production-oriented project structure

---

## 🧠 What I Learned

Through this project, I gained practical experience in:

* Full-stack web application development
* React and TypeScript
* Backend API development
* Database design
* Prisma ORM
* PostgreSQL
* Authentication
* API integration
* Environment configuration
* Git and GitHub
* Debugging full-stack applications
* Structuring scalable web applications

---

## 🔮 Future Improvements

Possible improvements for future versions include:

* Advanced product search
* Product filtering and sorting
* Wishlist functionality
* Product reviews and ratings
* Order tracking
* Admin dashboard
* Inventory management
* Image optimization
* Email notifications
* Payment gateway improvements
* Automated testing
* CI/CD pipeline
* Production deployment
* Performance optimization

---

## 📸 Screenshots

Add screenshots of the application here.

```text
docs/
├── home.png
├── products.png
├── product-details.png
├── cart.png
├── checkout.png
└── orders.png
```

Example:

```markdown
![Home Page](docs/home.png)

![Products Page](docs/products.png)

![Shopping Cart](docs/cart.png)

![Checkout](docs/checkout.png)
```

---

## 👨‍💻 Author

### Umesh Kumar Shah

Computer Science & Engineering Student
Full-Stack Developer

**GitHub:**
https://github.com/umeshkumar-git

---

## 📄 License

This project is intended for educational and portfolio purposes.

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

**Built with ❤️ by Umesh Kumar Shah**
