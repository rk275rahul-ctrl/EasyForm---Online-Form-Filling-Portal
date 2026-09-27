/**
 * EasyForm – Online Form Filling Portal
 * Main Application Script (Vanilla JS)
 */

// ==========================================
// Default Seed Data & Initial State
// ==========================================
const FORM_CATEGORIES = [
  {
    id: "job",
    title: "Job Application Form",
    category: "Employment",
    icon: "fa-briefcase",
    color: "#2563eb",
    bg: "#eff6ff",
    description: "Apply for public, state, and corporate job openings with verified credential submission.",
    time: "10-15 mins",
    docs: "Photo, Resume, ID, Degree"
  },
  {
    id: "student",
    title: "Student Registration Form",
    category: "Academic",
    icon: "fa-graduation-cap",
    color: "#10b981",
    bg: "#ecfdf5",
    description: "Official registration portal for primary, secondary, and higher secondary school boards.",
    time: "8-10 mins",
    docs: "Birth Cert, ID, Prior Marksheet"
  },
  {
    id: "college",
    title: "College Admission Form",
    category: "Higher Education",
    icon: "fa-university",
    color: "#8b5cf6",
    bg: "#f5f3ff",
    description: "Centralized admission portal for undergraduate and postgraduate university degrees.",
    time: "12-15 mins",
    docs: "10th/12th Marksheets, Migration, ID"
  },
  {
    id: "scholarship",
    title: "Scholarship Form",
    category: "Financial Aid",
    icon: "fa-hand-holding-dollar",
    color: "#f59e0b",
    bg: "#fffbeb",
    description: "Merit-based and need-based financial grant applications for eligible students.",
    time: "15 mins",
    docs: "Income Cert, Caste Cert, Bank Passbook"
  },
  {
    id: "govt",
    title: "Government Scheme Form",
    category: "Citizen Welfare",
    icon: "fa-landmark",
    color: "#0ea5e9",
    bg: "#f0f9ff",
    description: "Enroll in national and state citizen benefit schemes, subsidies, and assistance programs.",
    time: "10 mins",
    docs: "Aadhaar Card, Residence Proof, Ration Card"
  },
  {
    id: "exam",
    title: "Exam Registration Form",
    category: "Certifications",
    icon: "fa-file-signature",
    color: "#ec4899",
    bg: "#fdf2f8",
    description: "Online entrance examination and competitive test registration with center selection.",
    time: "8-12 mins",
    docs: "Photo, Signature, Category Proof"
  },
  {
    id: "general",
    title: "General Application Form",
    category: "Miscellaneous",
    icon: "fa-folder-open",
    color: "#64748b",
    bg: "#f1f5f9",
    description: "Standard multi-purpose administrative request, NOC, affidavit, and certificate requests.",
    time: "5-8 mins",
    docs: "Photo, ID Proof, Address Proof"
  }
];

const INITIAL_APPLICATIONS = [
  {
    id: "EF-2026-89104",
    formType: "Job Application Form",
    formId: "job",
    fullName: "Rahul Sharma",
    fatherName: "Mahesh Sharma",
    motherName: "Sunita Sharma",
    dob: "1998-05-14",
    gender: "Male",
    mobile: "9876543210",
    email: "rahul.sharma@example.com",
    idNumber: "542389104321",
    category: "General",
    address: "Flat 402, Sunshine Heights, MG Road",
    city: "Bengaluru",
    district: "Bengaluru Urban",
    state: "Karnataka",
    country: "India",
    pincode: "560001",
    qualification: "Bachelor's Degree",
    institution: "National Institute of Technology",
    university: "Visvesvaraya Technological Univ",
    passingYear: "2020",
    percentage: "84.5",
    submissionDate: "2026-09-24T10:30:00",
    status: "Approved",
    remarks: "All credentials verified successfully.",
    documents: {
      photo: { name: "rahul_photo.jpg", size: "180 KB" },
      signature: { name: "rahul_sign.png", size: "95 KB" },
      idProof: { name: "aadhaar_card.pdf", size: "1.2 MB" },
      marksheet: { name: "btech_degree.pdf", size: "2.4 MB" }
    }
  },
  {
    id: "EF-2026-89105",
    formType: "Scholarship Form",
    formId: "scholarship",
    fullName: "Priya Patel",
    fatherName: "Kishore Patel",
    motherName: "Anandi Patel",
    dob: "2003-08-21",
    gender: "Female",
    mobile: "9812345678",
    email: "priya.patel@student.edu",
    idNumber: "897654123098",
    category: "OBC",
    address: "12, Shanti Nagar, Ring Road",
    city: "Ahmedabad",
    district: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    pincode: "380015",
    qualification: "Higher Secondary (12th)",
    institution: "St. Xavier's High School",
    university: "Gujarat Board (GSEB)",
    passingYear: "2022",
    percentage: "91.2",
    submissionDate: "2026-09-25T14:15:00",
    status: "Under Review",
    remarks: "Income certificate verification in progress.",
    documents: {
      photo: { name: "priya_passport.jpg", size: "210 KB" },
      signature: { name: "priya_sig.jpg", size: "80 KB" },
      idProof: { name: "id_proof.pdf", size: "850 KB" },
      marksheet: { name: "12th_marksheet.pdf", size: "1.5 MB" }
    }
  },
  {
    id: "EF-2026-89106",
    formType: "College Admission Form",
    formId: "college",
    fullName: "Aman Verma",
    fatherName: "Rajesh Verma",
    motherName: "Kiran Verma",
    dob: "2004-11-03",
    gender: "Male",
    mobile: "9988776655",
    email: "aman.v@example.com",
    idNumber: "345678901234",
    category: "General",
    address: "B-14, Civil Lines",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    country: "India",
    pincode: "302006",
    qualification: "Higher Secondary (12th)",
    institution: "Delhi Public School",
    university: "CBSE",
    passingYear: "2023",
    percentage: "88.6",
    submissionDate: "2026-09-26T16:45:00",
    status: "Submitted",
    remarks: "Application received and queued for review.",
    documents: {
      photo: { name: "aman_pic.jpg", size: "195 KB" },
      signature: { name: "aman_sig.png", size: "110 KB" },
      idProof: { name: "passport_scan.pdf", size: "1.8 MB" },
      marksheet: { name: "cbse_grade12.pdf", size: "2.1 MB" }
    }
  },
  {
    id: "EF-2026-89107",
    formType: "Government Scheme Form",
    formId: "govt",
    fullName: "Sunita Devi",
    fatherName: "Ram Prasad",
    motherName: "Sita Devi",
    dob: "1985-03-12",
    gender: "Female",
    mobile: "9765432109",
    email: "sunita.devi@citizen.gov",
    idNumber: "123456789012",
    category: "SC",
    address: "Village Rampur, Post Office Kalan",
    city: "Varanasi",
    district: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
    pincode: "221001",
    qualification: "Secondary (10th)",
    institution: "Govt Inter College",
    university: "UP Board",
    passingYear: "2001",
    percentage: "65.4",
    submissionDate: "2026-09-27T09:10:00",
    status: "Under Review",
    remarks: "Pending district officer verification.",
    documents: {
      photo: { name: "sunita_photo.jpg", size: "140 KB" },
      signature: { name: "sunita_thumb.jpg", size: "90 KB" },
      idProof: { name: "aadhaar_sunita.pdf", size: "920 KB" }
    }
  }
];

// App State
const state = {
  currentUser: {
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    role: "applicant" // 'applicant' | 'admin' | 'guest'
  },
  currentView: "home-view",
  currentFormCategory: FORM_CATEGORIES[0],
  currentStep: 1,
  totalSteps: 5,
  formData: {
    // Step 1
    fullName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    mobile: "",
    email: "",
    idNumber: "",
    category: "",
    // Step 2
    address: "",
    city: "",
    district: "",
    state: "",
    country: "India",
    pincode: "",
    // Step 3
    qualification: "",
    institution: "",
    university: "",
    passingYear: "",
    percentage: "",
    // Step 4
    documents: {}
  },
  lastSubmittedApp: null
};

// ==========================================
// Initialization & LocalStorage Storage
// ==========================================
function initApp() {
  if (!localStorage.getItem("easyform_applications")) {
    localStorage.setItem("easyform_applications", JSON.stringify(INITIAL_APPLICATIONS));
  }

  // Bind Listeners
  bindNavigationEvents();
  bindFormWizardEvents();
  bindDocumentUploadEvents();
  bindAuthEvents();
  bindDashboardEvents();
  bindAdminEvents();
  bindFaqEvents();

  // Render Available Form Cards
  renderAvailableForms(FORM_CATEGORIES);

  // Sync initial user badge
  updateUserUI();

  // Check Hash Routing
  handleHashRouting();
  window.addEventListener("hashchange", handleHashRouting);

  // Set today's date restriction on DOB
  const dobInput = document.getElementById("dob");
  if (dobInput) {
    const today = new Date().toISOString().split("T")[0];
    dobInput.setAttribute("max", today);
  }
}

// Get Applications from Storage
function getApplications() {
  const data = localStorage.getItem("easyform_applications");
  return data ? JSON.parse(data) : [];
}

// Save Applications to Storage
function saveApplications(apps) {
  localStorage.setItem("easyform_applications", JSON.stringify(apps));
}

// ==========================================
// View Routing & Page Switching
// ==========================================
function switchView(viewId, triggerPush = true) {
  const views = document.querySelectorAll(".page-view");
  views.forEach(v => v.classList.remove("active-view"));

  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.add("active-view");
    state.currentView = viewId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Update active navbar link
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
    if (link.dataset.targetView === viewId) {
      link.classList.add("active");
    }
  });

  // Close mobile navigation drawer if open
  const navMenu = document.getElementById("navMenu");
  if (navMenu) navMenu.classList.remove("open");

  // On-demand rendering for dashboards
  if (viewId === "user-dashboard-view") {
    renderUserDashboard();
  } else if (viewId === "admin-dashboard-view") {
    renderAdminDashboard();
  }

  if (triggerPush) {
    const hashMap = {
      "home-view": "home",
      "form-view": "form-filler",
      "success-view": "success",
      "user-dashboard-view": "dashboard",
      "admin-dashboard-view": "admin"
    };
    if (hashMap[viewId]) {
      window.location.hash = hashMap[viewId];
    }
  }
}

function handleHashRouting() {
  const hash = window.location.hash.replace("#", "") || "home";
  const viewMap = {
    home: "home-view",
    forms: "home-view",
    "form-filler": "form-view",
    success: "success-view",
    dashboard: "user-dashboard-view",
    admin: "admin-dashboard-view"
  };

  const target = viewMap[hash] || "home-view";
  switchView(target, false);

  if (hash === "forms") {
    setTimeout(() => {
      const el = document.getElementById("available-forms-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }
}

// ==========================================
// Available Forms Section Rendering & Filter
// ==========================================
function renderAvailableForms(forms) {
  const grid = document.getElementById("formsGrid");
  if (!grid) return;

  grid.innerHTML = "";
  if (forms.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <i class="fa-solid fa-file-circle-question"></i>
        <h4>No matching forms found</h4>
        <p>Try searching with another keyword or select "All Forms".</p>
      </div>
    `;
    return;
  }

  forms.forEach(form => {
    const card = document.createElement("div");
    card.className = "form-category-card";
    card.innerHTML = `
      <div class="card-top">
        <div class="card-icon-tag">
          <div class="form-card-icon" style="background-color: ${form.bg}; color: ${form.color};">
            <i class="fa-solid ${form.icon}"></i>
          </div>
          <span class="form-tag">${form.category}</span>
        </div>
        <h3 class="form-card-title">${form.title}</h3>
        <p class="form-card-desc">${form.description}</p>
        <ul class="form-meta-list">
          <li><i class="fa-regular fa-clock"></i> Est. Completion: <strong>${form.time}</strong></li>
          <li><i class="fa-solid fa-paperclip"></i> Required: <strong>${form.docs}</strong></li>
        </ul>
      </div>
      <div class="card-action">
        <button class="btn btn-primary" onclick="startFillingForm('${form.id}')">
          <i class="fa-solid fa-pen-to-square"></i> Fill Form
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Start filling specific form
window.startFillingForm = function(formId) {
  const found = FORM_CATEGORIES.find(f => f.id === formId) || FORM_CATEGORIES[0];
  state.currentFormCategory = found;

  const activeTag = document.getElementById("activeFormTag");
  const formTitle = document.getElementById("activeFormTitle");
  if (activeTag) activeTag.textContent = found.category;
  if (formTitle) formTitle.textContent = found.title;

  // Reset to Step 1
  goToStep(1);
  switchView("form-view");
  showToast(`Started "${found.title}". Please enter your details.`, "info");
};

// ==========================================
// Multi-Step Form Wizard Navigation
// ==========================================
function goToStep(stepNumber) {
  if (stepNumber < 1 || stepNumber > state.totalSteps) return;

  state.currentStep = stepNumber;

  // Toggle Step Panes
  document.querySelectorAll(".wizard-step-pane").forEach(pane => {
    pane.classList.remove("active-pane");
  });
  const targetPane = document.getElementById(`step-pane-${stepNumber}`);
  if (targetPane) targetPane.classList.add("active-pane");

  // Update Progress Indicator
  const progressPercent = ((stepNumber - 1) / (state.totalSteps - 1)) * 100;
  const fillBar = document.getElementById("wizardProgressFill");
  if (fillBar) fillBar.style.width = `${progressPercent}%`;

  document.querySelectorAll(".wizard-step-node").forEach((node, idx) => {
    const nodeStep = idx + 1;
    node.classList.remove("active", "completed");
    if (nodeStep === stepNumber) {
      node.classList.add("active");
    } else if (nodeStep < stepNumber) {
      node.classList.add("completed");
    }
  });

  // Manage Nav Button states
  const prevBtn = document.getElementById("prevStepBtn");
  const nextBtn = document.getElementById("nextStepBtn");
  const submitBtn = document.getElementById("submitFormBtn");

  if (prevBtn) {
    prevBtn.style.visibility = stepNumber === 1 ? "hidden" : "visible";
  }

  if (stepNumber === state.totalSteps) {
    if (nextBtn) nextBtn.classList.add("hidden");
    if (submitBtn) submitBtn.classList.remove("hidden");
    populateReviewSummary();
  } else {
    if (nextBtn) nextBtn.classList.remove("hidden");
    if (submitBtn) submitBtn.classList.add("hidden");
  }

  window.scrollTo({ top: 120, behavior: "smooth" });
}

// Step 1 - 3 Validation Rules
function validateCurrentStep() {
  const step = state.currentStep;
  clearStepErrors(step);
  let isValid = true;

  if (step === 1) {
    // Full Name
    const name = document.getElementById("fullName");
    if (!name.value.trim() || name.value.trim().length < 3) {
      showError("fullName", "Please enter a valid full name (minimum 3 characters).");
      isValid = false;
    }

    // Father's Name
    const father = document.getElementById("fatherName");
    if (!father.value.trim()) {
      showError("fatherName", "Father's name is required.");
      isValid = false;
    }

    // Mother's Name
    const mother = document.getElementById("motherName");
    if (!mother.value.trim()) {
      showError("motherName", "Mother's name is required.");
      isValid = false;
    }

    // Date of Birth
    const dob = document.getElementById("dob");
    if (!dob.value) {
      showError("dob", "Date of birth is required.");
      isValid = false;
    } else {
      const birthDate = new Date(dob.value);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
      if (age < 12 || age > 100) {
        showError("dob", "Applicant age must be between 12 and 100 years.");
        isValid = false;
      }
    }

    // Gender
    const gender = document.getElementById("gender");
    if (!gender.value) {
      showError("gender", "Please select your gender.");
      isValid = false;
    }

    // Mobile Number (10 digits)
    const mobile = document.getElementById("mobile");
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile.value.trim())) {
      showError("mobile", "Enter a valid 10-digit mobile number starting with 6-9.");
      isValid = false;
    }

    // Email Address
    const email = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      showError("email", "Enter a valid email address (e.g. name@domain.com).");
      isValid = false;
    }

    // Aadhaar / ID Number (Min 10-12 chars)
    const idNumber = document.getElementById("idNumber");
    const cleanId = idNumber.value.replace(/\s+/g, "");
    if (cleanId.length < 10) {
      showError("idNumber", "Enter a valid 12-digit Aadhaar or National ID number.");
      isValid = false;
    }

    // Category
    const category = document.getElementById("category");
    if (!category.value) {
      showError("category", "Please select your reservation category.");
      isValid = false;
    }

    if (isValid) {
      state.formData.fullName = name.value.trim();
      state.formData.fatherName = father.value.trim();
      state.formData.motherName = mother.value.trim();
      state.formData.dob = dob.value;
      state.formData.gender = gender.value;
      state.formData.mobile = mobile.value.trim();
      state.formData.email = email.value.trim();
      state.formData.idNumber = cleanId;
      state.formData.category = category.value;
    }
  } else if (step === 2) {
    // Address
    const address = document.getElementById("address");
    if (!address.value.trim() || address.value.trim().length < 5) {
      showError("address", "Please provide a complete street/house address.");
      isValid = false;
    }

    // City
    const city = document.getElementById("city");
    if (!city.value.trim()) {
      showError("city", "City/Town is required.");
      isValid = false;
    }

    // District
    const district = document.getElementById("district");
    if (!district.value.trim()) {
      showError("district", "District is required.");
      isValid = false;
    }

    // State
    const stateEl = document.getElementById("state");
    if (!stateEl.value) {
      showError("state", "Please select your state/province.");
      isValid = false;
    }

    // PIN Code (6 digits)
    const pincode = document.getElementById("pincode");
    const pinRegex = /^\d{6}$/;
    if (!pinRegex.test(pincode.value.trim())) {
      showError("pincode", "Enter a valid 6-digit postal PIN code.");
      isValid = false;
    }

    if (isValid) {
      state.formData.address = address.value.trim();
      state.formData.city = city.value.trim();
      state.formData.district = district.value.trim();
      state.formData.state = stateEl.value;
      state.formData.country = document.getElementById("country").value || "India";
      state.formData.pincode = pincode.value.trim();
    }
  } else if (step === 3) {
    // Qualification
    const qual = document.getElementById("qualification");
    if (!qual.value) {
      showError("qualification", "Please select your highest qualification.");
      isValid = false;
    }

    // School / College
    const inst = document.getElementById("institution");
    if (!inst.value.trim()) {
      showError("institution", "School or College name is required.");
      isValid = false;
    }

    // Board / University
    const univ = document.getElementById("university");
    if (!univ.value.trim()) {
      showError("university", "Board or University name is required.");
      isValid = false;
    }

    // Passing Year
    const year = document.getElementById("passingYear");
    const currentYear = new Date().getFullYear();
    const yrVal = parseInt(year.value, 10);
    if (!yrVal || yrVal < 1980 || yrVal > currentYear) {
      showError("passingYear", `Enter a passing year between 1980 and ${currentYear}.`);
      isValid = false;
    }

    // Percentage / CGPA
    const perc = document.getElementById("percentage");
    const pVal = parseFloat(perc.value);
    if (isNaN(pVal) || pVal < 0 || pVal > 100) {
      showError("percentage", "Enter a valid percentage (0.00 to 100.00) or CGPA.");
      isValid = false;
    }

    if (isValid) {
      state.formData.qualification = qual.value;
      state.formData.institution = inst.value.trim();
      state.formData.university = univ.value.trim();
      state.formData.passingYear = year.value;
      state.formData.percentage = perc.value;
    }
  } else if (step === 4) {
    // Step 4: Documents check (Photo, Signature, ID Proof are mandatory)
    const docs = state.formData.documents;
    if (!docs.photo) {
      showToast("Please upload your passport-size photo before proceeding.", "danger");
      isValid = false;
    } else if (!docs.signature) {
      showToast("Please upload your signature before proceeding.", "danger");
      isValid = false;
    } else if (!docs.idProof) {
      showToast("Please upload your ID Proof document.", "danger");
      isValid = false;
    }
  }

  return isValid;
}

function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  if (!field) return;
  const parent = field.closest(".form-group");
  if (parent) {
    parent.classList.add("has-error");
    const errorEl = parent.querySelector(".error-text");
    if (errorEl) {
      errorEl.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${message}`;
      errorEl.classList.remove("hidden");
    }
  }
}

function clearStepErrors(step) {
  const pane = document.getElementById(`step-pane-${step}`);
  if (!pane) return;
  pane.querySelectorAll(".form-group").forEach(group => {
    group.classList.remove("has-error");
    const err = group.querySelector(".error-text");
    if (err) err.classList.add("hidden");
  });
}

// Review Step Data Population
function populateReviewSummary() {
  const d = state.formData;

  // Form type
  const revFormType = document.getElementById("revFormType");
  if (revFormType) revFormType.textContent = state.currentFormCategory.title;

  // Personal Info
  document.getElementById("revFullName").textContent = d.fullName || "—";
  document.getElementById("revFatherName").textContent = d.fatherName || "—";
  document.getElementById("revMotherName").textContent = d.motherName || "—";
  document.getElementById("revDob").textContent = d.dob || "—";
  document.getElementById("revGender").textContent = d.gender || "—";
  document.getElementById("revMobile").textContent = d.mobile || "—";
  document.getElementById("revEmail").textContent = d.email || "—";
  document.getElementById("revIdNumber").textContent = d.idNumber ? `•••• •••• ${d.idNumber.slice(-4)}` : "—";
  document.getElementById("revCategory").textContent = d.category || "—";

  // Address
  document.getElementById("revAddress").textContent = d.address || "—";
  document.getElementById("revCity").textContent = d.city || "—";
  document.getElementById("revDistrict").textContent = d.district || "—";
  document.getElementById("revState").textContent = d.state || "—";
  document.getElementById("revCountry").textContent = d.country || "India";
  document.getElementById("revPincode").textContent = d.pincode || "—";

  // Education
  document.getElementById("revQualification").textContent = d.qualification || "—";
  document.getElementById("revInstitution").textContent = d.institution || "—";
  document.getElementById("revUniversity").textContent = d.university || "—";
  document.getElementById("revPassingYear").textContent = d.passingYear || "—";
  document.getElementById("revPercentage").textContent = d.percentage ? `${d.percentage}%` : "—";

  // Uploaded Documents List
  const docContainer = document.getElementById("revDocsList");
  if (docContainer) {
    docContainer.innerHTML = "";
    const docKeys = [
      { key: "photo", label: "Passport Photo" },
      { key: "signature", label: "Signature" },
      { key: "idProof", label: "ID Proof" },
      { key: "marksheet", label: "Marksheet" },
      { key: "otherDoc", label: "Other Document" }
    ];

    let count = 0;
    docKeys.forEach(item => {
      const doc = d.documents[item.key];
      if (doc) {
        count++;
        const chip = document.createElement("div");
        chip.className = "preview-doc-chip";
        chip.innerHTML = `
          <i class="fa-solid fa-check-circle" style="color: var(--success);"></i>
          <span>${item.label}: <strong>${doc.name}</strong> (${doc.size})</span>
        `;
        docContainer.appendChild(chip);
      }
    });

    if (count === 0) {
      docContainer.innerHTML = `<span class="text-muted">No documents uploaded.</span>`;
    }
  }
}

// ==========================================
// Document Upload & Preview Handling
// ==========================================
function bindDocumentUploadEvents() {
  const uploadConfigs = [
    { inputId: "docPhotoInput", key: "photo", previewId: "previewPhotoRow", maxSizeMB: 2, allowed: ["image/jpeg", "image/png"] },
    { inputId: "docSignInput", key: "signature", previewId: "previewSignRow", maxSizeMB: 1, allowed: ["image/jpeg", "image/png"] },
    { inputId: "docIdInput", key: "idProof", previewId: "previewIdRow", maxSizeMB: 3, allowed: ["image/jpeg", "image/png", "application/pdf"] },
    { inputId: "docMarksheetInput", key: "marksheet", previewId: "previewMarksheetRow", maxSizeMB: 5, allowed: ["image/jpeg", "image/png", "application/pdf"] },
    { inputId: "docOtherInput", key: "otherDoc", previewId: "previewOtherRow", maxSizeMB: 5, allowed: ["image/jpeg", "image/png", "application/pdf"] }
  ];

  uploadConfigs.forEach(cfg => {
    const input = document.getElementById(cfg.inputId);
    if (!input) return;

    input.addEventListener("change", function(e) {
      const file = e.target.files[0];
      if (!file) return;

      // File type validation
      const isValidType = cfg.allowed.some(t => file.type.includes(t) || file.name.toLowerCase().endsWith(t.split("/")[1]));
      if (!isValidType) {
        showToast(`Invalid file format. Allowed: ${cfg.allowed.join(", ").replace(/image\/|application\//g, ".")}`, "danger");
        input.value = "";
        return;
      }

      // File size validation
      const maxBytes = cfg.maxSizeMB * 1024 * 1024;
      if (file.size > maxBytes) {
        showToast(`File too large (${(file.size / (1024 * 1024)).toFixed(2)} MB). Max limit: ${cfg.maxSizeMB} MB`, "danger");
        input.value = "";
        return;
      }

      const sizeStr = file.size > 1024 * 1024 
        ? `${(file.size / (1024 * 1024)).toFixed(2)} MB`
        : `${Math.round(file.size / 1024)} KB`;

      // Read file for thumbnail if image
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function(ev) {
          state.formData.documents[cfg.key] = {
            name: file.name,
            size: sizeStr,
            dataUrl: ev.target.result,
            isImage: true
          };
          renderDocPreview(cfg.previewId, cfg.key);
        };
        reader.readAsDataURL(file);
      } else {
        state.formData.documents[cfg.key] = {
          name: file.name,
          size: sizeStr,
          dataUrl: null,
          isImage: false
        };
        renderDocPreview(cfg.previewId, cfg.key);
      }

      showToast(`Uploaded: ${file.name}`, "success");
    });
  });
}

function renderDocPreview(previewRowId, docKey) {
  const row = document.getElementById(previewRowId);
  const doc = state.formData.documents[docKey];
  if (!row || !doc) return;

  const thumbImg = row.querySelector(".file-thumb");
  const nameEl = row.querySelector(".file-name");
  const sizeEl = row.querySelector(".file-meta-sub");

  if (doc.isImage && doc.dataUrl) {
    if (thumbImg) {
      thumbImg.src = doc.dataUrl;
      thumbImg.style.display = "block";
    }
  } else {
    if (thumbImg) {
      thumbImg.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='%2364748b' d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z'/%3E%3C/svg%3E";
      thumbImg.style.display = "block";
    }
  }

  if (nameEl) nameEl.textContent = doc.name;
  if (sizeEl) sizeEl.textContent = `${doc.size} • Ready for submission`;

  row.classList.remove("hidden");
}

window.removeDoc = function(docKey, previewRowId, inputId) {
  delete state.formData.documents[docKey];
  const row = document.getElementById(previewRowId);
  if (row) row.classList.add("hidden");
  const input = document.getElementById(inputId);
  if (input) input.value = "";
  showToast("Document removed.", "info");
};

// ==========================================
// Form Submission & Success Logic
// ==========================================
function submitApplication() {
  const confirmBox = document.getElementById("confirmDeclaration");
  if (!confirmBox || !confirmBox.checked) {
    showToast("Please acknowledge and check the confirmation declaration checkbox.", "warning");
    return;
  }

  // Show Loading Spinner Overlay
  const overlay = document.getElementById("loadingOverlay");
  const loadingText = document.getElementById("loadingText");
  if (overlay) {
    overlay.classList.add("active");
    if (loadingText) loadingText.textContent = "Verifying information and encrypting documents...";
  }

  setTimeout(() => {
    // Generate Reference Number
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const refId = `EF-2026-${randomNum}`;
    const submissionDate = new Date().toISOString();

    const applicationRecord = {
      id: refId,
      formType: state.currentFormCategory.title,
      formId: state.currentFormCategory.id,
      ...state.formData,
      submissionDate: submissionDate,
      status: "Submitted",
      remarks: "Application received and assigned for document verification."
    };

    // Store in LocalStorage
    const apps = getApplications();
    apps.unshift(applicationRecord);
    saveApplications(apps);

    state.lastSubmittedApp = applicationRecord;

    // Hide Loading
    if (overlay) overlay.classList.remove("active");

    // Display Success Screen
    displaySuccessScreen(applicationRecord);
    switchView("success-view");

    showToast("Form submitted successfully!", "success");
  }, 1200);
}

function displaySuccessScreen(app) {
  document.getElementById("successRefNumber").textContent = app.id;
  document.getElementById("successApplicantName").textContent = app.fullName;
  document.getElementById("successFormTitle").textContent = app.formType;

  const dateObj = new Date(app.submissionDate);
  document.getElementById("successSubmissionDate").textContent = dateObj.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

// Copy Reference Number
window.copyRefNumber = function() {
  const ref = document.getElementById("successRefNumber").textContent;
  if (!ref) return;
  navigator.clipboard.writeText(ref).then(() => {
    showToast(`Copied reference ID: ${ref}`, "success");
  }).catch(() => {
    showToast(`Reference ID: ${ref}`, "info");
  });
};

// ==========================================
// Save Draft Application
// ==========================================
window.saveDraftApplication = function() {
  // Capture current step fields into state
  validateCurrentStep();

  const randomNum = Math.floor(10000 + Math.random() * 90000);
  const draftId = `DFT-2026-${randomNum}`;
  const record = {
    id: draftId,
    formType: state.currentFormCategory.title,
    formId: state.currentFormCategory.id,
    ...state.formData,
    submissionDate: new Date().toISOString(),
    status: "Draft",
    remarks: "Draft saved locally. You can resume editing anytime."
  };

  const apps = getApplications();
  apps.unshift(record);
  saveApplications(apps);

  showToast(`Draft saved successfully as ${draftId}!`, "success");
  switchView("user-dashboard-view");
};

// ==========================================
// Printable Application Slip Generator
// ==========================================
window.printApplicationSlip = function(appId) {
  let app = null;
  if (appId) {
    const apps = getApplications();
    app = apps.find(a => a.id === appId);
  } else {
    app = state.lastSubmittedApp;
  }

  if (!app) {
    showToast("Application details not found for printing.", "danger");
    return;
  }

  // Populate Printable Slip Container
  const slipContainer = document.getElementById("printableSlipContent");
  if (!slipContainer) return;

  const formattedDate = new Date(app.submissionDate).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit"
  });

  const photoSrc = app.documents && app.documents.photo && app.documents.photo.dataUrl
    ? app.documents.photo.dataUrl
    : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='100' height='100'%3E%3Cpath fill='%2394a3b8' d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";

  const signatureSrc = app.documents && app.documents.signature && app.documents.signature.dataUrl
    ? `<img src="${app.documents.signature.dataUrl}" style="max-height: 48px;" alt="Signature">`
    : `<span style="font-size: 0.8rem; color: #64748b;">(Digitally Verified)</span>`;

  slipContainer.innerHTML = `
    <div class="print-slip-header">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
        <span style="font-size: 0.8rem; font-weight: bold; color: #475569;">EASYFORM PORTAL ACKNOWLEDGEMENT SLIP</span>
        <span style="font-size: 0.8rem; color: #64748b;">Date: ${formattedDate}</span>
      </div>
      <div class="print-slip-title">${app.formType.toUpperCase()}</div>
      <div class="print-slip-subtitle">Application Reference No: <strong>${app.id}</strong> | Status: <strong>${app.status.toUpperCase()}</strong></div>
    </div>

    <div style="display: flex; gap: 1.5rem; margin-bottom: 1.5rem;">
      <div style="flex: 1;">
        <table class="print-grid-table">
          <tr>
            <th style="width: 35%;">Applicant Name</th>
            <td><strong>${app.fullName || "—"}</strong></td>
          </tr>
          <tr>
            <th>Father's Name</th>
            <td>${app.fatherName || "—"}</td>
          </tr>
          <tr>
            <th>Mother's Name</th>
            <td>${app.motherName || "—"}</td>
          </tr>
          <tr>
            <th>Date of Birth</th>
            <td>${app.dob || "—"}</td>
          </tr>
          <tr>
            <th>Gender / Category</th>
            <td>${app.gender || "—"} / ${app.category || "—"}</td>
          </tr>
          <tr>
            <th>Mobile / Email</th>
            <td>${app.mobile || "—"} | ${app.email || "—"}</td>
          </tr>
        </table>
      </div>
      <div style="width: 130px;">
        <div class="print-photo-box">
          <img src="${photoSrc}" alt="Applicant Photo">
        </div>
      </div>
    </div>

    <h4 style="font-size: 1rem; border-bottom: 1px solid #cbd5e1; padding-bottom: 0.25rem; margin-bottom: 0.5rem;">Communication & Permanent Address</h4>
    <table class="print-grid-table">
      <tr>
        <th style="width: 25%;">Street Address</th>
        <td>${app.address || "—"}</td>
      </tr>
      <tr>
        <th>City & District</th>
        <td>${app.city || "—"}, ${app.district || "—"}</td>
      </tr>
      <tr>
        <th>State & Country</th>
        <td>${app.state || "—"}, ${app.country || "India"}</td>
      </tr>
      <tr>
        <th>Postal PIN Code</th>
        <td>${app.pincode || "—"}</td>
      </tr>
    </table>

    <h4 style="font-size: 1rem; border-bottom: 1px solid #cbd5e1; padding-bottom: 0.25rem; margin-bottom: 0.5rem;">Academic Qualification Details</h4>
    <table class="print-grid-table">
      <tr>
        <th style="width: 25%;">Highest Qualification</th>
        <td>${app.qualification || "—"}</td>
      </tr>
      <tr>
        <th>Institute / School</th>
        <td>${app.institution || "—"}</td>
      </tr>
      <tr>
        <th>Board / University</th>
        <td>${app.university || "—"}</td>
      </tr>
      <tr>
        <th>Passing Year & Marks</th>
        <td>Year: ${app.passingYear || "—"} | Score: ${app.percentage ? app.percentage + "%" : "—"}</td>
      </tr>
    </table>

    <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 2.5rem; padding-top: 1rem; border-top: 1px dashed #94a3b8;">
      <div style="font-size: 0.78rem; color: #475569; max-width: 480px;">
        <strong>Declaration:</strong> I hereby declare that the information provided in this application is true, authentic, and complete to the best of my knowledge. Any discrepancy found at any stage will lead to cancellation.
      </div>
      <div class="print-sig-box">
        ${signatureSrc}
        <div style="font-size: 0.75rem; color: #000; font-weight: bold; margin-top: 0.25rem;">Authorized Signature</div>
      </div>
    </div>
  `;

  // Open Slip Modal
  openModal("printModal");
};

window.triggerSystemPrint = function() {
  window.print();
};

// ==========================================
// User Dashboard Logic
// ==========================================
function renderUserDashboard() {
  const apps = getApplications();
  // Filter for applicant
  const userApps = apps.filter(a => !state.currentUser.email || a.email.toLowerCase() === state.currentUser.email.toLowerCase() || state.currentUser.role === "applicant");

  // Metrics
  const totalCount = userApps.length;
  const underReviewCount = userApps.filter(a => a.status === "Under Review" || a.status === "Submitted").length;
  const approvedCount = userApps.filter(a => a.status === "Approved").length;
  const rejectedCount = userApps.filter(a => a.status === "Rejected").length;

  document.getElementById("userMetricTotal").textContent = totalCount;
  document.getElementById("userMetricReview").textContent = underReviewCount;
  document.getElementById("userMetricApproved").textContent = approvedCount;
  document.getElementById("userMetricRejected").textContent = rejectedCount;

  const tableBody = document.getElementById("userApplicationsTableBody");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  if (userApps.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6">
          <div class="empty-state">
            <i class="fa-regular fa-folder-open"></i>
            <h4>No applications submitted yet</h4>
            <p>You haven't filled out any forms yet. Click "Available Forms" to start!</p>
            <button class="btn btn-primary btn-sm" style="margin-top: 1rem;" onclick="switchView('home-view'); document.getElementById('available-forms-section').scrollIntoView({behavior: 'smooth'});">
              Browse Forms
            </button>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  userApps.forEach(app => {
    const tr = document.createElement("tr");
    const dateFormatted = new Date(app.submissionDate).toLocaleDateString("en-IN", {
      day: "numeric", month: "short", year: "numeric"
    });

    const statusClass = `status-${app.status.toLowerCase().replace(/\s+/g, "-")}`;

    tr.innerHTML = `
      <td><strong>${app.id}</strong></td>
      <td>${app.formType}</td>
      <td>${dateFormatted}</td>
      <td><span class="status-pill ${statusClass}"><i class="fa-solid fa-circle" style="font-size: 6px;"></i> ${app.status}</span></td>
      <td><span style="font-size: 0.85rem; color: #64748b;">${app.remarks || "Under standard processing"}</span></td>
      <td>
        <div class="action-btn-group">
          <button class="table-btn" title="View Details" onclick="viewApplicationDetails('${app.id}')">
            <i class="fa-regular fa-eye"></i>
          </button>
          <button class="table-btn" title="Download / Print Application" onclick="printApplicationSlip('${app.id}')">
            <i class="fa-solid fa-print"></i>
          </button>
          <button class="table-btn" title="Upload Missing Documents" onclick="openMissingDocModal('${app.id}')">
            <i class="fa-solid fa-upload"></i>
          </button>
        </div>
      </td>
    `;
    tableBody.appendChild(tr);
  });

  // Populate Missing Doc Selector
  populateMissingDocAppSelect(userApps);
}

function populateMissingDocAppSelect(apps) {
  const sel = document.getElementById("missingDocAppSelect");
  if (!sel) return;
  sel.innerHTML = '<option value="">-- Choose an Application --</option>';
  apps.forEach(a => {
    const opt = document.createElement("option");
    opt.value = a.id;
    opt.textContent = `${a.id} - ${a.formType} (${a.status})`;
    sel.appendChild(opt);
  });
}

window.openMissingDocModal = function(appId) {
  const shortcutInput = document.getElementById("shortcutDocAppId");
  if (shortcutInput && appId) shortcutInput.value = appId;
  const sel = document.getElementById("missingDocAppSelect");
  if (sel && appId) sel.value = appId;
  openModal("missingDocModal");
};

// ==========================================
// Admin Dashboard Logic & Filtering
// ==========================================
function renderAdminDashboard() {
  const apps = getApplications();

  // Metrics
  const total = apps.length;
  const review = apps.filter(a => a.status === "Under Review" || a.status === "Submitted").length;
  const approved = apps.filter(a => a.status === "Approved").length;
  const rejected = apps.filter(a => a.status === "Rejected").length;

  document.getElementById("adminMetricTotal").textContent = total;
  document.getElementById("adminMetricReview").textContent = review;
  document.getElementById("adminMetricApproved").textContent = approved;
  document.getElementById("adminMetricRejected").textContent = rejected;

  filterAdminApplications();
}

function filterAdminApplications() {
  const apps = getApplications();
  const searchInput = document.getElementById("adminSearchInput");
  const statusFilter = document.getElementById("adminStatusFilter");
  const formFilter = document.getElementById("adminFormFilter");

  const query = (searchInput ? searchInput.value.trim().toLowerCase() : "");
  const statusVal = statusFilter ? statusFilter.value : "ALL";
  const formVal = formFilter ? formFilter.value : "ALL";

  const filtered = apps.filter(app => {
    // Search match (name, app id, mobile, email)
    const matchesQuery = !query || 
      (app.fullName && app.fullName.toLowerCase().includes(query)) ||
      (app.id && app.id.toLowerCase().includes(query)) ||
      (app.mobile && app.mobile.includes(query)) ||
      (app.email && app.email.toLowerCase().includes(query));

    // Status filter
    const matchesStatus = (statusVal === "ALL") || (app.status === statusVal);

    // Form filter
    const matchesForm = (formVal === "ALL") || (app.formId === formVal);

    return matchesQuery && matchesStatus && matchesForm;
  });

  const tableBody = document.getElementById("adminApplicationsTableBody");
  if (!tableBody) return;
  tableBody.innerHTML = "";

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7">
          <div class="empty-state">
            <i class="fa-solid fa-filter-circle-xmark"></i>
            <h4>No matching applications</h4>
            <p>Try clearing your search query or adjusting status filters.</p>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  filtered.forEach(app => {
    const tr = document.createElement("tr");
    const dateFormatted = new Date(app.submissionDate).toLocaleDateString("en-IN", {
      day: "numeric", month: "short", year: "numeric"
    });
    const statusClass = `status-${app.status.toLowerCase().replace(/\s+/g, "-")}`;

    tr.innerHTML = `
      <td><strong>${app.id}</strong></td>
      <td>
        <div style="font-weight: 700; color: var(--secondary);">${app.fullName || "—"}</div>
        <div style="font-size: 0.78rem; color: #64748b;">${app.email} • ${app.mobile}</div>
      </td>
      <td>${app.formType}</td>
      <td>${dateFormatted}</td>
      <td>
        <select class="quick-role-select" style="background:#f1f5f9; color:#0f172a; border-color:#cbd5e1; font-weight:600;" onchange="updateApplicationStatus('${app.id}', this.value)">
          <option value="Draft" ${app.status === 'Draft' ? 'selected' : ''}>Draft</option>
          <option value="Submitted" ${app.status === 'Submitted' ? 'selected' : ''}>Submitted</option>
          <option value="Under Review" ${app.status === 'Under Review' ? 'selected' : ''}>Under Review</option>
          <option value="Approved" ${app.status === 'Approved' ? 'selected' : ''}>Approved</option>
          <option value="Rejected" ${app.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
        </select>
      </td>
      <td>
        <div class="action-btn-group">
          <button class="table-btn" title="View Full Details" onclick="viewApplicationDetails('${app.id}')">
            <i class="fa-regular fa-eye"></i>
          </button>
          <button class="table-btn" title="Print Application" onclick="printApplicationSlip('${app.id}')">
            <i class="fa-solid fa-print"></i>
          </button>
          <button class="table-btn danger" title="Delete Application" onclick="confirmDeleteApp('${app.id}')">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

// Update Application Status in Admin
window.updateApplicationStatus = function(appId, newStatus) {
  const apps = getApplications();
  const index = apps.findIndex(a => a.id === appId);
  if (index !== -1) {
    apps[index].status = newStatus;
    apps[index].remarks = `Status updated to ${newStatus} on ${new Date().toLocaleDateString("en-IN")}.`;
    saveApplications(apps);
    showToast(`Application ${appId} status updated to "${newStatus}"`, "success");
    renderAdminDashboard();
  }
};

// Confirm Delete Application
let appToDeleteId = null;
window.confirmDeleteApp = function(appId) {
  appToDeleteId = appId;
  const targetEl = document.getElementById("deleteAppRefText");
  if (targetEl) targetEl.textContent = appId;
  openModal("deleteConfirmModal");
};

window.executeDeleteApp = function() {
  if (!appToDeleteId) return;
  let apps = getApplications();
  apps = apps.filter(a => a.id !== appToDeleteId);
  saveApplications(apps);
  closeModal("deleteConfirmModal");
  showToast(`Application ${appToDeleteId} deleted successfully.`, "info");
  appToDeleteId = null;
  renderAdminDashboard();
};

// Export CSV of Applications
window.exportApplicationsCSV = function() {
  const apps = getApplications();
  if (apps.length === 0) {
    showToast("No applications to export.", "warning");
    return;
  }

  const headers = [
    "Application ID", "Form Type", "Applicant Name", "Father Name", "Mother Name",
    "DOB", "Gender", "Mobile", "Email", "Aadhaar/ID", "Category",
    "City", "State", "PIN Code", "Highest Qualification", "Percentage",
    "Submission Date", "Status", "Remarks"
  ];

  const rows = apps.map(a => [
    `"${a.id || ""}"`,
    `"${a.formType || ""}"`,
    `"${a.fullName || ""}"`,
    `"${a.fatherName || ""}"`,
    `"${a.motherName || ""}"`,
    `"${a.dob || ""}"`,
    `"${a.gender || ""}"`,
    `"${a.mobile || ""}"`,
    `"${a.email || ""}"`,
    `"${a.idNumber || ""}"`,
    `"${a.category || ""}"`,
    `"${a.city || ""}"`,
    `"${a.state || ""}"`,
    `"${a.pincode || ""}"`,
    `"${a.qualification || ""}"`,
    `"${a.percentage || ""}"`,
    `"${a.submissionDate || ""}"`,
    `"${a.status || ""}"`,
    `"${(a.remarks || "").replace(/"/g, '""')}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `EasyForm_Applications_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast("Application records exported as CSV successfully!", "success");
};

// ==========================================
// View Application Details Modal
// ==========================================
window.viewApplicationDetails = function(appId) {
  const apps = getApplications();
  const app = apps.find(a => a.id === appId);
  if (!app) return;

  const content = document.getElementById("detailsModalContent");
  if (!content) return;

  const dateFormatted = new Date(app.submissionDate).toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit"
  });

  const statusClass = `status-${app.status.toLowerCase().replace(/\s+/g, "-")}`;

  content.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.25rem;">
      <div>
        <h4 style="font-size: 1.2rem; font-weight: 800; color: var(--secondary);">${app.fullName || "Applicant"}</h4>
        <span style="font-size: 0.85rem; color: #64748b;">Ref: ${app.id} • Submitted: ${dateFormatted}</span>
      </div>
      <span class="status-pill ${statusClass}">${app.status}</span>
    </div>

    <div style="background: #f8fafc; border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.25rem;">
      <h5 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--secondary);">Form Details</h5>
      <p style="font-size: 0.9rem;"><strong>Category:</strong> ${app.formType}</p>
      <p style="font-size: 0.9rem;"><strong>Remarks:</strong> ${app.remarks || "None"}</p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem; font-size: 0.9rem;">
      <div>
        <strong>Personal Info:</strong>
        <div style="color: #64748b; margin-top: 0.25rem;">
          Parents: ${app.fatherName} & ${app.motherName}<br>
          DOB: ${app.dob} (${app.gender})<br>
          Category: ${app.category}<br>
          Mobile: ${app.mobile}<br>
          Email: ${app.email}<br>
          ID: ${app.idNumber}
        </div>
      </div>
      <div>
        <strong>Address:</strong>
        <div style="color: #64748b; margin-top: 0.25rem;">
          ${app.address}<br>
          ${app.city}, ${app.district}<br>
          ${app.state}, ${app.country} - ${app.pincode}
        </div>
      </div>
    </div>

    <div style="margin-bottom: 1.25rem; font-size: 0.9rem;">
      <strong>Education:</strong>
      <div style="color: #64748b; margin-top: 0.25rem;">
        ${app.qualification} from ${app.institution} (${app.university})<br>
        Year of Passing: ${app.passingYear} • Percentage: ${app.percentage}%
      </div>
    </div>

    <div>
      <strong>Uploaded Documents:</strong>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;">
        ${app.documents && Object.keys(app.documents).length > 0 
          ? Object.entries(app.documents).map(([k, v]) => `
              <span class="preview-doc-chip">
                <i class="fa-solid fa-file"></i> ${k}: <strong>${v.name || 'Uploaded'}</strong> (${v.size || 'Verified'})
              </span>
            `).join('')
          : '<span style="color: #94a3b8; font-size: 0.85rem;">No documents attached</span>'
        }
      </div>
    </div>
  `;

  openModal("detailsModal");
};

// ==========================================
// Missing Documents Upload Form Handling
// ==========================================
window.submitMissingDocument = function(e) {
  e.preventDefault();
  const isModal = document.getElementById("missingDocModal") && document.getElementById("missingDocModal").classList.contains("open");
  
  let appId, docType, fileInput;
  if (isModal) {
    appId = document.getElementById("shortcutDocAppId").value || (document.getElementById("missingDocAppSelect") ? document.getElementById("missingDocAppSelect").value : "");
    docType = document.getElementById("shortcutDocType").value;
    fileInput = document.getElementById("shortcutDocFile");
  } else {
    appId = document.getElementById("missingDocAppSelect").value;
    docType = document.getElementById("missingDocType").value;
    fileInput = document.getElementById("missingDocFileInput");
  }

  if (!appId) {
    showToast("Please choose an application.", "warning");
    return;
  }
  if (!fileInput || !fileInput.files[0]) {
    showToast("Please select a file to upload.", "warning");
    return;
  }

  const file = fileInput.files[0];
  const apps = getApplications();
  const index = apps.findIndex(a => a.id === appId);

  if (index !== -1) {
    if (!apps[index].documents) apps[index].documents = {};
    const sizeStr = `${Math.round(file.size / 1024)} KB`;
    apps[index].documents[docType] = {
      name: file.name,
      size: sizeStr,
      uploadedAt: new Date().toISOString()
    };
    apps[index].remarks = `Additional document (${docType}) uploaded. Under verification.`;
    apps[index].status = "Under Review";
    saveApplications(apps);

    closeModal("missingDocModal");
    showToast(`Document uploaded successfully for ${appId}!`, "success");
    if (fileInput) fileInput.value = "";
    renderUserDashboard();
  }
};

// Profile Update Handling
window.updateUserProfile = function(e) {
  e.preventDefault();
  const name = document.getElementById("profileName").value.trim();
  const phone = document.getElementById("profilePhone").value.trim();
  const addr = document.getElementById("profileAddress").value.trim();

  if (name) state.currentUser.name = name;
  updateUserUI();
  showToast("Profile details updated successfully!", "success");
};

// ==========================================
// Authentication & Role Switching
// ==========================================
function bindAuthEvents() {
  // Role selector in top demo bar
  const roleSelect = document.getElementById("demoRoleSelect");
  if (roleSelect) {
    roleSelect.addEventListener("change", function(e) {
      switchRole(e.target.value);
    });
  }

  // Quick Demo Login Buttons
  const applicantLoginBtn = document.getElementById("quickApplicantLoginBtn");
  if (applicantLoginBtn) {
    applicantLoginBtn.addEventListener("click", () => {
      switchRole("applicant");
      closeModal("authModal");
      showToast("Logged in as Applicant (Rahul Sharma)", "success");
      switchView("user-dashboard-view");
    });
  }

  const adminLoginBtn = document.getElementById("quickAdminLoginBtn");
  if (adminLoginBtn) {
    adminLoginBtn.addEventListener("click", () => {
      switchRole("admin");
      closeModal("authModal");
      showToast("Logged in as Administrator", "success");
      switchView("admin-dashboard-view");
    });
  }

  // Login Form Submission
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value.trim();
      if (email.toLowerCase().includes("admin")) {
        switchRole("admin");
        showToast("Logged in as Administrator", "success");
        switchView("admin-dashboard-view");
      } else {
        switchRole("applicant");
        showToast(`Logged in as ${email}`, "success");
        switchView("user-dashboard-view");
      }
      closeModal("authModal");
    });
  }

  // Sign Up Form Submission
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("signupName").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const mobile = document.getElementById("signupMobile").value.trim();
      const pass = document.getElementById("signupPassword").value;
      const confirmPass = document.getElementById("signupConfirmPassword").value;

      if (pass !== confirmPass) {
        showToast("Passwords do not match.", "danger");
        return;
      }

      state.currentUser = {
        name: name,
        email: email,
        mobile: mobile,
        role: "applicant"
      };
      updateUserUI();
      closeModal("authModal");
      showToast(`Welcome ${name}! Your account has been created.`, "success");
      switchView("user-dashboard-view");
    });
  }

  // Forgot Password
  const forgotForm = document.getElementById("forgotPasswordForm");
  if (forgotForm) {
    forgotForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("forgotEmail").value.trim();
      showToast(`Password reset link sent to ${email}`, "info");
      switchAuthTab("login");
    });
  }
}

function switchRole(role) {
  if (role === "admin") {
    state.currentUser = {
      name: "Administrator",
      email: "admin@easyform.gov.in",
      role: "admin"
    };
  } else if (role === "applicant") {
    state.currentUser = {
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      role: "applicant"
    };
  } else {
    state.currentUser = {
      name: "Guest User",
      email: "",
      role: "guest"
    };
  }

  const roleSelect = document.getElementById("demoRoleSelect");
  if (roleSelect) roleSelect.value = role;

  updateUserUI();
}

function updateUserUI() {
  const user = state.currentUser;
  const userBtn = document.getElementById("userAvatarBtn");
  const navLoginBtn = document.getElementById("navLoginBtn");
  const avatarInitials = document.getElementById("userAvatarInitials");
  const userNameEl = document.getElementById("dropdownUserName");
  const userRoleEl = document.getElementById("dropdownUserRole");
  const adminNavLinks = document.querySelectorAll(".admin-only-link");

  if (userNameEl) userNameEl.textContent = user.name;
  if (userRoleEl) userRoleEl.textContent = user.role.toUpperCase();

  if (avatarInitials) {
    const parts = user.name.split(" ");
    avatarInitials.textContent = parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : parts[0][0].toUpperCase();
  }

  if (user.role === "admin") {
    adminNavLinks.forEach(el => el.classList.remove("hidden"));
  } else {
    adminNavLinks.forEach(el => el.classList.add("hidden"));
  }

  // Fill profile form values
  const pName = document.getElementById("profileName");
  const pEmail = document.getElementById("profileEmail");
  if (pName) pName.value = user.name;
  if (pEmail) pEmail.value = user.email || "rahul.sharma@example.com";
}

window.logoutUser = function() {
  switchRole("guest");
  showToast("Logged out successfully.", "info");
  switchView("home-view");
  toggleUserDropdown(false);
};

// ==========================================
// Event Binding & Helper Functions
// ==========================================
function bindNavigationEvents() {
  // Mobile drawer toggle
  const mobileToggle = document.getElementById("mobileToggleBtn");
  const navMenu = document.getElementById("navMenu");
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }

  // Nav link clicks
  document.querySelectorAll("[data-nav-view]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = btn.dataset.navView;
      switchView(target);
    });
  });

  // User avatar dropdown toggle
  const userAvatarBtn = document.getElementById("userAvatarBtn");
  const userDropdown = document.getElementById("userDropdown");
  if (userAvatarBtn && userDropdown) {
    userAvatarBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle("show");
    });
    document.addEventListener("click", () => {
      userDropdown.classList.remove("show");
    });
  }

  // Form search and categories filter on homepage
  const searchInput = document.getElementById("formsCategorySearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = FORM_CATEGORIES.filter(f => 
        f.title.toLowerCase().includes(q) || 
        f.description.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q)
      );
      renderAvailableForms(filtered);
    });
  }

  document.querySelectorAll(".cat-filter-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".cat-filter-btn").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      const cat = this.dataset.category;
      if (cat === "ALL") {
        renderAvailableForms(FORM_CATEGORIES);
      } else {
        const filtered = FORM_CATEGORIES.filter(f => f.category === cat);
        renderAvailableForms(filtered);
      }
    });
  });
}

function bindFormWizardEvents() {
  // Next Step
  const nextBtn = document.getElementById("nextStepBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (validateCurrentStep()) {
        goToStep(state.currentStep + 1);
      } else {
        showToast("Please fix the highlighted errors before continuing.", "danger");
      }
    });
  }

  // Prev Step
  const prevBtn = document.getElementById("prevStepBtn");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goToStep(state.currentStep - 1);
    });
  }

  // Submit Button
  const submitBtn = document.getElementById("submitFormBtn");
  if (submitBtn) {
    submitBtn.addEventListener("click", submitApplication);
  }

  // "Same address" checkbox helper
  const sameAddressCheck = document.getElementById("sameAddressCheckbox");
  if (sameAddressCheck) {
    sameAddressCheck.addEventListener("change", function() {
      if (this.checked) {
        showToast("Address synced.", "info");
      }
    });
  }

  // Realtime clear errors on input
  document.querySelectorAll(".form-wizard-card input, .form-wizard-card select").forEach(input => {
    input.addEventListener("input", function() {
      const parent = this.closest(".form-group");
      if (parent && parent.classList.contains("has-error")) {
        parent.classList.remove("has-error");
        const err = parent.querySelector(".error-text");
        if (err) err.classList.add("hidden");
      }
    });
  });
}

function bindDashboardEvents() {
  // Dashboard Tabs (User)
  document.querySelectorAll(".dash-tab-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const parent = this.closest(".dashboard-view");
      if (!parent) return;

      parent.querySelectorAll(".dash-tab-btn").forEach(b => b.classList.remove("active"));
      this.classList.add("active");

      const targetPane = this.dataset.tabTarget;
      parent.querySelectorAll(".dash-tab-content").forEach(c => c.classList.add("hidden"));
      const activeContent = document.getElementById(targetPane);
      if (activeContent) activeContent.classList.remove("hidden");
    });
  });
}

function bindAdminEvents() {
  const searchInput = document.getElementById("adminSearchInput");
  const statusFilter = document.getElementById("adminStatusFilter");
  const formFilter = document.getElementById("adminFormFilter");

  if (searchInput) searchInput.addEventListener("input", filterAdminApplications);
  if (statusFilter) statusFilter.addEventListener("change", filterAdminApplications);
  if (formFilter) formFilter.addEventListener("change", filterAdminApplications);

  const resetBtn = document.getElementById("resetAdminFiltersBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      if (statusFilter) statusFilter.value = "ALL";
      if (formFilter) formFilter.value = "ALL";
      filterAdminApplications();
      showToast("Filters reset.", "info");
    });
  }
}

function bindFaqEvents() {
  document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", function() {
      const item = this.closest(".faq-item");
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
}

// Modal open/close helpers
window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add("open");
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("open");
};

window.switchAuthTab = function(tabName) {
  document.querySelectorAll(".auth-tab-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".auth-tab-pane").forEach(p => p.classList.add("hidden"));

  const targetTab = document.getElementById(`tabBtn-${tabName}`);
  const targetPane = document.getElementById(`authPane-${tabName}`);

  if (targetTab) targetTab.classList.add("active");
  if (targetPane) targetPane.classList.remove("hidden");
};

// Toast notification helper
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  const iconMap = {
    success: "fa-circle-check",
    danger: "fa-circle-xmark",
    warning: "fa-triangle-exclamation",
    info: "fa-circle-info"
  };

  toast.innerHTML = `
    <i class="fa-solid ${iconMap[type] || 'fa-circle-info'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", initApp);
