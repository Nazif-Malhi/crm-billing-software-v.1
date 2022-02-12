import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as HiIcons from "react-icons/hi";
import * as Io5Icons from "react-icons/io5";
import * as GiIcons from "react-icons/gi";

const styleOfSearchBar= {
    color:"white",
    fontSize:"1.3em"
}

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillDashboard/>
    },
    {
        title: 'Inventory',
        path: '/dashboard',
        icon: <MdIcons.MdInventory2/>,
        iconClosed:<RiIcons.RiArrowLeftSLine/>,
        iconOpen:<RiIcons.RiArrowDownSLine/>,
        subNav: [
            {
                title: 'Category',
                path: '/inventory/category',
                icon: <BiIcons.BiCategoryAlt/>
            },
            {
                title: 'Product',
                path: '/inventory/product',
                icon: <MdIcons.MdProductionQuantityLimits/>
            },
            {
                title: 'Adjustment',
                path: '/inventory/adjustment',
                icon: <HiIcons.HiAdjustments/>
            },
            {
                title: 'Barcode',
                path: '/inventory/barcode',
                icon: <IoIcons.IoMdBarcode/>
            },
            {
                title: 'Stock',
                path: '/inventory/stock',
                icon: <AiIcons.AiOutlineStock/>
            }
        ]
    },
    {
        title: 'Purchase',
        path: '/dashboard',
        icon: <Io5Icons.IoCardSharp/>,
        iconClosed:<RiIcons.RiArrowLeftSLine/>,
        iconOpen:<RiIcons.RiArrowDownSLine/>,
        subNav: [
            {
                title: 'Add Purchase',
                path: '/purchase/addpurchase',
                icon: <AiIcons.AiOutlineAppstoreAdd/>
            },
            {
                title: 'Purchase List',
                path: '/purchase/purchaselist',
                icon: <AiIcons.AiOutlineUnorderedList/>
            }
           
        ]
    },
    {
        title: 'Expense',
        path: '/dashboard',
        icon: <GiIcons.GiExpense/>,
        iconClosed:<RiIcons.RiArrowLeftSLine/>,
        iconOpen:<RiIcons.RiArrowDownSLine/>,
        subNav: [
            {
                title: 'Category',
                path: '/expense/addcategory',
                icon: <MdIcons.MdOutlineNoteAdd/>
            },
            {
                title: 'Add Expense',
                path: '/expense/addexpense',
                icon: <GiIcons.GiPayMoney/>
            }
           
        ]
    },
    {
        title: 'Quotation',
        path: '/dashboard',
        icon: <RiIcons.RiFile3Fill/>,
        iconClosed:<RiIcons.RiArrowLeftSLine/>,
        iconOpen:<RiIcons.RiArrowDownSLine/>,
        subNav: [
            {
                title: 'Add Quotation',
                path: '/quotation/addquotation',
                icon: <RiIcons.RiFileAddFill/>
            },
            {
                title: 'Quotation List',
                path: '/quotation/quotationlist',
                icon: <RiIcons.RiListCheck2/>
            }
           
        ]
    }
]