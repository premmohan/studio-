// EDIT THESE DETAILS WITH YOUR ACTUAL COMPANY INFORMATION
// Used by Company Profile page and GST Invoice generator
export const companyInfo = {
  name: "Prem Mohan Studio",
  tagline: "AI-Powered Solutions | Intelligent Web Applications",
  email: "contact@premmohan.com",
  website: "premmohan.com",
  phone: "+91-XXXXXXXXXX",
  address: {
    line1: "Address Line 1",
    line2: "Address Line 2",
    city: "City",
    state: "State",
    pincode: "PIN Code",
    country: "India",
  },
  // Statutory details (fill these in)
  gstin: "YOUR_GSTIN_HERE",
  msmeUAM: "YOUR_MSME_UAM_NUMBER",
  gemSellerId: "YOUR_GEM_SELLER_ID",
  pan: "YOUR_PAN_NUMBER",
  // Bank details for invoices
  bank: {
    accountName: "Prem Mohan Studio",
    accountNumber: "XXXX XXXX XXXX",
    ifsc: "XXXX0000000",
    bankName: "Your Bank Name",
    branch: "Branch Name",
  },
  // Default GST settings
  defaultStateCode: "29", // e.g. 29 = Karnataka
  defaultGstRate: 18, // %
};

export const companyServices = [
  "AI Agents Development",
  "AI Solutions & Machine Learning Models",
  "AI Chatbots & Conversational Assistants",
  "RAG & Document Intelligence Systems",
  "NLP & Sentiment Analysis",
  "Computer Vision Solutions",
  "LLM Integration & Fine-tuning",
  "Website & Web Application Development",
  "UI / UX Design",
  "SaaS Platform Development",
  "MVP Development (4-8 weeks)",
  "Mobile App Development (React Native / Expo)",
  "Solution Architecture & Technical Reviews",
  "Data Engineering & ETL Pipelines",
  "Automation, REST APIs & Integrations",
  "AI Governance Consultancy",
  "AI Procurement Consultancy",
  "AI Strategy Consulting",
];

export const companyCredentials = [
  {
    label: "MSME Registered",
    detail:
      "Officially recognized under the Government of India's Micro, Small & Medium Enterprises framework.",
  },
  {
    label: "GeM Registered",
    detail:
      "Registered seller on the Government e-Marketplace (GeM) — eligible for procurement by government departments and PSUs.",
  },
];

export const companyTech = [
  "OpenAI",
  "Anthropic",
  "Groq",
  "LangChain",
  "Hugging Face",
  "React",
  "TypeScript",
  "Python",
  "TensorFlow",
  "PyTorch",
  "Streamlit",
  "FastAPI",
];
