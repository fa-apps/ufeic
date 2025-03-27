# 🚀 Front-end Challenge Test Results

This project is the result for a Front-end interview challenge. It's a basic dashboard built with Vue 3 and the Composition API, implementing several technologies and best practices to create a modern, responsive and maintainable application.

## Technologies and Technical Choices

- **Vue 3 with Composition API:**
  - Using the Composition API for clear and efficient code organization, facilitating component reusability and maintenance.
- **Pinia:**
  - Centralized state management with Pinia, allowing easy data sharing between components.
  - Two Pinia stores have been implemented:
    - A store for managing persistent data via `localStorage`.
    - A store for fetching data from an API, handling loading and error states.
- **TypeScript:**
  - Using TypeScript for better code safety and maintainability, with defined types for data and components.
- **Vite and Vitest:**
  - Vite for fast and efficient development, with an instant development server and optimized builds.
  - Vitest for unit testing, ensuring code quality and stability.
- **Tailwind CSS and Flowbite:**
  - Tailwind CSS for fast and flexible layout and styling, with a utility-first approach.
  - Flowbite for pre-built UI components, speeding up development and ensuring visual consistency.
- **Heroicons:**
  - Using Heroicons for high-quality SVG icons, enhancing the user experience.
- **i18n (Internationalization):**
  - Implementing internationalization with `vue-i18n`, allowing the management of multiple languages.
  - Language choice is stored in `localStorage` for persistence between sessions.
- **Docker Compose:**
  - Containerizing the application and its API dependency with Docker Compose for easy setup and consistent environments.

## Project Structure

- **`src/components`:** Contains reusable Vue components.
- **`src/stores`:** Contains Pinia stores for state management.
- **`src/i18n/locales`:** Contains translation files for internationalization.
- **`src/components/__tests__`:** Contains unit tests with Vitest.
- **`Dockerfile`:** Contains the Docker configuration to containerize the application.
- **`docker-compose.yml`:** Contains the Docker Compose configuration to orchestrate the app and api containers.

## Installation and Execution

1.  Clone the repository.
2.  Install dependencies with `npm install` or `yarn install`.
3.  Start the development server with `npm run dev` or `yarn dev`.
4.  Run unit tests with `npx vitest`.
5.  Build the application for production with `npm run build` or `yarn build`.
6.  Run `docker-compose up --build -d` in the project root directory.
7.  Open `http://localhost:5173` in your web browser.

## Conclusion

I hope this project will help to demonstrate my ability to build a modern web application using the latest technologies and best practices. I focused on maintainability, performance, and user experience to create a robust and scalable application.

## Missing features

- Dark mode
- Spinners for data loading
- Footer
