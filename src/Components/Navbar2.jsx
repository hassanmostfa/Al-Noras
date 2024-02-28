import React from 'react'
import { Link } from 'react-router-dom'

const Navbar2 = () => {
    return (
        <div>
        <div className="navbar1 courses-nav-container col row justify-content-around py-3 px-5 mt-4">
            <div className="links col-sm-6 d-flex justify-content-start gap-3 aboveStyledLinks">
                <Link className="styledLink">انضم كمحاضر</Link>
                <Link className="styledLink">الخطة التدريبية</Link>
            </div>
            <div className="links col-sm-6 d-flex justify-content-end gap-3">
                <Link>الاستعلام عن الشهادات</Link>
                <span>/</span>
                <Link>تسجيل دخول</Link>
                <span>/</span>
                <Link>مستخدم جديد</Link>
            </div>
        </div>
        </div>
    )
}

export default Navbar2
