# Offcomfrt — COO / CXO Control Room Dashboard

An executive control room dashboard tailored for a leader simultaneously managing **Operations (COO)** (Supply Chain, Warehouse & Fulfillment, Logistics & Carriers, Quality Assurance) and **Customer Experience (CXO)** (Support Operations, Post-Purchase Delight, Escalations, CSAT/NPS, Returns).

---

## Key Features

- **AI Cross-Platform Auditor & Reconciler (New!)**:
  - Automatically evaluates, audits, and cross-references reports across **Shopify**, **Delhivery One**, **Shiprocket**, and your **Custom Return & Exchange Panel**.
  - Detects fulfillment handover delays (Shopify fulfilled vs courier manifest scanned).
  - Flags carrier fake Non-Delivery Reports (NDRs) by cross-referencing customer WhatsApp tickets.
  - Catches courier volumetric weight slab overcharges and generates dispute evidence.
  - Discovers reverse logistics inwarding backlogs in warehouse inspection bays.
  - **1-Click Actions**: Convert any discrepancy into an assigned operational task or draft a formal dispute/demand letter.
  - **Custom Report Evaluator**: Paste or upload raw CSV/JSON export lines from any platform to get instant AI discrepancy analysis.
- **Google Drive as a Database (Cloud Sync)**:
  - Connect your personal Google Drive to store, sync, and persist your entire dashboard state (`coo_cxo_database.json`) automatically across all devices.
  - Free, private, and zero Google Cloud Console / billing setup required.
- **Profile & Brand Customization**:
  - Click **"Edit Profile"** in the topbar or the Brand header in the sidebar to customize your name, executive title, company/brand name, and working hours.
- **Team Management**:
  - Add new team members, edit existing members' names, titles, departments, and reporting managers, or remove members in the **Team** view.
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
  14. **AI Assistant**: Grounded AI query interface analyzing the live JSON state & cross-platform manifests.
- **Local Persistence & Offline First**: Works offline and persists all changes in browser storage automatically when disconnected.

---

## Connecting Google Drive as Your Database (2 Minutes)

1. Open your dashboard and click the **"☁️ Drive DB"** button in the top navigation bar.
2. In the modal, copy the provided Google Apps Script code (also available in [`google-drive-database-script.gs`](google-drive-database-script.gs)).
3. Go to [script.google.com](https://script.google.com/home/start) (or in Google Drive: click **New + &rarr; More &rarr; Google Apps Script**).
4. Name the project `Offcomfrt Database`, erase the default code, and paste the script.
5. Click **Deploy** (top right) &rarr; **New deployment**:
   - Click the ⚙️ icon &rarr; select **Web app**.
   - Set **Execute as**: `Me`
   - Set **Who has access**: `Anyone`
6. Click **Deploy**, authorize permissions with your Google account, and copy the **Web app URL**.
7. Paste your Web App URL into the dashboard modal and click **"Save & Connect"**.

---

## Deployment on Render (Free)

### Option A: Static Site (Recommended & Fastest)
1. Log in to [Render](https://dashboard.render.com/).
2. Click **New +** &rarr; **Static Site**.
3. Select your GitHub repository: `maxtern-pytes/coo-cxo-control-room`.
4. Leave settings as default:
   - **Build Command**: *(empty)*
   - **Publish Directory**: `.` *(or `./`)*
5. Click **Create Static Site**.
