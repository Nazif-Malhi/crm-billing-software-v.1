import React from 'react'
import LimitBar from '../../Components/LimitBar/LimitBar'
import SaleCard from '../../Components/Cards/TopCards/SaleCard'
import './Dashboard.css'
import LineChart from '../../Components/Charts/LineChart'
import BarChart from '../../Components/Charts/BarChart'
import PolarAreaChart from '../../Components/Charts/PolarAreaChart'
import PieChart from '../../Components/Charts/PieChart'
import DoughnetChart from '../../Components/Charts/DoughnetChart'
const Dashboard = () => {
    return (
        <>
        <div className="dasboard" style={{marginTop:50,marginBottom:50,marginRight:50,marginLeft:50}}>
            <div className="topHeader">
                <div className="welcomecon">
                    <h2>Welcome</h2>
                </div>
                <div className="limitbarcon">
                {/* <LimitBar/> */}
                </div>
            </div>
            <div className="bottomFooter">
                <div className="upper">
                    <SaleCard/>
                </div>
                <div className="seprator">

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                            <h4>CashFlow</h4>
                            <BarChart/>
                        </div>
                        <div className="col-sm-5">
                            <h4>This Month</h4>
                            <PolarAreaChart/>
                        </div>
                    </div>
                </div>
                <div className="seprator yearlyrep">
                    <h3>Yearly Report</h3>
                </div>
                <div className="footer">
                    <LineChart/>
                    <div className="seprator yearlyrep">

                    </div>
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <h4>Best Seller (Price)</h4>
                            <DoughnetChart/>
                        </div>
                        <div className="col-sm-2">
                            
                        </div>
                        <div className="col-sm-5">
                            <h4>Best Seller (QTY)</h4>
                            <PieChart/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Dashboard
