# Doctors-Appointment-Booking-Site

A responsive web application for browsing doctors and booking healthcare appointments, built using **React.js**.

---

## 🚀 Features

 **Doctor Listing** with name, specialization, profile image, and availability status.
 **Search Filter** to find doctors by name or specialization.
 **Doctor Profile Page** showing detailed info and availability.
 **Appointment Booking Form** to schedule an appointment.
 **Responsive Design** to ensure usability on mobile, tablet, and desktop.
 **Mock Backend** using static JSON to simulate API responses.

## 🛠️ Tools 

| Technology       |               |
|------------------|
| React.js         | 
| JavaScript       | 
| React Router DOM | 
| CSS              |
| JSON             |  
Note: TypeScript and Tailwind CSS were not used in this project as per personal preference.



Each component and page is organized into its own folder with:
- `index.js` — React logic
- `index.css` — Component-specific styles

---

## 📅 How It Works

1. **Landing Page**
   - Displays a list of doctors with search functionality.
2. **Doctor Profile Page**
   - View detailed profile and availability.
3. **Appointment Form**
   - Collects patient details (name, email, date/time).
   - Displays a confirmation message on submit.

---

## ✅ Completed Requirements

- [x] Doctor listing with availability
- [x] Search by name/specialization
- [x] Clickable profile page for each doctor
- [x] Booking form with confirmation
- [x] Responsive design (mobile-first)

---

## 🔧 Improvements With More Time

If given more time, I would enhance the app with the following:

- Convert to **TypeScript** for improved type safety.
- Use **Tailwind CSS** or **Material UI** for faster, scalable styling.
- Add **form validation** using libraries like `Yup` or `react-hook-form`.
- Integrate a **Node.js/Express backend** to persist appointments.
- Display **appointment success email/message** confirmation with unique IDs.
- Add **loading states** and **error handling** for smoother UX.

---

## 🧠 Challenges Faced & Solutions

### 1. **Routing Between Pages**
**Challenge:** Maintaining clean and seamless navigation between landing, profile, and booking pages.  
**Solution:** Used `react-router-dom` to create clear route structures and manage navigation programmatically with hooks like `useNavigate`.

### 2. **Doctor Availability Display**
**Challenge:** Designing a clean UI for showing multiple availability states.  
**Solution:** Used conditional CSS classes and color-coded badges to clearly indicate "Available Today", "Fully Booked", or "On Leave".

### 3. **Form Handling Without a Backend**
**Challenge:** Handling user inputs and confirmations without real API endpoints.  
**Solution:** Used local state and basic validation, and mocked the confirmation process using JSON data and `useState`.

---
📦 Installation & Running Locally

```bash
# Clone the repo
git clone https://github.com/your-username/healthcare-appointment-app.git
cd healthcare-appointment-app

# Install dependencies
npm install

# Run the development server
npm start

Visit http://localhost:3000 to view the app.


