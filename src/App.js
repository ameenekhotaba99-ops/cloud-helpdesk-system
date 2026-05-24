import { useState } from "react";
import "./App.css";

const API_URL = "https://xy54dxiqp3.execute-api.us-east-1.amazonaws.com/create-ticket";

function App() {
  const [page, setPage] = useState("client");

  return (
    <div className="page">
      <nav className="navbar">
        <h2>Cloud HelpDesk</h2>
        <div>
          <button onClick={() => setPage("client")}>Client Portal</button>
          <button onClick={() => setPage("admin")}>Admin Dashboard</button>
        </div>
      </nav>

      {page === "client" ? <ClientPortal /> : <AdminDashboard />}
    </div>
  );
}

function ClientPortal() {
  const [formData, setFormData] = useState({
    title: "",
    category: "Network",
    priority: "Low",
    description: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Sending ticket...");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Ticket created successfully!");
        setFormData({
          title: "",
          category: "Network",
          priority: "Low",
          description: ""
        });
      } else {
        setMessage("Error: " + data.message);
      }
    } catch (error) {
      setMessage("Connection error: " + error.message);
    }
  };

  return (
    <>
      <header className="hero">
        <div className="badge">CLIENT SERVICE PORTAL</div>
        <h1>Submit a Service Request</h1>
        <p>
          Open a new support ticket, describe the issue, upload an image,
          and track your request through the cloud.
        </p>
      </header>

      <main className="single-container">
        <section className="card form-card">
          <h2>Create New Ticket</h2>

          <form onSubmit={handleSubmit}>
            <label>Issue Title</label>
            <input
              name="title"
              type="text"
              placeholder="Example: Internet is not working"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option>Network</option>
              <option>Electricity</option>
              <option>Water Leak</option>
              <option>Air Conditioning</option>
              <option>Other</option>
            </select>

            <label>Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <label>Description</label>
            <textarea
              name="description"
              placeholder="Describe the problem..."
              value={formData.description}
              onChange={handleChange}
              required
            />

            <label>Upload Image</label>
            <input type="file" />

            <button type="submit">Submit Ticket</button>

            {message && <p className="message">{message}</p>}
          </form>
        </section>
      </main>
    </>
  );
}

function AdminDashboard() {
  return (
    <>
      <header className="hero">
        <div className="badge">ADMIN CONTROL PANEL</div>
        <h1>HelpDesk Management Dashboard</h1>
        <p>
          Monitor support tickets, review customer issues, update status,
          and manage service requests.
        </p>
      </header>

      <main className="admin-container">
        <section className="stats">
          <div className="stat-card">
            <h3>Open Tickets</h3>
            <p>12</p>
          </div>

          <div className="stat-card">
            <h3>In Progress</h3>
            <p>5</p>
          </div>

          <div className="stat-card">
            <h3>Closed</h3>
            <p>18</p>
          </div>
        </section>

        <section className="card">
          <h2>All Tickets</h2>

          <div className="ticket">
            <div>
              <h3>Air conditioner problem</h3>
              <p>Category: Air Conditioning | Priority: High</p>
            </div>
            <span className="status open">Open</span>
          </div>

          <div className="ticket">
            <div>
              <h3>Water leak</h3>
              <p>Category: Water Leak | Priority: Medium</p>
            </div>
            <span className="status progress">In Progress</span>
          </div>

          <div className="ticket">
            <div>
              <h3>Broken door lock</h3>
              <p>Category: Other | Priority: Low</p>
            </div>
            <span className="status closed">Closed</span>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;