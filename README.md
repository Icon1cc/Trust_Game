# Trust Game - Empirica Project

## Project Overview

This repository contains the setup for an Empirica-based experiment titled **Trust Game**. Empirica is a platform designed for running real-time, multiplayer social experiments. This guide will help you set up and run the project in a Windows Subsystem for Linux (WSL) environment.

## Requirements

### 1. Install WSL (Windows Subsystem for Linux)

If you haven't already installed WSL, open your terminal and run the following command:

```bash
wsl --install
```

You will be prompted to create a username and password for WSL. Make sure to write down these credentials for future use.

**Note**: Copying and pasting may be disabled by default in your WSL terminal. To enable it:
- Right-click on the title bar of the terminal window.
- Select `Properties --> Options`.
- Check `Use Ctrl+Shift+C/V as Copy/Paste`.

### 2. Install Empirica

Once WSL is set up, install Empirica using the following command in your WSL terminal:

```bash
curl https://install.empirica.dev | sh
```

You may be prompted to enter your WSL password during the installation process.

## Getting Started

Once Empirica is installed, follow these steps to create and run the **Trust Game** project.

### 1. Create a New Empirica Project

Run the following command in your terminal to create the Empirica project:

```bash
empirica create trust_Game
```

### 2. Navigate to the Project Directory

After the project is created, navigate into the project directory:

```bash
cd trust_Game
```

### 3. Run the Empirica Project

Start the Empirica server by running:

```bash
empirica
```

This will launch the Empirica server locally. You can access the project through your web browser by navigating to `http://localhost:3000`.

## Contact Information

For further information or questions, feel free to contact:

- **Rishabh Tiwari**
  - Email: rishabh.tiwari@stud.uni-heidelberg.de
  - GitHub: [Icon1c](https://github.com/Icon1c)
  - Alternate Email: rishtiwari98@gmail.com
