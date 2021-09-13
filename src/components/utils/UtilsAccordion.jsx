import React from "react";
// Material UI Component
import {
  AccordionSummary,
  Accordion,
  AccordionDetails,
  Typography,
} from "@material-ui/core";

const UtilsAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary>
          <Typography>Lorem Input</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Cillum deserunt nulla consectetur sit est. Velit duis magna qui in
            adipisicing reprehenderit quis duis. Veniam reprehenderit dolor ex
            labore. Pariatur magna enim dolore elit sunt veniam dolor amet sunt.
            Cupidatat non cupidatat incididunt duis dolor mollit adipisicing
            Lorem eu duis laborum sunt. Cupidatat tempor exercitation
            reprehenderit aliquip fugiat laborum eiusmod enim. Aliquip sit
            proident aute consectetur labore et duis Lorem ipsum enim quis
            ullamco.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default UtilsAccordion;
