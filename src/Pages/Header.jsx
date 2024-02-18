import React from 'react'
import headImg from '../images/Header.png' ;
const Header = () => {
    return (
        <div className="container my-5 head-section">
                <div className="d-flex justify-content-center row align-items-center" >
                <div className="image col-lg-6">
                <img src={headImg} alt="" />
                </div>
                <div className="text col-lg-6">
                <h2>وكالة</h2>
                <h3>تدريب وتسويق ودعايا واعلان</h3>
                <p>
                    في رحلة تطورك المهنية ستحاول النورس جاهـدًا أن تكــون داعمــك الأول؛
                    وذلك عبــر تقديم أفضــل محتــوى علمــي وعملــي، وتدعيمــــه
                    بالاعتمــادات والاختبـــارات الـدوليــة المتخصصـــة، وأيضًا تقديـم
                    كفاءات أصحـاب الخبـرة الــذين يجمعــون بيـــن العلــــوم الأكاديميـــة
                    والخبــرة العملية
                </p>
                </div>
            </div>
        </div>
    )
}

export default Header
