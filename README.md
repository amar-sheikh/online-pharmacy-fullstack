# online-pharmacy-fullstack
=======
# 💊 Online Pharmacy – Fullstack E-commerce Platform

This is a **fullstack online pharmacy application**, built with **React + Vite** on the frontend and **Strapi CMS** on the backend. It enables users to browse, search, and purchase medications and health products through a modern and responsive interface.

---
## Project Overview



https://github.com/user-attachments/assets/8aa65190-a2aa-415e-85e3-b610fd210083



## 🚀 Tech Stack

| Layer    | Technology          |
| -------- | ------------------- |
| Frontend | React (with Vite)   |
| Backend  | Strapi (Node.js)    |
| API      | REST (Strapi API)   |
| Database | SQLite / PostgreSQL |
| Auth     | JWT Auth (Strapi-admin only)|
| Payment  | Stripe Integration  |

---

## 📁 Folder Structure

```
online-pharmacy-fullstack/
├── backend/   → Strapi backend (CMS, APIs, DB)
└── frontend/  → React + Vite frontend (UI/UX)
```

---

## 🌐 Features

### 🛍️ Frontend (React + Vite)

* 🌿 **Category Browsing**: Browse by categories like "Natural Herb", "Supplements", etc.
* 🏷️ **Brand Listings**: Filter products by pharmaceutical or herbal brands
* 🔎 **Search**: Real-time search with keyword matching
* 📦 **Single Product View**: View full product details, ingredients, dosage
* 🛒 **Cart & Checkout**:

  * Add/remove products
  * Real-time cart sidebar
  * Product Quantity controll
  * Stripe-integrated secure payments

---

### 🛠️ Backend (Strapi CMS)

* ✅ **Product Management**: Add/edit/delete products, images, pricing
* 📂 **Categories & Brands**: Manage product classification
* 📦 **Orders API**: Handle order submissions and status updates
* 🛡️ **Authentication & Permissions**: Role-based admin control
* 📸 **Media Uploads**: (Optional) Cloudinary integration

---

## 🔗 API Endpoints (Strapi)

| Endpoint            | Description            |
| ------------------- | ---------------------- |
| `/api/products`     | Get all products       |
| `/api/products/:id` | Single product detail  |
| `/api/categories`   | Get all categories     |
| `/api/brands`       | Get all brands         |
| `/api/orders`       | Post and manage orders |

---

## 🧪 Getting Started

### 🖥️ Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env   # Set env variables {strapi auth token}
npm install axios
npm run dev
# Visit: http://localhost:5173
```

### 🛠️ Backend Setup

```bash
cd backend
npm install
cp .env.example .env   # Set env variables {stripe token }
npm run develop
# Visit admin: http://localhost:1337/admin
```

# 7. Register your admin account
#    (This is only local and required once per environment)

> 📝 Note: Use a valid API token or JWT in frontend `api.js` for authenticated requests.

## 🙋‍♂️ Author

**Amar Sheikh**
[GitHub Profile »](https://github.com/amar-sheikh)
