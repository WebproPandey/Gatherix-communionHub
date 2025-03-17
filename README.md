# Community Event Website
🚀 Live Website: [https://gatherix.netlify.app]
## 📌 Overview
This is a **Community Event Website** where users can **create events** and **explore upcoming events**. The website features **authentication via Clerk**, a responsive modal layout.

## 🚀 Features
- **User Authentication** using Clerk
- **Create and Manage Events**
- **Discover Upcoming Events**
- **Responsive UI with Tailwind CSS**
- **Toast Notifications using react-toastify**

## 🛠️ Tech Stack
- **React** (v19.0.0)
- **React Router** (v7.3.0)
- **Clerk Authentication** (@clerk/clerk-react v5.24.2)
- **React Toastify** (v11.0.5) for notifications
- **Swiper** (v11.2.5) for carousels
- **Tailwind CSS** for styling

## 🔧 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/community-event-website.git
   ```
2. Navigate to the project folder:
   ```sh
   cd community-event-website
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## 🌐 Routes
The application uses **React Router** for navigation. The following routes are available:

| Route | Component | Description |
|--------|-----------------|-----------------------------|
| `/` | `Home` | Displays the homepage |
| `/create-communities` | `EventsPage` | Allows users to create an event |
| `/discover-communities` | `DiscoverEvent` | Shows a list of upcoming events |

## 📦 Dependencies
```json
"dependencies": {
  "@clerk/clerk-react": "^5.24.2",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router": "^7.3.0",
  "react-router-dom": "^7.3.0",
  "react-toastify": "^11.0.5",
  "swiper": "^11.2.5"
}
```

## ✨ Contributing
If you’d like to contribute, please **fork** the repository and submit a **pull request** with your changes.

## 📄 License
This project is licensed under the **MIT License**.

---

🚀 Happy Coding! 🎉

