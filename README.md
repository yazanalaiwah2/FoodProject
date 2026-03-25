# Food Order

A simple project to practice React. It’s a food ordering app where you can browse meals, add them to a cart, and check out with a form.

### How it works:
* **The Menu:** It fetches a list of meals from a backend API.
* **The Cart:** used React Context to handle adding, removing, and counting items.
* **Checking Out:** There is a form to enter your name and address which sends the order to the server.
* **Data:** When you submit an order, it gets saved into the `backend/data/orders.json` file on the server.
* **UI:** Everything like buttons, inputs, and modals are broken into small, reusable components.

### To run it:
1. **Backend:** Go into the backend folder, run `npm install` and then `npm run start` to get the server going.
2. **Frontend:** In the main folder, run `npm install` and then `npm run dev` to start the app.


It handles the basics like calculating the total price, updating quantities, and showing a success message once the order goes through.
