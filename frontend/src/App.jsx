import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  BarChart3,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  ChevronDown,
} from "lucide-react";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Departments", icon: Building2 },
    { name: "Users", icon: Users },
    { name: "Requests", icon: FileText },
    { name: "Analytics", icon: BarChart3 },
  ];

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="logo-section">
          <div className="logo-icon">G</div>

          {sidebarOpen && (
            <div>
              <h2>GovMesh</h2>
              <span>Government Network</span>
            </div>
          )}

          <button
            className="mobile-close"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="navigation">
          <p className="nav-title">
            {sidebarOpen ? "MAIN MENU" : ""}
          </p>

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`nav-item ${
                  activePage === item.name ? "active" : ""
                }`}
                onClick={() => setActivePage(item.name)}
              >
                <Icon size={20} />

                {sidebarOpen && <span>{item.name}</span>}
              </button>
            );
          })}

          <p className="nav-title settings-title">
            {sidebarOpen ? "SYSTEM" : ""}
          </p>

          <button className="nav-item">
            <Settings size={20} />
            {sidebarOpen && <span>Settings</span>}
          </button>
        </nav>

        {sidebarOpen && (
          <div className="sidebar-bottom">
            <div className="admin-profile">
              <div className="avatar">A</div>

              <div className="admin-info">
                <strong>Administrator</strong>
                <span>System Admin</span>
              </div>

              <ChevronDown size={16} />
            </div>

            <button className="logout">
              <LogOut size={18} />
              Logout
            </button>
          </div>
        )}
      </aside>

      {/* Main content */}
      <main className="main-content">
        {/* Top bar */}
        <header className="topbar">
          <div className="topbar-left">
            <button
              className="menu-button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu size={22} />
            </button>

            <div className="breadcrumb">
              <span>GovMesh</span>
              <span>/</span>
              <strong>{activePage}</strong>
            </div>
          </div>

          <div className="topbar-right">
            <div className="search-box">
              <Search size={18} />
              <input placeholder="Search..." />
            </div>

            <button className="notification">
              <Bell size={21} />
              <span className="notification-dot"></span>
            </button>
          </div>
        </header>

        {/* Dashboard */}
        <section className="content">
          <div className="page-heading">
            <div>
              <h1>{activePage}</h1>
              <p>
                Welcome back. Here's an overview of the GovMesh system.
              </p>
            </div>

            <div className="status">
              <span className="status-dot"></span>
              All systems operational
            </div>
          </div>

          {/* Statistics */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon departments">
                <Building2 size={24} />
              </div>

              <div>
                <span>Total Departments</span>
                <h2>24</h2>
                <small>Government departments</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon users">
                <Users size={24} />
              </div>

              <div>
                <span>Active Users</span>
                <h2>1,248</h2>
                <small>Registered officials</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon requests">
                <FileText size={24} />
              </div>

              <div>
                <span>Pending Requests</span>
                <h2>86</h2>
                <small>Awaiting processing</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon analytics">
                <BarChart3 size={24} />
              </div>

              <div>
                <span>API Connections</span>
                <h2>42</h2>
                <small>Active integrations</small>
              </div>
            </div>
          </div>

          {/* Main dashboard cards */}
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <div className="card-header">
                <div>
                  <h3>Department Activity</h3>
                  <p>Recent activity across departments</p>
                </div>

                <button className="view-button">View all</button>
              </div>

              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon">
                    <Building2 size={18} />
                  </div>

                  <div className="activity-text">
                    <strong>Health Department</strong>
                    <span>Updated citizen service API</span>
                  </div>

                  <span className="time">5 min ago</span>
                </div>

                <div className="activity-item">
                  <div className="activity-icon">
                    <Users size={18} />
                  </div>

                  <div className="activity-text">
                    <strong>Education Department</strong>
                    <span>Added 12 new users</span>
                  </div>

                  <span className="time">18 min ago</span>
                </div>

                <div className="activity-item">
                  <div className="activity-icon">
                    <FileText size={18} />
                  </div>

                  <div className="activity-text">
                    <strong>Transport Department</strong>
                    <span>New request submitted</span>
                  </div>

                  <span className="time">32 min ago</span>
                </div>

                <div className="activity-item">
                  <div className="activity-icon">
                    <BarChart3 size={18} />
                  </div>

                  <div className="activity-text">
                    <strong>Revenue Department</strong>
                    <span>Monthly analytics generated</span>
                  </div>

                  <span className="time">1 hr ago</span>
                </div>
              </div>
            </div>

            <div className="dashboard-card">
              <div className="card-header">
                <div>
                  <h3>System Status</h3>
                  <p>Current infrastructure status</p>
                </div>
              </div>

              <div className="system-status">
                <div className="system-row">
                  <div>
                    <strong>API Gateway</strong>
                    <span>All services connected</span>
                  </div>

                  <span className="online">Online</span>
                </div>

                <div className="system-row">
                  <div>
                    <strong>Database</strong>
                    <span>MongoDB connection active</span>
                  </div>

                  <span className="online">Online</span>
                </div>

                <div className="system-row">
                  <div>
                    <strong>Authentication</strong>
                    <span>JWT authentication service</span>
                  </div>

                  <span className="online">Online</span>
                </div>

                <div className="system-row">
                  <div>
                    <strong>Department APIs</strong>
                    <span>42 integrations active</span>
                  </div>

                  <span className="online">Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="quick-section">
            <h3>Quick Actions</h3>

            <div className="quick-grid">
              <button className="quick-card">
                <Building2 size={22} />
                <span>Add Department</span>
              </button>

              <button className="quick-card">
                <Users size={22} />
                <span>Add User</span>
              </button>

              <button className="quick-card">
                <FileText size={22} />
                <span>View Requests</span>
              </button>

              <button className="quick-card">
                <BarChart3 size={22} />
                <span>View Analytics</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;