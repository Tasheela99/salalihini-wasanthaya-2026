import React from "react";
import styles from "./SectionLabel.module.css";
interface SectionLabelProps {
  label: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ label }) => {
  return (
    <div className={styles.headingWrap}>
      <div className={styles.sectionLabel}>{label}</div>
    </div>
  );
};

export default SectionLabel;