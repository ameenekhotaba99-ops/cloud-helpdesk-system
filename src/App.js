import { useState } from "react";
import "./App.css";

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

          <form>
            <label>Issue Title</label>
            <input type="text" placeholder="Example: Internet is not working" />

            <label>Category</label>
            <select>
              <option>Network</option>
              <option>Electricity</option>
              <option>Water Leak</option>
              <option>Air Conditioning</option>
              <option>Other</option>
            </select>

            <label>Priority</label>
            <select>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <label>Description</label>
            <textarea placeholder="Describe the problem..." />

            <label>Upload Image</label>
            <input type="file" />

            <button type="submit">Submit Ticket</button>
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