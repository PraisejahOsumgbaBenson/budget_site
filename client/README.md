# BudgetBuddy 🛒

BudgetBuddy is a digital budgeting tool built with React, MySQL, and Docker. It helps users manage their expenses by adding, editing, and deleting items on a market list, setting a budget, and tracking the remaining balance. This project uses Docker to set up a MySQL database, Drizzle ORM for database operations, and has a separate frontend and backend.

## Features
- **Item Management:** Add, edit, and delete items with fields for name, description, quantity, unit price, and total cost.
- **Budget Tracking:** Track total expenses against a customizable budget and view the remaining balance.
- **Currency Selection:** Switch between NGN, USD, and EUR, with automatic symbol updates.
- **Persistent Settings:** Saves selected currency locally, allowing users to resume their budget tracking seamlessly.
- **Notifications:** Displays messages for successful actions (like adding or deleting items) or errors.

## Project Structure
- **Frontend:** Built with React for a user-friendly interface.
- **Backend:** An Express server with Drizzle ORM to handle database interactions.
- **Database:** MySQL, set up and managed via Docker.

## Getting Started

### Prerequisites
Ensure the following are installed on your machine:
- **Node.js:** [Download Node.js](https://nodejs.org/)
- **Docker:** [Download Docker](https://www.docker.com/)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/BudgetBuddy.git
   cd BudgetBuddy
2. **Set Up the MySQL Database with Docker**
    ```bash
    docker-compose up -d
**This command will start a MySQL container as specified in the docker-compose.yml file.**

3. **Install Dependencies Navigate to the project root and install the dependencies:**
    ```bash
    npm install
4. **Run the Backend Server Change directory to the backend folder and start the server:**
   ```bash
   cd backend
   npm start
5. **Run the Frontend Client In a separate terminal tab, navigate to the client folder and start the client:**
   ```bash
   cd client
   npm start
6. **Access the Application Open your browser and go to http://localhost:3000 to start using BudgetBuddy!**

## Contributing

Contributions are welcome! Here’s how to get involved:

1. **Fork the Repository**

2. **Create a New Branch** for your feature or bug fix:
   ```bash
   git checkout -b feature-name
3. **Commit Your Changes with a clear message:**
   ```bash
   git commit -m "feat: add feature description"
4. **Push to Your Forked Repository:**
   ```bash
   git push origin feature-name
5. **Open a Pull Request with a detailed description of your changes.**