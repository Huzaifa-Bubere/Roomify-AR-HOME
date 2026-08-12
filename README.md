

# 🏠 Roomify AR Home

**Smart Furniture Shopping & 3D Interior Visualization Platform**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-3D-000000?logo=three.js&logoColor=white)](https://threejs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?logo=netlify&logoColor=white)](https://www.netlify.com/)
[![License](https://img.shields.io/badge/License-Academic%20%2F%20Demo-lightgrey)](#license)

Roomify AR Home is a web-based furniture visualization and shopping platform that lets users browse furniture, explore products in an interactive 3D environment, manage a shopping cart, and preview items through an AR Try-On experience.

Built with **React**, **Three.js**, **React Three Fiber**, and **Firebase Firestore**, it delivers an interactive, interior-design-oriented shopping experience that goes beyond static product photos.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Solution](#-solution)
- [Key Features](#-key-features)
- [How It Works](#-how-it-works)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running the Project](#-running-the-project)
- [Running Tests](#-running-tests)
- [Production Build](#-production-build)
- [Firebase Configuration](#-firebase-configuration)
- [Application Routes](#-application-routes)
- [3D Visualization](#-3d-visualization)
- [AR Try-On](#-ar-try-on)
- [Shopping Cart Architecture](#-shopping-cart-architecture)
- [Invoice Generation](#-invoice-generation)
- [Authentication](#-authentication)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Security Notes](#-security-notes)
- [Current Limitations](#-current-limitations)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🌟 Overview

Buying furniture online makes it hard for customers to tell whether a product will actually look good or fit in their space — traditional storefronts usually offer nothing more than static images.

Roomify improves on this by combining:

- Interactive furniture browsing
- Category-based product discovery
- 3D furniture visualization
- Detailed product pages
- AR Try-On functionality
- Shopping cart management with quantity control
- Promotional discounts
- Simulated checkout
- PDF invoice generation
- Firebase-powered user registration and login

The goal is to make furniture selection more interactive, visual, and confidence-inspiring.

## ❗ Problem Statement

Customers shopping for furniture online commonly struggle with:

- Difficulty visualizing furniture in a real environment
- Uncertainty about how a product will actually look or fit
- Reliance on static, one-dimensional product photography
- Difficulty comparing furniture across categories
- A lack of interactive visualization tools
- Limited or fragmented shopping and ordering workflows

## 💡 Solution

Roomify combines 3D visualization, AR interaction, product browsing, and shopping-cart functionality into a single application. A typical user journey looks like this:

1. Open the Roomify website
2. Explore furniture categories
3. Browse available products
4. View detailed product information
5. Interact with a 3D furniture model
6. Launch the AR Try-On experience
7. Add furniture to the shopping cart
8. Adjust product quantities
9. Apply a promotional discount
10. Generate an order invoice (PDF)

---

## ✨ Key Features

### 🛋️ Furniture Catalog
Browse furniture across categories such as **Sofas, Chairs, Tables, Beds, and Lamps**, each with a name, category, price, image, and detailed description. The catalog currently lives inside the React application.

### 🎨 Interactive 3D Furniture Viewer
Powered by **Three.js**, **React Three Fiber**, and **React Three Drei**, the home page renders an interactive 3D sofa model (`/public/models/Sofa.glb`) that users can rotate and explore with orbit controls.

### 📱 AR Try-On
Each product detail page includes an **AR Try-On** button that redirects to a configured external 3D/AR experience, letting users visualize furniture in a more immersive way.

> **Note:** The AR experience is currently powered by an external 3D/AR service rather than being fully embedded in the React app.

### 🔐 User Registration & Login
Includes registration, login, password confirmation, duplicate-user detection, validation, and success/error notifications. User records are stored in a Firestore collection named `users`.

### 🗂️ Furniture Categories
Products are organized into categories (`Sofas`, `Chairs`, `Tables`, `Beds`, `Lamps`) for faster discovery.

### 🛒 Shopping Cart
A full client-side cart workflow: add/remove products, adjust quantities, view subtotal, apply discounts, view shipping and tax, and see an estimated total — all shared across components via React's Context API.

### 🎟️ Promotional Discount
A demo promo code, `APSIT`, applies a **20% discount**. This is a client-side demonstration feature and should not be used as-is in a production payment system.

### 🧾 PDF Invoice Generation
Using **jsPDF**, the cart generates a downloadable invoice containing Roomify branding, invoice date and ID, product line items, quantities, prices, subtotal, discount, additional charges, and the final estimated total.

### 🎬 Intro Experience
An introductory video (`/public/Intro.mp4`) plays when the app first loads, before transitioning into the main interface.

### 📱 Responsive Interface
Navigation, product pages, and the cart all include responsive styling for desktop, tablet, and mobile.

---

## 🔄 How It Works

```text
                 ┌──────────────────┐
                 │     User Opens   │
                 │      Roomify     │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │   Intro Video    │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │    Home Page     │
                 │ Hero + Products  │
                 └────────┬─────────┘
                          │
             ┌────────────┼────────────┐
             ▼            ▼            ▼
        Categories    Product       Login /
                       Details       Signup
             │            │
             │            ▼
             │       ┌───────────┐
             │       │ 3D Viewer │
             │       └─────┬─────┘
             │             │
             │             ▼
             │        ┌──────────┐
             │        │ AR Try-On│
             │        └──────────┘
             │
             ▼
        Product List
             │
             ▼
        Add to Cart
             │
             ▼
       Shopping Cart
             │
       ┌─────┴─────┐
       ▼           ▼
   Discount      Invoice
       │           │
       └─────┬─────┘
             ▼
          Checkout
```

---

## 🧰 Technology Stack

**Frontend**

| Technology | Purpose |
|---|---|
| React 19 | User interface |
| React Router 7 | Client-side routing |
| React Three Fiber | React renderer for Three.js |
| Three.js | 3D rendering engine |
| React Three Drei | Three.js helper components |
| Styled Components | Component-level styling |
| React Icons / Font Awesome | Iconography |
| Framer Motion | UI animation |
| CSS | Layout and styling |

**Backend / Cloud Services**

| Technology | Purpose |
|---|---|
| Firebase | Cloud application services |
| Firebase Firestore | User data storage |

**Utilities**

| Library | Purpose |
|---|---|
| jsPDF | PDF invoice generation |
| Web Vitals | Performance monitoring |
| React Testing Library | Testing |

> The authoritative dependency list is always the repository's `package.json`.

---

## 🏗️ Project Architecture

Roomify follows a component-based React architecture:

```text
Roomify-AR-HOME
│
├── public/
│   ├── Images/
│   ├── models/
│   ├── Intro.mp4
│   ├── index.html
│   └── ...
│
├── src/
│   ├── Component/
│   │   ├── Cart.jsx
│   │   ├── CartPage.jsx
│   │   ├── Categories.js
│   │   ├── CategoriesProduct.jsx
│   │   ├── FeaturedProduct.js
│   │   ├── Footer.js
│   │   ├── HeroSection.jsx
│   │   ├── IntroVideo.jsx
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductDetail.jsx
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.css
│   └── index.js
│
├── .gitignore
├── netlify.toml
├── package.json
├── package-lock.json
└── README.md
```

## 📁 Project Structure

### `public/`
Static assets used by the application:

```text
public/
├── Images/
├── models/
├── Intro.mp4
├── favicon.ico
├── index.html
├── logo192.png
├── logo512.png
├── manifest.json
└── robots.txt
```

### `src/`
The React application source.

**`src/App.js`** — the main application component, responsible for:
- Application routing
- Intro-video state
- Cart context (`CartContext`)
- Add-to-cart / remove-from-cart logic
- Quantity updates

**`src/Component/`** — reusable application components:

| Component | Responsibility |
|---|---|
| `Navbar.jsx` | Application navigation |
| `HeroSection.jsx` | Landing section + 3D model |
| `FeaturedProduct.js` | Featured furniture display |
| `Categories.js` | Furniture category listing |
| `CategoriesProduct.jsx` | Category-specific product view |
| `ProductDetail.jsx` | Product information + AR Try-On |
| `Cart.jsx` | Cart UI |
| `CartPage.jsx` | Cart, discounts, and invoice generation |
| `Login.jsx` | Login / signup + Firebase auth |
| `IntroVideo.jsx` | Intro video/animation |
| `Footer.js` | Site footer |

---

## ⚙️ Prerequisites

Before running Roomify, make sure you have:

- **Node.js** (v18 or later recommended — matches the Netlify build config)
- **npm**
- **Git**
- A modern web browser

Verify your setup:

```bash
node --version
npm --version
git --version
```

---

## 🚀 Installation

**1. Clone the repository**

```bash
git clone https://github.com/Huzaifa-Bubere/Roomify-AR-HOME.git
cd Roomify-AR-HOME
```

**2. Install dependencies**

```bash
npm install
```

This installs everything defined in `package.json`.

---

## ▶️ Running the Project

Start the development server:

```bash
npm start
```

The app runs at:

```text
http://localhost:3000
```

This uses the standard Create React App dev command (`react-scripts start`).

---

## 🧪 Running Tests

```bash
npm test
```

For a single non-interactive run:

```bash
npm test -- --watchAll=false
```

---

## 📦 Production Build

Generate an optimized production build:

```bash
npm run build
```

Output is written to the `build/` directory, using the standard Create React App build process.

---

## 🔥 Firebase Configuration

Roomify uses **Firebase Firestore** for user data. The login component initializes Firebase and reads/writes to a `users` collection using `getDocs()` and `addDoc()`.

### Setting up your own Firebase project

1. **Create a Firebase project** in the [Firebase Console](https://console.firebase.google.com/).
2. **Enable Firestore** — create a Cloud Firestore database.
3. **Register a web app** within your Firebase project.
4. **Copy your Firebase config**, which will look like:

   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT.firebasestorage.app",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

5. **Replace the configuration** in `src/Component/Login.jsx` with your own values.

> 💡 For production use, move these values into environment variables — see [Security Notes](#-security-notes).

---

## 🗺️ Application Routes

Defined in `src/App.js` using React Router:

| Route | Page |
|---|---|
| `/` | Home |
| `/home` | Home |
| `/categories` | Furniture categories |
| `/categories/:categoryName` | Products by category |
| `/product/:productId` | Product details |
| `/cart` | Shopping cart |
| `/login` | Login / Signup |

---

## 🧊 3D Visualization

Roomify renders furniture models using React Three Fiber and Drei:

```javascript
useGLTF("/models/Sofa.glb")
```

...rendered inside a `<Canvas>`, with `<Stage>` and `<OrbitControls>` handling scene presentation and interaction.

**Asset location:** `public/models/`

To add another model, place the `.glb`/`.gltf` file in `public/models/` and update the component that loads it.

---

## 📱 AR Try-On

The product detail page includes an **AR Try-On** button (implemented in `ProductDetail.jsx`) that redirects to an external AR/3D experience:

```text
https://venny-hong.github.io/3D_Model/
```

> **Important:** Roomify itself is the furniture shopping and visualization frontend — the AR experience is externally hosted. To make AR fully self-contained, this integration could be replaced with WebXR/WebAR or another in-app AR framework.

---

## 🛒 Shopping Cart Architecture

Cart state is managed globally via React's **Context API** (`CartContext`, defined in `src/App.js`), exposing:

```text
cart
addToCart()
removeFromCart()
updateQuantity()
```

This lets any component read or update the cart without prop-drilling.

**Cart flow:**

```text
Product → Add to Cart → CartContext → Shopping Cart
   → Quantity / Remove → Price Calculation → Discount → Checkout
```

---

## 🧾 Invoice Generation

Implemented in `src/Component/CartPage.jsx` using **jsPDF**, the generated invoice includes:

```text
Roomify
Invoice Date
Invoice ID
Product Name
Quantity
Product Price
Subtotal
Discount
Shipping
Tax
Estimated Total
```

---

## 🔐 Authentication

The project currently implements a custom Firebase Firestore-based login/signup flow.

**Signup** — collects Name, Email, Password, and Confirm Password, and checks whether the email already exists before creating a new user document.

**Login** — checks the `users` collection in Firestore and compares entered credentials against the stored record.

> ⚠️ **Production recommendation:** Replace this custom flow with **Firebase Authentication** (or another dedicated auth provider) rather than storing and comparing passwords manually.

---

## 🌐 Deployment

Roomify ships with a `netlify.toml` configuration:

```toml
[build]
  command = "npm run build"
  publish = "build"
```

It targets **Node.js 18** and includes a single-page-application redirect so React Router routes resolve correctly after deployment.

### Deploying on Netlify

1. Push the project to GitHub.
2. In [Netlify](https://app.netlify.com/), create a new site from your GitHub repository.
3. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
4. Deploy — Netlify installs dependencies, builds the app, and publishes the `build` output.

---

## 🛠️ Troubleshooting

<details>
<summary><strong>`npm` is not recognized</strong></summary>

Install Node.js and restart your terminal, then verify:

```bash
node -v
npm -v
```
</details>

<details>
<summary><strong>Port 3000 is already in use</strong></summary>

Create React App will prompt to use another port — accept, or stop whatever else is using port 3000.
</details>

<details>
<summary><strong>3D model doesn't display</strong></summary>

Confirm the model exists at `public/models/Sofa.glb` and that the path in code matches exactly:

```javascript
useGLTF("/models/Sofa.glb")
```
</details>

<details>
<summary><strong>Product images are missing</strong></summary>

Check `public/Images/` and confirm the filename and capitalization exactly match the path referenced in code — e.g. `/images/sofa.jpg` and `/images/Sofa.jpg` are **not** the same on case-sensitive hosting.
</details>

<details>
<summary><strong>Firebase login/signup doesn't work</strong></summary>

Check that:
1. The Firebase project exists.
2. Firestore is enabled.
3. Firestore security rules permit the required operations.
4. The Firebase config in `Login.jsx` is correct.
5. The browser console for Firebase-specific errors.
6. The `users` collection exists (or can be created).
7. Your deployed domain is authorized in the Firebase project.
</details>

<details>
<summary><strong>React Router route returns 404 after deployment</strong></summary>

Make sure your host redirects all routes to `/index.html`. This is already configured for Netlify in `netlify.toml`.
</details>

---

## 🔒 Security Notes

This project is currently best suited as a **student / academic / demo project**. Before using it in production, address the following:

1. **Use Firebase Authentication** instead of comparing passwords manually against Firestore records.
2. **Lock down Firestore security rules** so users can't read or modify each other's data.
3. **Never store plain-text passwords** — use a dedicated auth provider.
4. **Move Firebase config to environment variables**, e.g.:
   ```text
   REACT_APP_FIREBASE_API_KEY
   REACT_APP_FIREBASE_AUTH_DOMAIN
   REACT_APP_FIREBASE_PROJECT_ID
   REACT_APP_FIREBASE_STORAGE_BUCKET
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID
   REACT_APP_FIREBASE_APP_ID
   ```
5. **Add a real backend for e-commerce** — API, database, authentication service, payment gateway, order and inventory management, and an admin dashboard.

---

## 🚧 Current Limitations

- Product data lives in frontend code (no database-backed catalog).
- Cart state is held in React state (client-side only).
- Checkout is simulated — no real payment processing.
- The promo code is a client-side demo, not a real discount engine.
- AR Try-On is externally hosted, not embedded.
- No production payment gateway.
- No inventory management system.
- No dedicated backend API.
- Authentication should be migrated to Firebase Authentication for production use.
- No admin dashboard for product management.

---

## 🔮 Future Improvements

**🛍️ E-Commerce**
Real product database · search & filters · wishlist · reviews · stock management · order history & tracking

**💳 Payments**
Razorpay / Stripe integration · secure checkout · payment verification · refunds

**🤖 AI Features**
AI interior design assistant · furniture recommendations · room style detection · AI color suggestions

**📱 AR / 3D**
Embedded WebAR · real-time placement · scaling & rotation · multi-object rooms · room measurement · saved AR layouts · AR screenshots

**👨‍💼 Administration**
Admin dashboard · product/category/user/order management · sales analytics

**☁️ Cloud & Performance**
Image optimization · CDN integration · lazy loading · 3D model optimization · PWA improvements · CI/CD automation

---

## 🤝 Contributing

Contributions are welcome!

1. **Fork** the repository and clone it:
   ```bash
   git clone https://github.com/Huzaifa-Bubere/Roomify-AR-HOME.git
   ```
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**, following the existing component structure and coding style.
4. **Test your changes:**
   ```bash
   npm test
   npm run build
   ```
5. **Commit:**
   ```bash
   git add .
   git commit -m "feat: add your feature"
   ```
6. **Push and open a Pull Request:**
   ```bash
   git push origin feature/your-feature-name
   ```
   In your PR description, explain what changed, why, how it was tested, and include screenshots or a demo if relevant.

---

## 📄 License

This project is currently intended as an academic/demo project. 
---

## 👨‍💻 Author

**Huzaifa Bubere**
Diploma Engineering Student & Software Developer

- GitHub: [@Huzaifa-Bubere](https://github.com/Huzaifa-Bubere)
- Repository: [Roomify AR Home](https://github.com/Huzaifa-Bubere/Roomify-AR-HOME)

---

## ⭐ Support

If you find this project useful:

- ⭐ Star the repository
- 🍴 Fork the project
- 🐛 Report bugs
- 💡 Suggest improvements
- 🔧 Submit pull requests

---

## 📚 Project Summary

Roomify AR Home is a React-based furniture visualization platform combining 3D rendering, AR Try-On, furniture discovery, user registration, cart management, promotional discounts, simulated checkout, and PDF invoice generation — demonstrating how modern web technologies can create a more immersive furniture-shopping experience.

**Core Technologies:** React · React Router · Three.js / React Three Fiber · Firebase Firestore · Styled Components · jsPDF · 3D Models · AR Integration

> *"Visualize your furniture. Design your space. Shop with confidence."*

## 🎥 Project Demo

Watch the complete demonstration of Roomify AR Home:

[![Roomify AR Home - Project Demo]


https://github.com/user-attachments/assets/a9b6dc5b-6ec2-4b8c-bae8-ff72417600f6




**Duration:** 5:28

The demo covers:

- 🏠 Home page and 3D furniture visualization
- 🪑 Furniture categories
- 🛋️ Product browsing
- 🔍 Product details
- 🧊 Interactive 3D model
- 📱 AR Try-On
- 🛒 Add to cart
- 🎟️ Discount application
- 🧾 Invoice generation
- 🔐 Login / Signup
