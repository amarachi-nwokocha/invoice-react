Invoice Management Dashboard

A modern, responsive Invoice Management Dashboard built with Next.js, React, TailwindCSS, and Firebase.
This application allows users to create, view, track, and manage invoices, with real-time status updates and a clean, intuitive UI.

Features
🧾 Invoice Management

View recent invoices (shows 5 by default).

“View All” button displays the full invoice list.

Dynamic status badges — Paid, Pending, Overdue.

🔍 Invoice Details Modal

Clicking an invoice opens a full details popup.

Shows sender + customer info, items, and totals.

Background and UI colors update based on payment status.

Modal built as a separate, reusable component.

 Firebase Integration

Real-time Firestore updates for invoice status.

Smooth UI sync without lifting state manually.

Firebase Auth enabled with protected routes.

 Fully Responsive

Designed with Tailwind CSS for a clean, adaptive layout.

Works flawlessly on desktop, tablet, and mobile.

PDF & Actions

Download Invoice as PDF (UI ready).

More options menu.

| Category     | Tools                                                 |
| ------------ | ----------------------------------------------------- |
| Frontend     | **React**, **TailwindCSS**                            |
| Backend / DB | **Firebase (Auth + Firestore)**                       |
| Deployment   | **Vercel**                                            |
| Language     | **JavaScript                                          |
Getting Started
1. Clone the Repository
git clone
cd invoice-dashboard

2. Install Dependencies
npm install

Add Environment Variables

Start Development Server
npm run dev

Core Functionalities
Real-Time Status Updates

Changing invoice status updates:

The modal UI

The invoice list

The parent card’s background

…without manually lifting state — all handled by Firestore listeners.

Responsive Invoice Dashboard
Designed to match modern SaaS billing tools with:

Proper spacing

Consistent typography

Clean card layouts

Adaptive grid system

