# AI CreatorHup

### **1. Introduce**
This project is a web application built using ReactJS in front-end.

##### Key features
- ***Homepage***: This is the first page that appears when users access the website. Here information is displayed such as header, banner, product list, footer,...
- ***Register***: Register an account to become a member of the system. See details at [`src/pages/register`](src/pages/register).
- ***Login***: Supports login through various platforms. See details at [`src/pages/SignIn`](src/pages/SignIn).
- ***Login with Google and Facebook***: The application supports login through Google and Facebook. Users can choose to login with their Google or Facebook account. See details at [`src/pages/SignIn`](src/pages/SignIn).
- ***Register with Google and Facebook***: Users can also register a new account using their Google or Facebook account. This provides a quick and easy registration process for new users. See details at [`src/pages/register`](src/pages/register).
- ***Pricing***: This page displays the different pricing plans available for the users. Users can select a plan and proceed to payment. The pricing details are fetched from the server and displayed in a user-friendly format. See details at [`src/pages/Pricing`](src/pages/Pricing).
- ***ChangePassword***: This page allows users to change their password. It requires users to input their current password and the new password. The new password is then updated in the system. See details at [`src/pages/ChangePassword`](src/pages/ChangePassword).
- ***AI Art Generator***: The input is a normal photo, and the output is an AI-generated photo. See details at [`src/pages/AiArtGenerator`](src/pages/AiArtGenerator).
- ***AI Photo Enhancer***: Enhances image quality through AI. See details at [`src/pages/AiPhotoEnhancer`](src/pages/AiPhotoEnhancer).
- ***AI Background Remover***: Removes the background of images through AI. See details at [`src/pages/AiBackgroundRemove`](src/pages/AiBackgroundRemove).
- ***AI Image Results***: This feature displays the results of the AI image processing. Each result includes an image and its associated details, such as creation time and configuration parameters. The results are fetched from the server and displayed in a user-friendly format. See details at [`src/pages/AiImageResults`](src/pages/AiImageResults).
- ***Multilingual Support***: Supports many languages, including Vietnamese, English, Korean, and Japanese. See details at [`src/i18n`](src/i18n).
- ***Dark Mode, Light Mode, and System Mode***: The application supports different color schemes for better user experience. Users can switch between Dark Mode, Light Mode, and System Mode. The mode can be changed from the header of the application. The Dark Mode provides a dark color scheme that's easier on the eyes in low-light environments. The Light Mode provides a light color scheme that's suitable for well-lit environments. The System Mode automatically matches the system's current color scheme. See details at [`src/utils/useThemeModeStyles.ts`](src/utils/useThemeModeStyles.ts) and [`src/components/Header/components/ModeToggle/index.tsx`](src/components/Header/components/ModeToggle/index.tsx).
- ***Responsive Design***: Responsive design, compatible with various screen sizes.

### **2. Main Technology Used**
+ **ReactJS**: ReactJS is a JavaScript library for building user interfaces, known for its component-based structure, reusability, and efficient rendering, simplifying the development of interactive web applications. 
+ **TypeScript**: TypeScript is a statically typed superset of JavaScript that offers enhanced code quality, better tooling, and improved maintainability.
+ **React Router Dom**: React Router Dom is a library that helps manage routing in React applications, providing flexible navigation between components and pages, enhancing the user experience.
+ **Redux Toolkit**: Redux Toolkit is a toolset that efficiently manages state and performs Redux operations in React applications, providing flexibility and reducing complexity in state management. 
+ **Axios**: Axios is a JavaScript HTTP client library that facilitates easy and flexible handling of HTTP requests in applications, enhancing communication with APIs.
+ **Styled Component**: Styled Components is a CSS-in-JS library that enables component-based styling in React applications, enhancing code maintainability and allowing dynamic styling based on props.
+ **i18next**: i18next is an internationalization-framework written in and for JavaScript. It provides you with a complete solution to localize your product from web to mobile and desktop.
+ **Material-UI**: Material-UI is a popular React UI framework that implements Google's Material Design. It provides a set of pre-designed components that help in building attractive and consistent user interfaces quickly.
+ **react-hook-form**: react-hook-form is a library that helps in managing form state and validation in React applications. It is performant and flexible, making form handling in React much easier.

### **3. Instructions For Installing And Running The Project Locally**
> **Prerequisites**: Before you begin, make sure you have the following technologies installed on your personal computer: git, node.js. npm
-  Download the project to your personal computer:
```bash
git clone https://github.com/NguyenVanThu01122/AiArtGenerator.git
```
- Open the downloaded project using ide software, type the following command to install the necessary packages:
```bash
npm install
```
- Run the project locally using the command below. After, you can access http://localhost:3000 to view the system.
```bash
npm start
```
### **4. Online Link To Use**
In addition to using the system locally as in part 3, you can access the following link to use the system: 
https://ai-art-generator-lyart.vercel.app/

### **5. Troubleshooting**
- If you are having trouble loading the page, please make sure you have the best network connection.
- If you run local the project with problems, please make sure your computer has the latest node.js installed. You also need to make sure you have the .env file set up with the correct values.