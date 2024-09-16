import React from "react";
import clsx from "clsx";

import styles from "./Schedule.module.scss";

interface ScheduleProps {
  className?: string;
}

const Schedule: React.FC<ScheduleProps> = ({ className }) => {
  return <div className={clsx(styles.schedule, className)}>Schedule</div>;
};

export default Schedule;
