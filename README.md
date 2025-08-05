# 🚀 Portfolio Website with Contact Form – MongoDB Integrated

This is a modern portfolio website built using **Next.js App Router**, with a **fully functional contact form** that stores user messages in **MongoDB** via an API route. Data is viewable in **MongoDB Compass**.

---

## 📦 Tech Stack

- ✅ **Next.js 14 (App Router)**
- ✅ **React**
- ✅ **MongoDB Atlas** (or MongoDB Compass)
- ✅ **Mongoose**
- ✅ **CSS Modules / Global CSS**

---

## 📁 Project Structure

src/
├── app/
│ ├── contact/page.jsx # Contact form UI
│ ├── api/contact/route.js # API route to handle POST request
│ └── layout.jsx # Root layout
│
├── lib/
│ └── mongodb.js # MongoDB connection helper
│
├── models/
│ └── contactModel.js # Mongoose schema for contacts

yaml
Copy
Edit

---

## 📬 Contact Form

Located at: `/contact`

- Accepts: `name`, `email`, `message`
- Sends data to: `api/contact/route.js`
- Stores data in MongoDB database `portfolioDB`, collection `contacts`

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure MongoDB
Create a .env.local file in the root of the project:

env
Copy
Edit
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/
🧠 Replace <username> and <password> with your actual MongoDB credentials.

Make sure the database name used inside mongodb.js is correct (portfolioDB).

4. Run Development Server
bash
Copy
Edit
npm run dev
Visit http://localhost:3000 in your browser.

🌐 View in MongoDB Compass
Open MongoDB Compass

Paste your connection string

Select portfolioDB

Open contacts collection to view form submissions

✅ Features
Contact form with data validation

API route to handle POST requests

Backend logic to store messages in MongoDB

Secure .env usage for database credentials

🔒 Security
Always add .env.local to .gitignore

Never expose database credentials publicly

Use serverless functions (API routes) to protect sensitive logic

📄 License
This project is open-source and free to use.

Built by [Your Name] – MERN Stack Developer

yaml

---

Would you like me to generate this as a downloadable `.md` file too?