import React , {useState , useCallback}from "react";
import AppContainer from "./Application/Components/SignInSingUp/AppContainer";
import './App.css'
import CombineNavbar from "./Application/Components/Navbar/CombineNavbar/CombineNavbar";
import Dashboard from "./Application/Pages/Dashboard/Dashboard";
import Category from "./Application/Pages/Inventory/Category/Category";
import Product from "./Application/Pages/Inventory/Product/Product";
import Adjustment from "./Application/Pages/Inventory/Adjustment/Adjustment";
import Barcode from "./Application/Pages/Inventory/Barcode/Barcode";
import Stock from "./Application/Pages/Inventory/Stock/Stock";
import AddPurchase from "./Application/Pages/Purchase/AddPurchase/AddPurchase";
import PurchaseList from "./Application/Pages/Purchase/PurchaseList/PurchaseList";
import AddExpense from "./Application/Pages/Expense/AddExpense/AddExpense";
import ExpenseCategory from "./Application/Pages/Expense/ExpenseCategory/ExpenseCategory";
import AddQuotation from "./Application/Pages/Quotation/AddQuotation/AddQuotation";
import QuotationList from "./Application/Pages/Quotation/QuotationList/QuotationList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





function App() {
  const [inactive, setInactive] = useState(false);
  const [activePos, setActivePos] = useState(false);

  return (
      
    <div className="App">
      
      {/* <Router>
        <AppContainer/>
      </Router> */}
      
        <Router>
        <CombineNavbar
            onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
            }}
          />
          
        <div className={`conatinerOfApp ${inactive ? "inactiveconatinerOfApp" : ""}`}>
        <Routes>

            {/* Dashboard Route with the the path of URL  */}
            <Route  path={"/dashboard"} element={<Dashboard/>}/>

          {/* Inventory Route with the the path of URL  */}

            <Route path={"/inventory/category"} element = {<Category/>}/>
            <Route path={"/inventory/product"} element = {<Product/>}/>
            <Route path={"/inventory/adjustment"} element = {<Adjustment/>}/>
            <Route path={"/inventory/barcode"} element = {<Barcode/>}/>
            <Route path={"/inventory/stock"} element = {<Stock/>}/>

            {/* Purchase Route with the the path of URL  */}

            <Route path= {"/purchase/addpurchase"} element = {<AddPurchase/>}/>
            <Route path= {"/purchase/purchaselist"} element = {<PurchaseList/>}/>

          {/* Expense Route with the the path of URL  */}

          <Route path= {"/expense/addexpense"} element = {<AddExpense/>}/>
          <Route path= {"/expense/addcategory"} element = {<ExpenseCategory/>}/>

          {/* Quotation Route with the the path of URL  */}

          <Route path= {"/quotation/addquotation"} element = {<AddQuotation/>}/>
          <Route path= {"/quotation/quotationlist"} element = {<QuotationList/>}/>

          {/* <Route path= {"/POS"} element = {<POS/>}/> */}
         

        </Routes>
        </div>
         
      </Router>
     
    </div>
      
  );
}

export default App;
