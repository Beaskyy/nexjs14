import Notifications from "@/components/notifications";
import RevenueMetrics from "@/components/revenue-metrics";
import UserAnalytics from "@/components/user-analytics";
import React from "react";

const DashboardLayout = ({
  children,
  users,
  notifications,
  revenue,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}) => {
  return (
    <>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
