import React, { forwardRef } from "react";
import Popover from "react-bootstrap/Popover";

const TitlePopover = forwardRef((props, ref) => {
    return (
      <Popover ref={ref} id="popover-basic">
        <Popover.Content>Sortuje według {props.name}</Popover.Content>
      </Popover>
    );
})
export default TitlePopover;