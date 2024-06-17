import React from "react";
import clsx from "clsx";

const activities = [
  { title: "Kegiatan 1", date: "2024-06-15" },
  { title: "Kegiatan 2", date: "2024-07-20" },
  { title: "Kegiatan 3", date: "2024-06-25" },
  { title: "Kegiatan 4", date: "2024-08-05" },
];

const getMonth = (date) => new Date(date).getMonth();
const currentMonth = new Date().getMonth();

function Schedule() {
  return (
    <div className="container mx-auto p-4 border-2 border-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {activities.map((activity, index) => {
          const activityMonth = getMonth(activity.date);
          const isActive = activityMonth === currentMonth;

          return (
            <div
              key={index}
              className={clsx(
                "border-2 p-4 rounded transition-transform transform",
                {
                  "bg-blue-200 scale-105": isActive,
                  "bg-gray-100": !isActive,
                }
              )}
            >
              <div className="font-bold mb-2">{activity.title}</div>
              <div className="text-sm">
                {new Date(activity.date).toLocaleDateString()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Schedule;
