import { lazy, Suspense } from "react";
import Layout from "./features/predictions/Components/Layout/Layout";
import { Routes, Route } from "react-router";

const PredictionDashboard = lazy(() => import("./features/predictions/Pages/PredictionDashboard"));

const CallCodeBifurcation = lazy(() => import("./features/Call_code_page/pages/CallCodeBifurcation"));

const ServiceDashboard = lazy(() => import("./features/service_request/Pages/ServiceDashboard"));

const IncidentDashboard = lazy(() => import("./features/incident_request/pages/IncidentDashboard"));

const FTE_Analysis = lazy(() => import("./features/FTE_Analysis/Pages/FTE_Analysis"));

const EngineersDashboard = lazy(() => import("./features/Engineers/Pages/EngineersDashboard"));

const AddExcel = lazy(() => import("./features/predictions/Pages/AddExcel"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div role="status">Loading dashboard...</div>}>
        <Routes>

        <Route
          path="/"
          element={<PredictionDashboard />}
        />

        <Route
          path="/predictions"
          element={<PredictionDashboard />}
        />

        <Route
          path="/bifurcation"
          element={<CallCodeBifurcation />}
        />

        <Route
          path="/incident"
          element={<IncidentDashboard />}
        />

        <Route
          path="/service"
          element={<ServiceDashboard />}
        />

        <Route
          path="/fte-analysis"
          element={<FTE_Analysis />}
        />

        <Route
          path="/engineers"
          element={<EngineersDashboard />}
        />

        {/* New Add Excel Page */}
        <Route
          path="/add-excel"
          element={<AddExcel />}
        />

        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;