import React from 'react'
// import { Document, Page } from 'react-pdf/dist/entry.webpack'
import { Document, Page} from 'react-pdf'

// require('../styles/cv.css')

export default function CV (props) {
  return(
      <div id="cv-container">
        <div id="cv-container-inner">
          <Document file="../../public/AlexBalloCV.pdf">
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
  )
}





 // <object height="900" width="600" data="../../public/AlexBalloCV.pdf"></object>
