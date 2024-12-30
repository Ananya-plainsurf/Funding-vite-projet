import React from "react";
import popoverStyle from "./popover.module.css";
import { filterType } from "@utilities/constants";
import * as Popover from "@radix-ui/react-popover";
import styles from "./popover.module.css";

const PopOver = ({ children, handleFilter, type }) => {
  return (
    <Popover.Root>
      <Popover.Trigger className={styles.trigger}>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles.content}>
          <ul>
            {Object.entries(filterType).map((item, idx) => (
              <li
                key={idx}
                onClick={() =>
                  handleFilter({
                    type,
                    value: item[0],
                  })
                }
                className={popoverStyle.popoverListItem}
              >
                {item[1]}
              </li>
            ))}
          </ul>

          <Popover.Arrow className={styles.arrow} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default PopOver;
