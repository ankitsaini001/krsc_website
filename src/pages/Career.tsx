import React, { useState, useEffect, useRef } from "react";

// Function to return fresh default form structure
const getDefaultFormData = () => ({
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  resume: null as File | null,
});

const Career: React.FC = () => {
  const [showForm, setShowForm] = useState<{ [key: string]: boolean }>({});
  const [loadingJobs, setLoadingJobs] = useState<{ [key: string]: boolean }>(
    {}
  );

  const formDataRef = useRef<{
    [key: string]: ReturnType<typeof getDefaultFormData>;
  }>({});
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleInputChange = (
    jobTitle: string,
    field: "firstName" | "lastName" | "mobile" | "email" | "resume",
    value: string | File | null
  ) => {
    if (!formDataRef.current[jobTitle]) {
      formDataRef.current[jobTitle] = getDefaultFormData();
    }
    formDataRef.current[jobTitle][field] = value as any;
  };
  const toggleForm = (jobTitle: string) => {
    setShowForm((prev) => ({
      ...prev,
      [jobTitle]: !prev[jobTitle],
    }));

    if (!formDataRef.current[jobTitle]) {
      formDataRef.current[jobTitle] = getDefaultFormData();
    }
  };

  const handleSubmit = async (jobTitle: string) => {
    const data = formDataRef.current[jobTitle];
    if (
      !data.firstName ||
      !data.lastName ||
      !data.mobile ||
      !data.email ||
      !data.resume
    ) {
      alert("Please fill in all fields and upload your resume.");
      return;
    }

    setLoadingJobs((prev) => ({ ...prev, [jobTitle]: true }));

    try {
      const formData = new FormData();
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("mobile", data.mobile);
      formData.append("resume", data.resume);
      formData.append("jobTitle", jobTitle);

      const response = await fetch("http://localhost:5000/apply", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowSuccess(true);
        setShowForm((prev) => ({ ...prev, [jobTitle]: false }));
        formDataRef.current[jobTitle] = getDefaultFormData();
      } else {
        alert("Failed to submit application.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Something went wrong.");
    } finally {
      setLoadingJobs((prev) => ({ ...prev, [jobTitle]: false }));
    }
  };

  const inputStyles =
    "border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full transition";

  const JobCard = ({
    title,
    experience,
    location,
  }: {
    title: string;
    experience: string;
    location: string;
  }) => {
    const form = formDataRef.current[title] || getDefaultFormData();

    return (
      <li className="border-b pb-4 last:pb-0 last:border-none">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-600">
          Experience: {experience} | Location: {location}
        </p>

        <button
          onClick={() => toggleForm(title)}
          className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
        >
          {showForm[title] ? "Close" : "Apply Now"}
        </button>

        {showForm[title] && (
          <form className="mt-4 space-y-3">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                defaultValue={form.firstName}
                onChange={(e) =>
                  handleInputChange(title, "firstName", e.target.value)
                }
                className={inputStyles}
              />
              <input
                type="text"
                placeholder="Last Name"
                defaultValue={form.lastName}
                onChange={(e) =>
                  handleInputChange(title, "lastName", e.target.value)
                }
                className={inputStyles}
              />
            </div>
            <input
              type="text"
              placeholder="Mobile"
              defaultValue={form.mobile}
              onChange={(e) =>
                handleInputChange(title, "mobile", e.target.value)
              }
              className={inputStyles}
            />
            <input
              type="email"
              placeholder="Email"
              defaultValue={form.email}
              onChange={(e) =>
                handleInputChange(title, "email", e.target.value)
              }
              className={inputStyles}
            />
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) =>
                handleInputChange(title, "resume", e.target.files?.[0] || null)
              }
              className={`${inputStyles} file:mr-3 file:py-1 file:px-3 file:border-0 file:bg-blue-600 file:text-white file:rounded`}
            />
            <button
              type="button"
              onClick={() => handleSubmit(title)}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm transition flex items-center justify-center gap-2 disabled:opacity-50"
              disabled={loadingJobs[title]}
            >
              {loadingJobs[title] ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
        )}

        {form.resume && (
          <p className="text-sm text-green-600 mt-1">
            Uploaded: {form.resume.name}
          </p>
        )}
      </li>
    );
  };

  return (
    <div className="px-6 md:px-20 bg-gray-50 pt-6 pb-10 flex flex-col relative">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Join Our Team</h1>
      <p className="mb-4 text-base md:text-lg">
        At KRCS, we believe in building a culture of innovation, collaboration,
        and continuous learning. We're always looking for passionate individuals
        who are ready to grow with us.
      </p>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Current Openings
        </h2>
        <ul className="space-y-4">
          <JobCard
            title="Business Development Executive"
            experience="1-3 years"
            location="Gurgaon"
          />
          <JobCard
            title="Full Stack Developer"
            experience="2-4 years"
            location="Remote"
          />
        </ul>
      </div>

      <p className="text-center text-gray-700 mt-6">
        Apply here or send your resume to{" "}
        <a
          href="mailto:hr@krcs.in?subject=Job%20Application"
          className="text-blue-600 underline"
        >
          hr@krcs.in
        </a>
      </p>

      {showSuccess && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50 text-sm">
          ✅ You have applied successfully!
        </div>
      )}
    </div>
  );
};

export default Career;
