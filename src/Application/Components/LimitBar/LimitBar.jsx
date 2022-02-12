import React from 'react'
import './LimitBar.css'
const LimitBar = () => {
    return (
        <div class="container limitbar_con">
            <div class="row limitbar_row">
                <div class="col right_col">
                    <h6>TODAY</h6>
                </div>
                <div class="col mid_col">
                    LAST WEEK
                </div>
                <div class="col mid_col">
                    LAST MONTH
                </div>
                <div class="col right_col">
                    THIS YEAR
                </div>
            </div>
        </div>
    )
}

export default LimitBar
