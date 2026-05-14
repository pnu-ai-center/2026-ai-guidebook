import React from "react";

import PdfButton from "../components/PdfButton";

export default function Root({ children }) {
  return (
    <>
      {children}

      <PdfButton />
    </>
  );
}
