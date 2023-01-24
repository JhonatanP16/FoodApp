import { ChevronRightRounded } from '@mui/icons-material'
import React from 'react'

const SubmenuContainer = ({name}) => {
  return (
    <div className="subMenuContainer">
        <h3>{name}</h3>
        <div className="viewAll">
            <p>View All</p>
            <i>
                <ChevronRightRounded/>
            </i>
        </div>
    </div>
  )
}

export default SubmenuContainer