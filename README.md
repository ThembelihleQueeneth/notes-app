# Notes App 

A sleek, modern Notes application built with **React Native** and **Expo**. This app allows users to manage their daily thoughts, categorized by Work, Personal, or Study themes, all wrapped in a premium deep purple interface.

##  Features

-   **Secure Login**: A clean, modern authentication entry point.
-   **Notes Management**: Create, view, and delete notes effortlessly.
-   **Categorization**: Organize your notes into Study, Work, or Personal categories.
-   **Modern Design**: 
    -   Deep Purple theme palette.
    -   Responsive layout with SafeArea support.
    -   Interactive Floating Action Button (FAB).
-   **State Management**: Built using React Context for global Auth and Notes state.

##  Tech Stack

-   **Framework**: [Expo](https://expo.dev/) (SDK 54)
-   **UI**: React Native / Expo Router (File-based routing)
-   **Icons**: Expo Vector Icons (Feather)
-   **Language**: TypeScript

##  Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ThembelihleQueeneth/notes-app.git
cd notes-app
```

### 2. Install dependencies
Ensure you have Node.js installed, then run:
```bash
npm install
```

### 3. Run the application
Start the development server:
```bash
npm start
```

### 4. Opening on a device
-   **iOS/Android**: Download the **Expo Go** app and scan the QR code from your terminal.
-   **Web**: Press `w` in the terminal to open in the browser.

## 5. Project Structure

-   `app/`: Routing logic and layouts (Expo Router).
-   `src/`: Primary source code.
    -   `context/`: Auth and Notes data providers.
    -   `screens/`: Individual app screens (Login, List, Add Note).
    -   `styles/`: Global theme constants and style definitions.
    -   `types/`: TypeScript interface definitions.

## 6. Screan Shots
![HomePage](https://github.com/user-attachments/assets/75e7908c-57aa-4f04-9f96-9e06f0d4066e)
![loginPage](https://github.com/user-attachments/assets/2f70545f-fb36-4656-bc18-f0d89d71004c)
![NotesPage](https://github.com/user-attachments/assets/52ce75cd-c6ae-46a0-98a0-afe25c520728)
