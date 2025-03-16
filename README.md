# **Frontend Developer Technical Challenge (React.js)**

## **Description**

This is a simple web application that allows users to **register**, **log in**, and **view a list of images** with detailed information. The app is built with **React.js**, **React Router**, **React Query**, and **TailwindCSS**.

## **Features**

- **Login and Registration** pages with form validation and mocked API responses using **MSW**.
- **Home Page** to fetch and display a list of images from the [Pixabay API](https://pixabay.com/api/docs/) with caching and infinite scrolling.
- **Image Detail Page** showing detailed information about the selected image.
- **Dark Mode** functionality.
- **Skeleton loaders** while fetching data.

## **Technologies Used**

- **React.js** (Latest Version)
- **React Router** for navigation
- **TypeScript**
- **React Query** for API fetching and caching
- **TailwindCSS** for styling
- **MSW** for mocking API responses
- **Jest & React Testing Library** for unit and integration testing
- **Context API** for state management

## **App Structure**

- **Login Page**: Allows users to log in using email and password. Validation rules are enforced.
- **Registration Page**: Allows users to register with email, password, and age.
- **Home Page**: Displays a list of images with details (username of the uploader, image thumbnail). Implements infinite scrolling and React Query caching.
- **Image Detail Page**: Displays detailed information about a selected image, including its size, type, uploader details, and engagement metrics.

## **Getting Started**

### 1. **Clone the Repository**

```bash
git clone https://github.com/beqaratiani/image-app-challenge.git
cd image-app-challenge
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Run the Development Server**

```bash
npm run dev
```

This will start the application on `http://localhost:5173/`.

## **Features & Functionality**

### **Login Page**

- Users can log in using email and password.
- Validation:
  - Email must be valid.
  - Password must be between 6-12 characters.
- On successful login, users are redirected to the **Home Page**.
- **Mock User Accounts**:
  The following users are available for login (mocked API does not connect to a database):

  - **Email**: `test@gmail.com`, **Password**: `password123`
  - **Email**: `user1@gmail.com`, **Password**: `securePass1`
  - **Email**: `user2@gmail.com`, **Password**: `myStrongPass`

These accounts can be used for login testing, as the mock API does not have a database backend.

### **Registration Page**

- Users can register by providing email, password, and age.
- Validation:
  - Email must be valid.
  - Password must be between 6-12 characters.
  - Age must be between 18-99 years old.
- On successful registration, users are redirected to the **Home Page**.

### **Home Page**

- Displays a list of images fetched from the **Pixabay API**.
- Each image shows:
  - Thumbnail image.
  - The name of the uploader.
- Infinite scrolling implemented using **Intersection Observer** and **React Query**.

### **Image Detail Page**

- Displays detailed information about a specific image:
  - Full-size image.
  - Image size, type, and tags.
  - Upload details like the uploader’s name and engagement metrics (views, likes, comments, favorites, downloads).

## **Bonus Features**

- **Dark Mode**: Toggle between dark and light themes using TailwindCSS.
- **Skeleton Loaders**: Display skeleton loaders while the data is being fetched.

## **Testing**

- Tests are written using **Jest**.
- Currently only SingleImage page is tested.
- To run the tests, use:

```bash
npm run test
```

## **Folder Structure**

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable components
├── context/         # React context for global state management
├── helpers/         # Helper functions
├── hooks/           # Custom hooks
├── mocks/           # Mock API responses
├── pages/           # Page components (Login, Registration, Home, Image Detail)
├── services/        # API call functions
└── types/           # Defining different types
```
