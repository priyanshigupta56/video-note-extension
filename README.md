# VI Notes Extension

VI Notes Extension is a full-stack web application and browser extension for managing notes efficiently. It features a Next.js frontend, Node.js/Express backend, and a browser extension for seamless note-taking and management.

## Features

- **User Authentication:** Sign up, log in, and manage user profiles.
- **Notes Management:** Create, edit, delete, and organize notes.
- **Admin Dashboard:** Manage users and notes as an admin.
- **Browser Extension:** Quickly save notes from any webpage.
- **Responsive UI:** Modern, mobile-friendly interface using Tailwind CSS.

## Project Structure

```
vi-notes-extension/
├── backend/        # Node.js/Express API server
├── extension/      # Browser extension source code
├── frontend/       # Next.js frontend application
└── README.md       # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Backend Setup
1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend app:
   ```sh
   npm run dev
   ```

### Extension Setup
1. Navigate to the `extension` folder.
2. Load the extension in your browser (e.g., Chrome):
   - Go to `chrome://extensions/`
   - Enable Developer Mode
   - Click "Load unpacked" and select the `extension` folder

## Technologies Used
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB
- **Extension:** JavaScript, HTML, CSS

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)
