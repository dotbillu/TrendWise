## 🛡️ Configs & Secrets Moved to `.env`

This update moves all sensitive data, API keys, and environment-specific configurations to `.env` files to improve security and make the application deployment-ready.

### ✨ Key Changes:

- **Secrets Removed from Code:** All hardcoded API keys (OpenAI/Gemini/RapidAPI), MongoDB connection strings, and static URLs have been replaced with `process.env` variables.
- **Centralized Configuration:** Environment-specific settings are now managed in `.env` files, making it easy to switch between local, development, and production setups.
- **Enhanced Security:** `.env.*` files are listed in `.gitignore` to prevent accidental exposure of sensitive credentials.
- **Deployment Ready:** The application is now fully prepared for deployment on platforms like Vercel, Railway, or any other modern hosting service.

### 🚀 How to Use:

1.  **Create a `.env.local` file** in the `frontend` directory and a `.env` file in the `backend` directory.
2.  **Populate the files** with the necessary environment variables, following the examples in `.env.example` (if available).
3.  **Run the application** as usual. The code will automatically load the variables from the corresponding `.env` file.

This refactor ensures a cleaner, more secure, and scalable codebase. ✨
 

 i will updaaate it soon