import { Tooltip } from "react-bootstrap";

export const renderTooltip = ({ message, ...props }) => (
    <Tooltip id="button-tooltip" {...props}>
      {message}
    </Tooltip>
  );