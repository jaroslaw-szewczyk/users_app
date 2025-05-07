# UsersApp 🧑‍💻

UsersApp is a simple console application created as part of the Kodilla bootcamp. It was designed to help learn the basics of TypeScript in a Node.js environment. The app allows users to manage a list of people via a terminal-based menu.

## ✨ Features

- `list` – show all users  
- `add` – add a new user  
- `edit` – edit an existing user  
- `remove` – remove a user from the list  
- `quit` – exit the app  

## 📦 Technologies

- **TypeScript** – type safety and code structure  
- **Node.js** – runtime environment  
- **Inquirer.js** – interactive CLI menu  
- **Consola** – colored and formatted logging  
- Performance measurement using decorators (`measurePerformance`)  

## 📁 Project Structure

- `index.ts` – main logic and menu handling  
- `UsersData.ts` – user data management (add, edit, remove)  
- `Message.ts` – formatted message display  
- `measurePerformance.ts` – method execution time measurement  

## ✅ Example Output

```
Welcome to the UsersApp!
====================================
list – show all users
add – add new user to the list
edit – edit user
remove – remove user from the list
quit – quit the app

How can I help you? add
Enter name: Anna
Enter age: 28
✔ User has been successfully added!
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/users-app.git
   cd users-app
   ```

2. Install dependencies:
   ```bash
   yarn
   ```

3. Run the app (e.g. using `ts-node`):
   ```bash
   yarn ts-node index.ts
   ```

> If you don't have `ts-node` installed globally, you can install it with:
> ```bash
> yarn global add ts-node typescript
> ```

## 📚 Learning Goals

This project was created to:
- Practice TypeScript basics
- Work with command-line input/output
- Learn about classes, decorators, and state management
- Handle data validation and error messages

---

✅ Project completed as part of the Kodilla bootcamp  
🎓 Author: [Your Name]  
📅 Year: 2025
