# EasyForm – Online Form Filling Portal

A modern, professional, fully responsive online form portal built with semantic HTML5, modern CSS3, and vanilla JavaScript.

---

## 🌟 Key Features

### 1. Modern, Production-Grade Design
- Clean card-based layout with deep slate, indigo, and emerald color accents.
- Responsive design tailored for mobile phones, tablets, and wide desktop displays.
- Smooth transitions, micro-interactions, floating badges, and clean typography with Google Fonts (`Plus Jakarta Sans` & `Inter`).
- FontAwesome 6 icons integrated throughout the user journey.

### 2. Form Directory (7 Available Forms)
1. **Job Application Form** (Govt & Private employment, resume & degree upload)
2. **Student Registration Form** (School & secondary board enrollment)
3. **College Admission Form** (Undergraduate & postgraduate degree admissions)
4. **Scholarship Form** (Merit-cum-means financial aid application)
5. **Government Scheme Form** (Citizen welfare, subsidy & beneficiary schemes)
6. **Exam Registration Form** (Entrance exams, center selection, hall ticket generation)
7. **General Application Form** (Standard administrative requests, affidavits & certificates)
- Dynamic search and category filtering (Jobs, Admissions, Scholarships, Govt Schemes).

### 3. Multi-Step Form Wizard (5 Comprehensive Steps)
- **Progress Indicator**: Interactive step nodes and dynamic progress bar.
- **Step 1 – Personal Information**:
  - Full Name, Father's Name, Mother's Name, Date of Birth (with age check), Gender, 10-digit Mobile Number, Email Address, 12-digit Aadhaar / ID Number, and Reservation Category.
- **Step 2 – Address Details**:
  - House/Street Address, City, District, State / Union Territory, Country, and 6-digit PIN Code with "Same as permanent address" helper.
- **Step 3 – Educational Details**:
  - Highest Qualification, School/College Name, Board/University, Passing Year (1980–2026), and Percentage/CGPA.
- **Step 4 – Document Upload**:
  - Passport Size Photo (JPG/PNG, up to 2MB)
  - Specimen Signature (JPG/PNG, up to 1MB)
  - ID Proof (PDF/JPG/PNG, up to 3MB)
  - Academic Marksheet (PDF/JPG/PNG, up to 5MB)
  - Other Supporting Documents (Income/Caste/Experience, optional, up to 5MB)
  - Drag-and-drop file dropzones, real-time image thumbnail previews, file size display, status badges, and file removal.
- **Step 5 – Review & Submit**:
  - Structured card breakdown summarizing all entered information.
  - Dedicated "Edit" buttons jumping directly back to any specific step.
  - Mandatory confirmation declaration checkbox.
  - "Save as Draft" functionality.
  - "Submit Form" with animated loading indicator and instant reference generation.

### 4. Robust Client-Side Validation
- Real-time field feedback and step-level validation.
- Regex verification for 10-digit mobile numbers (`/^[6-9]\d{9}$/`).
- RFC-compliant email verification.
- 6-digit postal PIN code verification (`/^\d{6}$/`).
- Age verification (minimum 12 years of age, past date constraint).
- File size and MIME type checks with warning alerts.

### 5. Official Acknowledgement Receipt & Print Mode
- Animated checkmark with unique Reference ID (`EF-2026-XXXXX`).
- One-click copy for reference number.
- High-resolution printable application slip with applicant photo, specimen signature, formatted data grid, and digital verification seal (`@media print` optimized).

### 6. User Dashboard
- Real-time application metrics (Total, Under Review, Approved, Action Required/Rejected).
- Interactive applications table with status badges (`Draft`, `Submitted`, `Under Review`, `Approved`, `Rejected`).
- Full applicant record inspection modal.
- Document supplementary upload tool ("Upload Missing Documents") to update pending files.
- Profile update interface.

### 7. Administrator Portal
- High-level submission analytics cards.
- Multi-parameter search (by applicant name, application ID, phone, or email).
- Filters for status and form categories.
- Live status change dropdown (`Draft` → `Submitted` → `Under Review` → `Approved` → `Rejected`) with instant `localStorage` persistence.
- Safe deletion dialog with confirmation prompt.
- **Export Application Data**: Generates and downloads a real `.csv` file containing complete application records.

### 8. Authentication & Role Switcher
- Login, Sign Up, and Forgot Password modals.
- Demo role switcher in the top status bar:
  - **Applicant**: Rahul Sharma
  - **Admin**: Supriya Roy (Administrator)
  - **Guest**: Browse-only mode
- 1-click quick demo login buttons for easy evaluation.

---

## 📁 Project Structure

```
easyform/
├── index.html            # Main semantic HTML5 single-page application
├── css/
│   └── styles.css        # Responsive CSS3 design system, print styles & animations
├── js/
│   └── app.js            # Form wizard, validation, storage, dashboards & CSV export
└── README.md             # Documentation and user guide
```

---

## 🚀 How to Run the Website

1. Navigate to the project directory:
   ```
   C:\Users\rk275\.gemini\antigravity\scratch\easyform
   ```
2. Double-click or open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari).
3. No build tools, Node.js, or server installation is required. Everything runs natively in the browser with CDN-backed fonts and icons.

> **Workspace Recommendation**: If you are using an IDE or code editor (such as VS Code or Antigravity), set `C:\Users\rk275\.gemini\antigravity\scratch\easyform` as your active workspace folder.
