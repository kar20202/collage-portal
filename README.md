# College Portal

A teacher-student college portal with Firebase authentication, shared classes, notes, QR attendance, and subject-wise attendance tracking.

## Features

- Student and teacher registration/login
- Teacher profiles and dashboard
- Class creation with subject and timetable
- Five subjects: Math, Physics, Chemistry, FEEE, and Engineering Graphics
- Notes upload for files and images
- Student notes viewer with teacher and subject details
- Five-minute rotating class QR codes
- Camera-based student QR scanning
- QR attendance with duplicate-scan protection
- Subject-wise attendance percentage
- Firebase Realtime Database and Storage support

## Firebase Setup

1. Create a Firebase Web App.
2. Enable Email/Password Authentication.
3. Enable Realtime Database.
4. Enable Storage for notes and images.
5. Keep the Firebase configuration in `firebase-config.js`.

For development, use Firebase test rules only temporarily. Add secure Firebase rules before production use.

## Run Locally

The QR camera requires HTTPS or localhost. Opening the files directly with `file://` may block camera and Firebase modules.

Use a local web server or deploy to GitHub Pages.

## GitHub Pages Deployment

1. Upload all project files to a GitHub repository.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose the `main` branch and `/root` folder.
5. Add the GitHub Pages domain in Firebase **Authentication → Settings → Authorized domains**.

The website will be available at:

```text
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY/
```

## Important

Firebase data is shared across phones only when everyone uses the deployed HTTPS website and Firebase services are enabled. Existing browser-only accounts and data are not automatically migrated to Firebase.
