import React from 'react'
import MissionImg from "../images/Mission.png";
const Mission = () => {
    return (
        <div className="container my-5 mission-section content">
        <div className="d-flex justify-content-center row align-items-center">
            <div className="image col-lg-6"><img src={MissionImg} alt="" /></div>
            <div className="text col-lg-6">
            <h2>مهمتنا</h2>
            <p>
                في رحلة تطورك المهنية ستحاول النورس جاهـدًا أن تكــون داعمــك الأول؛
                وذلك عبــر تقديم أفضــل محتــوى علمــي وعملــي، وتدعيمــــه
                بالاعتمــادات والاختبـــارات الـدوليــة المتخصصـــة، وأيضًا تقديـم
                بالاعتمــادات والاختبـــارات الـدوليــة المتخصصـــة، وأيضًا تقديـم
                بالاعتمــادات والاختبـــارات الـدوليــة المتخصصـــة، وأيضًا تقديـم
            </p>
            </div>
        </div>
        </div>
    )
}

export default Mission
