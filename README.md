# Blossom Rick & Morty App 🚀
Full-stack application built with **React 18**, **GraphQL**, **Apollo Client/Server**, **Node.js**, **Sequelize**, and **MySQL**, using data from the **Rick and Morty API**.  
The project allows browsing characters, searching, filtering, and marking characters as favorites.

---

## 🧱 Project Structure

blossom-rick-morty/
│
├── backend/
│ ├── config/
│ │ └── config.json
│ ├── migrations/
│ ├── models/
│ ├── seeders/
│ ├── src/
│ │ ├── cache/ # Redis (optional)
│ │ ├── config/
│ │ │ └── db.js
│ │ ├── database/
│ │ │ └── sequelize.js
│ │ ├── graphql/
│ │ │ ├── schema.js
│ │ │ └── resolvers.js
│ │ ├── middleware/
│ │ │ └── logger.js
│ │ └── models/ # Sequelize models
│ └── package.json
│
├── frontend/
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── components/
│ │ │ ├── characters/
│ │ │ │ ├── CharacterDetail.jsx
│ │ │ │ └── CharacterList.jsx
│ │ │ └── ui/
│ │ │ └── SearchWithFilters.jsx
│ │ ├── graphql/
│ │ │ ├── mutations.js
│ │ │ └── queries.js
│ │ ├── pages/
│ │ │ └── Home.jsx
│ │ ├── apolloClient.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── index.css
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ └── package.json
├── docs/
│ ├── screenshots/
│ │   ├── frontend-home.png
│ │   ├── frontend-filters.png
│ │   ├── graphql-query.png
│ │   └── db-characters.png
│ ├── erd-blossom.png
│ └── PROJECT_DOCUMENTATION.md
└── README.md

## ✨ Features Developed

### Frontend
- React 18 with functional components and hooks
- Apollo Client for GraphQL communication
- Character list with:
  - Search by name
  - Filter by species
  - Filter by favorites (Starred / Others)
- Character detail view
- Toggle favorite status (heart icon)
- Responsive UI built with **Tailwind CSS**

### Backend
- Node.js with Apollo Server (GraphQL)
- Sequelize ORM with MySQL
- Database migrations and seeders
- Data populated from the external **Rick and Morty API**
- Favorite toggle persisted in the database
- Optional Redis caching layer
---

## 🧰 Tech Stack & Versions

### Frontend
- **React**: 18.x
- **Apollo Client**: 3.x
- **React Router DOM**: 6.x
- **Tailwind CSS**: 3.x

### Backend
- **Node.js**: 18+ recommended
- **Apollo Server**: 3.x
- **GraphQL**
- **Sequelize**: 6.x
- **MySQL**: 8.x
- **Redis** (optional)
---

## 🗄️ Database Setup

In this setup, the database was created **manually** with the name: "## ✨ Features Developed

### Frontend
- React 18 with functional components and hooks
- Apollo Client for GraphQL communication
- Character list with:
  - Search by name
  - Filter by species
  - Filter by favorites (Starred / Others)
- Character detail view
- Toggle favorite status (heart icon)
- Responsive UI built with **Tailwind CSS**

### Backend
- Node.js with Apollo Server (GraphQL)
- Sequelize ORM with MySQL
- Database migrations and seeders
- Data populated from the external **Rick and Morty API**
- Favorite toggle persisted in the database
- Optional Redis caching layer

---

## 🧰 Tech Stack & Versions

### Frontend
- **React**: 18.x
- **Apollo Client**: 3.x
- **React Router DOM**: 6.x
- **Tailwind CSS**: 3.x

### Backend
- **Node.js**: 18+ recommended
- **Apollo Server**: 3.x
- **GraphQL**
- **Sequelize**: 6.x
- **MySQL**: 8.x
- **Redis** (optional)

---

## 🗄️ Database Setup

In this setup, the database was created **manually** with the name: ## ✨ Features Developed

### Frontend
- React 18 with functional components and hooks
- Apollo Client for GraphQL communication
- Character list with:
  - Search by name
  - Filter by species
  - Filter by favorites (Starred / Others)
- Character detail view
- Toggle favorite status (heart icon)
- Responsive UI built with **Tailwind CSS**

### Backend
- Node.js with Apollo Server (GraphQL)
- Sequelize ORM with MySQL
- Database migrations and seeders
- Data populated from the external **Rick and Morty API**
- Favorite toggle persisted in the database
- Optional Redis caching layer

---

## 🧰 Tech Stack & Versions

### Frontend
- **React**: 18.x
- **Apollo Client**: 3.x
- **React Router DOM**: 6.x
- **Tailwind CSS**: 3.x

### Backend
- **Node.js**: 18+ recommended
- **Apollo Server**: 3.x
- **GraphQL**
- **Sequelize**: 6.x
- **MySQL**: 8.x
- **Redis** (optional)

---

## 🗄️ Database Setup

In this setup, the database was created **manually** with the name: **blossom**

### Steps to create tables and populate data

From the `backend` directory:

----bash
cd backend

#Run migrations to create tables:

npx sequelize-cli db:migrate

#Run seeders to populate data from the external API:

npx sequelize-cli db:seed:all

#After this, the database will contain all characters and initial favorite states.

# ▶️ Running the Project
cd backend
npm install
npm run dev

# GraphQL endpoint:

http://localhost:4000/graphql

### Frontend
cd frontend
npm install
npm start

### Frontend URL:
http://localhost:3000



### 🔍 Example GraphQL Queries
# Get characters ordered A–Z
---graphql
query {
  characters(order: "AZ") {
    id
    name
    status
    species
    gender
    origin
    image
    is_favorite
  }
}

# Filter characters by name
---graphql
query {
  characters(name: "Rick") {
    id
    name
    species
    is_favorite
  }
}

# Filter by species
---graphql
query {
  characters(species: "Human") {
    id
    name
    species
  }
}

# Get only favorite characters
---graphql
query {
  characters(is_favorite: true) {
    id
    name
    is_favorite
  }
}

## 🔁 Example Mutations 
# Toggle favorite status
---graphql
mutation {
  toggleFavorite(id: 12) {
    id
    name
    is_favorite
  }
}
# Mark a character as favorite
mutation {
  toggleFavorite(id: 1) {
    id
    is_favorite
  }
}

## 📄 Additional Documentation

This repository includes additional documentation with visual references and diagrams to better understand the project.

You can find it in the `/docs` folder, which contains:

- 📊 **ERD Diagram**: Database Entity Relationship Diagram showing the structure of the database.
- 🖼️ **Screenshots**:
  - Frontend (Home page, search, filters, character detail, favorites).
  - Backend GraphQL queries and mutations.
  - Database tables.
- 📘 **Project Documentation**: Step-by-step explanation of the application, API usage, and database structure.


### 📌 Notes

This project demonstrates a complete full-stack GraphQL workflow
Emphasis on clean architecture, separation of concerns, and scalability
Ideal as a technical test or portfolio project
Detailed documentation, screenshots, and ERD diagram are available in the `/docs` folder.

### 👨‍💻 Author
Developed by Alexander Cruz