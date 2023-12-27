import Card from "@/components/card";
import Link from "next/link";
import React from "react";

const ArchivedNotifications = () => {
  return (
    <Card>
      <div>Archived Notifications</div>
      <br />
      <br />
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
};

export default ArchivedNotifications;
