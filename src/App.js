import "./App.css";
import JobApplication from "./JobApplication/JobApplication";
import SingleCompanyPage from "./Company/SingleCompanyPage";
import CompanyProfile from "./Companyprofile/CompanyProfile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<JobApplication />} />
        <Route path="singlecompanypage" element={<SingleCompanyPage />} />
        <Route path="companyprofile" element={<CompanyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
