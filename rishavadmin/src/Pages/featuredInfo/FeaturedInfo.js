import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import React from 'react'
import "./featured.css";

const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className='featuredTitle'>Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,433</span>
                <span className="featuredMoneyRate">
                    -11.4 <ArrowDownward style={{fontSize:"1rem"}} className='featuredIconn'/>
                </span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
        </div>
        <div className="featuredItem">
            <span className='featuredTitle'>Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,155</span>
                <span className="featuredMoneyRate">
                    -1.4 <ArrowDownward style={{fontSize:"1rem"}} className='featuredIconn'/>
                </span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
        </div>
        <div className="featuredItem">
            <span className='featuredTitle'>Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,225</span>
                <span className="featuredMoneyRate">
                    +2.4 <ArrowUpward style={{fontSize:"1rem"}} className='featuredIconp'/>
                </span>
            </div>
            <span className="featuredSub">Compared to Last Month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo