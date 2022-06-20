import React from "react";
import styles from "./Parameter.module.css";
import Markdown from "./Markdown";

export const Parameter = ({ name, type, desc }) => {
  return (
    <div className={styles.parameter}>
      <div className={styles.parameterName}>
        <strong>
          <Markdown
            md={
              (name ? name : "") +
                (name && type ? ": " : "") +
                (type ? type : "") ?? ""
            }
          />
        </strong>
      </div>
      <div className={styles.parameterContent}>
        <Markdown className={styles.content} md={desc} />
      </div>
    </div>
  );
};

export default Parameter;
