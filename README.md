
# VTO Recovery Solutions
## Loan Collection Management System

---

# Project Status

## Phase 1 ✅

- [x] Project Setup
- [x] Next.js
- [x] TailwindCSS
- [x] Dashboard Layout
- [x] Login Page
- [x] Sidebar
- [x] Topbar
- [x] Welcome Banner
- [x] Dashboard Cards
- [x] Collections Chart
- [x] Status Chart
- [x] Accounts Table
- [x] Recent Activity
- [x] Shared Types

---

# Current Folder Structure

```
app
components
types
public
```

---

# Components Completed

## Authentication

```
BrandPanel.tsx

LoginForm.tsx
```

---

## Dashboard

```
Sidebar.tsx

Topbar.tsx

WelcomeBanner.tsx

DashboardCards.tsx

Charts.tsx

StatusChart.tsx

AccountsTable.tsx

RecentActivity.tsx
```

---

# Types

```
types/dashboard.ts
```

Contains

- DashboardStats

- CollectionTrend

- StatusSummary

- Account

- Activity

---

# Development Roadmap

## Phase 2 (Current)

### Module 1 ⭐ Accounts

Status

⬜ Not Started

Features

- Accounts List

- Search

- Filters

- Sort

- Pagination

- View Account

- Edit Account

---

### Module 2 ⭐ Account Details

Route

/accounts/[id]

Features

- Overview

- Call History

- Payment Arrangements

- Notes

- Documents

- Timeline

---

### Module 3 ⭐ Call Logging

Features

- Log Call

- Call Outcome

- Notes

- Follow-up Date

- Create Arrangement

- Upload Proof of Payment

---

### Module 4 ⭐ Payment Arrangements

Features

- New Arrangement

- Active Arrangements

- Missed Arrangements

- Completed Arrangements

---

### Module 5 Clients

Features

- Client List

- Search

- View Client

- Edit Client

---

### Module 6 Employees

Owner Only

Features

- Add Employee

- Remove Employee

- Reset Password

- Assign Accounts

- Performance

---

### Module 7 Reports

Features

- Collections

- Performance

- Commission

- Outstanding Balances

- Calls

---

### Module 8 Settings

Features

- Company Details

- User Profile

- Notifications

- Security

---

# Supabase Integration

## Folder Structure

```
lib
```

Will contain

```
supabase.ts

auth.ts

dashboard.ts

accounts.ts

clients.ts

employees.ts

calls.ts

paymentArrangements.ts

reports.ts
```

---

# Authentication Flow

Login

↓

Supabase Auth

↓

User Role

↓

Owner Dashboard

OR

Employee Dashboard

---

# Database Tables

users

employees

clients

accounts

calls

payment_arrangements

notes

documents

activity_logs

notifications

reports

---

# Dashboard Connections

Dashboard Cards

↓

DashboardStats

↓

Supabase

---

Collections Chart

↓

collection_trends

↓

Supabase

---

Status Chart

↓

accounts

↓

Supabase

---

Accounts Table

↓

accounts

↓

Supabase

---

Recent Activity

↓

activity_logs

↓

Supabase

---

# Future Features

## Notifications

## Calendar

## Email Integration

## SMS Integration

## PDF Reports

## Excel Export

## Commission Calculator

## Audit Log

## AI Call Summary

## AI Payment Prediction

---

# Colour Palette

Primary

#1F4D78

Accent

#F97316

Background

#F8FAFC

Cards

White

Border

#E5E7EB

---

# Development Rules

✔ Components must remain reusable.

✔ No Supabase queries inside UI components.

✔ All database access goes through lib/.

✔ Shared interfaces go inside types/.

✔ Business logic stays outside components.

✔ Dashboard should work for Owner and Employee roles.

✔ Every module must be mobile responsive.

✔ Use TypeScript everywhere.

✔ Use TailwindCSS.

✔ Keep components small and reusable.

---

# Current Progress

██████████░░░░░░░░░░░░░░░░░

≈ 35%

Frontend Foundation Complete

Next Step

Accounts Module
