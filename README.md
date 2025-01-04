
# Nurternet.web.client

Nurternet.web.client is a React-based web application that provides basic react sample app.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **React Router**: A library for routing in React applications.
- **Axios**: A promise-based HTTP client for making API requests.
- **Bootstrap**: A CSS framework for building responsive and mobile-first websites.
- **FontAwesome**: A library for adding icons to your project.
- **Azure AI**: Used for generating embeddings and other AI functionalities.
- **Pinecone**: A vector database for storing and querying embeddings.

## Project Structure

```
Nurternet.web.client/
│
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── api/
│   │   ├── apiService.ts
│   │   └── axiosInstance.ts
│   ├── components/
│   │   ├── auth/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── PrivateRoute.tsx
│   │   └── ...
│   ├── models/
│   │   ├── User.ts
│   │   └── ...
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Contact/
│   │   │   ├── Contact.tsx
│   │   │   └── ContactRedux.tsx
│   │   ├── Organization/
│   │   │   └── organizations.tsx
│   │   ├── Auth/
│   │   │   ├── Callback.tsx
│   │   │   └── ...
│   │   └── ...
│   ├── services/
│   │   ├── authService.ts
│   │   ├── organizationService.ts
│   │   └── ...
│   ├── utils/
│   │   ├── tokenUtils.ts
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **npm or yarn**: Ensure you have npm or yarn installed.

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-repo/nurternet.web.client.git
   cd nurternet.web.client
   ```

2. **Install dependencies**:
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the necessary environment variables. For example:
   ```env
   REACT_APP_API_URL=http://localhost:5158/api
   REACT_APP_AZURE_AI_ENDPOINT=your-azure-ai-endpoint
   REACT_APP_AZURE_AI_API_KEY=your-azure-ai-api-key
   REACT_APP_PINECONE_API_KEY=your-pinecone-api-key
   REACT_APP_PINECONE_ENVIRONMENT=your-pinecone-environment
   ```

4. **Run the application**:
   ```sh
   npm start
   # or
   yarn start
   ```

## Overall Architecture

### Components

The `components` directory contains reusable UI components. These components are used throughout the application to build the user interface. Examples include authentication components (`Login`, `Register`, `PrivateRoute`), and other shared components.

### Pages

The `pages` directory contains the main pages of the application. Each page represents a different route in the application. Examples include `Home`, `About`, `Contact`, `Organization`, and `Auth` pages.

### Models

The `models` directory contains TypeScript interfaces and types that define the shape of the data used in the application. Examples include the `User` model and other domain-specific models.

### Services

The `services` directory contains the business logic and API call abstractions. This layer is responsible for making HTTP requests to the backend API and handling the responses. Examples include `authService` for authentication-related operations and `organizationService` for organization-related operations.

### API

The `api` directory contains the configuration for making HTTP requests using Axios. It includes an Axios instance with interceptors for adding the token to the headers and handling responses. The `apiService` file provides helper functions for making GET and POST requests.

### Utils

The `utils` directory contains utility functions that are used throughout the application. Examples include `tokenUtils` for handling JWT tokens, such as checking token expiry and extracting claims.

## Authentication Strategy

The application uses JWT tokens for authentication. The token is stored in local storage and is included in the headers of each API request. The token is checked for expiry before making any API calls.

### Credentials Authentication Flow

1. **User Login**: The user provides their username and password.
2. **API Call**: The `credentialLogin` function in `authService` sends a POST request to the `/auth/login` endpoint with the username and password.
3. **Token Storage**: If the login is successful, the server returns a JWT token, which is then stored in local storage.
4. **Token Usage**: For subsequent API calls, the token is included in the Authorization header.
5. **Token Expiry Check**: Before making any API call, the token's expiry is checked using the `isTokenExpired` function. If the token is expired, the user is redirected to the login page.

### PrivateRoute Component

The `PrivateRoute` component ensures that only authenticated users can access certain routes. It checks if the token is present and not expired. If the token is invalid, the user is redirected to the login page.

## Service Layer

The service layer is responsible for handling business logic and making API calls. It abstracts the API calls and provides a clean interface for the components to interact with.

### AuthService

The `authService` handles authentication-related operations such as login, registration, and Google login. It also includes a `signOut` function to remove the token from local storage.

### OrganizationService

The `organizationService` handles operations related to organizations such as fetching organization details and lists.

### API Service

The `apiService` handles the actual HTTP requests using Axios. It includes an Axios instance with interceptors for adding the token to the headers and handling responses.

### Axios Instance

The `axiosInstance` is configured with interceptors to include the token in the headers of each request and handle 401 Unauthorized responses by redirecting to the login page.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.





   

