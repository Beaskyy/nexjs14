import Card from "@/components/card";
import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <Card>
      <div>Notifications</div>
      <br />
      <br />
      <div>
        <Link href="/complex-dashboard/archive">Archived</Link>
      </div>
    </Card>
  );
};

export default Notifications;
