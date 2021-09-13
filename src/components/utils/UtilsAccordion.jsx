import React from "react";
// Material UI Component
import {
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import {ExpandMore} from '@material-ui/icons'

const UtilsAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Lorem Input</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Cillum deserunt nulla consectetur sit est. Velit duis magna qui in
            adipisicing reprehenderit quis duis. Veniam reprehenderit dolor ex
            labore.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default UtilsAccordion;
