import React from 'react'
import { Document, Page} from 'react-pdf'


export default function CV (props) {
  return(
      <div id="cv-container">
        <div id="cv-container-inner">
          <Document file="../../public/Alex_Ballo_Resume.pdf">
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
  )
}





