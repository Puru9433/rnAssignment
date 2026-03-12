# Project Documentation

##  Overview

This project is built using **React Native v0.84.1** and follows a scalable, modular, and flexible architecture.  
The application is designed to support future enhancements and feature expansion with minimal restructuring.

The project uses modern best practices including:
- Functional Components
- Dynamic Navigation Structure
- Reusable Common Components
- Centralized State Management (Redux)

---

## Tech Stack

- **React Native:** 0.84.1
- **React Navigation:** v7
- **Component Pattern:** Functional Components
- **State Management:** Redux

---

npm run android

This command builds and runs the app on an Android emulator or connected device.

---

### Environment Configuration

- Development and Production environment configuration files are already created.
- These environment files are maintained locally.
- They are not pushed to the repository.
- They can be shared or configured as per project requirements.

The project structure supports easy switching between environments when required.

---

## Environment & Running the Project

### Development Mode

Currently, the application runs in development mode using:

npm run android

## Folder Structure
api/
constants/
components/
navigation/
screens/
utils/
services/
redux/


### Folder Description

- **api/** → API request handling
- **constants/** → Static strings, enums, configuration values
- **components/** → Reusable UI components
- **navigation/** → Tab and Stack navigation setup
- **screens/** → All application screens
- **utils/** → Helper and utility functions
- **services/** → Business logic & external integrations
- **store/** → Store configuration, slices, and state logic

---

## Navigation Architecture

The project uses both **Bottom Tabs** and **Stack Navigators** to maintain flexibility and scalability.

### Bottom Tabs

- Home
- Profile

---

### Stack Navigators

- **HomeStack** -> Home, UserDetails
- **ProfileStack** -> This is just created from side, not related to tasl that is show two tabs only

---

## Navigation Flexibility

- Stacks can be expanded with additional screens as needed.
- New stacks can be added without impacting the existing structure.
- Tabs can be extended or modified easily.
- The navigation system is fully dynamic and scalable.
-If more tabs are needed then we can also map with using the custom tab also

---

## Reusable Common Components

To ensure UI consistency and reduce redundancy, the project includes shared components:

### ScreenContainer
- Handles safe area insets
- Provides consistent layout structure
- Prevents UI overlap issues

### CommonButton
- Standard reusable button
- Used across multiple screens
- Easily customizable

### CommonTextInput
- Custom text component
- Used instead of the default `Text`
- Maintains consistent typography styling

---

## Architecture Highlights

- Fully Functional Component based project
- Clean modular folder structure
- Centralized Redux state management
- Dynamic navigation architecture
- Reusable and scalable component design

---

## Scalability

The project is designed to:

- Easily add new screens
- Expand navigation stacks
- Introduce new features with minimal refactoring
- Maintain separation of concerns
- Support long-term scalability

---

## Summary

This project follows a clean, scalable, and maintainable architecture using:

- React Native 0.84.1
- React Navigation v7
- Functional Components
- Redux State Management
- Dynamic Stack & Tab Navigation

The structure is flexible and future-ready for feature expansion.