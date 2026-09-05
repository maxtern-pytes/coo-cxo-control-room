# Offcomfrt — COO / CXO Control Room Dashboard

An executive control room dashboard tailored for a leader simultaneously managing **Operations (COO)** (Supply Chain, Warehouse & Fulfillment, Logistics & Carriers, Quality Assurance) and **Customer Experience (CXO)** (Support Operations, Post-Purchase Delight, Escalations, CSAT/NPS, Returns).

---

## Features

- **Profile & Brand Customization**: Click **"Edit Profile"** in the topbar or the Brand header in the sidebar to change your name, executive role title, company/brand name, and capacity.
- **Team Management**: Add new team members, edit existing members' names, titles, departments, and managers, or remove members in the **Team** view.
- **14 Core Executive Views**:
  1. **Home**: Executive priority, top P0/P1 tasks, real-time KPI strip, friction matrix, today's standups, team capacity, and at-risk programs.
  2. **My Day**: Personal execution queue.
  3. **Tasks**: Master task database with multi-field filtering.
  4. **Team**: At a Glance, Capacity Planner (utilization hours), Directory, Org Structure, and Shifts.
  5. **Projects**: 6 core strategic programs with milestone tracks and risk logs.
  6. **Meetings & 1:1s**: Daily Ops Standup, Carrier SLA Reviews, and 1:1s with 1-click action item to task conversion.
  7. **Delegation & Follow-ups**: Delegated work tracking, Waiting Room, and Carrier/Supplier follow-ups.
  8. **Blocked & Stale**: Monitor for SLA breaches, stalled tasks, and dependency heatmap.
  9. **Approvals**: Executive sign-offs for carrier contracts, warehouse capex, factory quality waivers, and customer claims.
  10. **Deadlines & Calendar**: Grouped chronological queues + full interactive monthly calendar.
  11. **Goals**: 3-tier strategy tree linking strategic objectives to frontline deliverables.
  12. **SOPs**: Operational SOP library.
  13. **Insights**: Weekly Execution Review, Scorecard, Systemic Bottlenecks, Audit Log, and 1-click text report exporter.
  14. **AI Assistant**: Grounded AI query interface analyzing the live JSON state.
- **Local Persistence**: Works offline and persists all changes in browser storage automatically.

---

## How to Push to GitHub

1. Open your terminal in this project folder:
   ```bash
   cd "/Users/apple/Library/CloudStorage/OneDrive-SharedLibraries-ONEDRIVE/CXO:COO Dboard"
   ```

2. Create a new repository on [GitHub](https://github.com/new) (e.g. `coo-cxo-control-room`).

3. Link and push your code to your GitHub repository:
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
   git branch -M main
   git push -u origin main
   ```

---

## How to Deploy on Render (Free)

### Option A: Static Site (Recommended & Fastest)
1. Log in to [Render](https://dashboard.render.com/).
2. Click **New +** &rarr; **Static Site**.
3. Connect your GitHub repository.
4. Set the settings:
   - **Name**: `coo-cxo-control-room`
   - **Branch**: `main`
   - **Build Command**: *(leave empty)*
   - **Publish Directory**: `.` *(or `./`)*
5. Click **Create Static Site**.
6. Render will build and give you a live URL (e.g. `https://coo-cxo-control-room.onrender.com`) in seconds!

### Option B: Web Service (Node.js)
1. Log in to [Render](https://dashboard.render.com/).
2. Click **New +** &rarr; **Web Service**.
3. Connect your GitHub repository.
4. Render will auto-detect Node.js:
   - **Build Command**: `npm install` (or leave empty)
   - **Start Command**: `node server.js`
5. Click **Create Web Service**.
