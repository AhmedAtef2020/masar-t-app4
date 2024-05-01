import { profileData, categories } from "../components/ProfileData"

import React, { useState } from 'react';

export default function Profile() {
    const [Category, setCategory] = useState(null);

    const handleClick = (category) => {
        setCategory(category !== 'ShowAll' && category);
    };

    const filterProfileData = Category ?
        profileData.filter(item => item.category === Category) :
        profileData;

    return (
        <div className="container mt-4">
            <h3 className="c-darkOrange col-12">من أعمالنا</h3>
            <div className="d-flex flex-wrap justify-content-between">
                <ul className="list-group col-3 col-md-2 pt-2 sticky-top h-100">
                    <li className={`list-group-item list-group-item-action ps-2 bg-light-gray`} onClick={() => handleClick('ShowAll')}>
                        عرض الكل
                    </li>
                    {categories.map((category, index) => (
                        <li key={index} className={`list-group-item list-group-item-action ps-2 ${Category === category ? 'active' : ''}`} onClick={() => handleClick(category)}>
                            {category}
                        </li>
                    ))}
                </ul>
                <div className="col-8 col-md-9 pt-1">
                    {filterProfileData.map((item, index) => (
                        <img
                            key={index}
                            src={item.imgSrc}
                            alt={item.imgAlt}
                            className="rounded-4 col-12 col-md-4 p-1" />
                    ))}
                </div>
            </div>
        </div>
    );
}






// export default function profile() {
//     return (
//         <div className="container mt-4">
//             <h3 className="c-darkOrange col-12">من أعمالنا</h3>
//             <div className="d-flex flex-wrap justify-content-between">
//                 <div className="list-group col-3 col-md-2 pt-2 sticky-top h-100">
//                     {categories.map((category, index) => (
//                         <a href="#"
//                             key={index} className="list-group-item list-group-item-action ps-2">
//                             {category}
//                         </a>
//                     ))}
//                 </div>
//                 <div className="col-8 col-md-9 pt-1">
//                     {profileData.map((item, index) => (
//                         <img
//                             key={index}
//                             src={item.imgSrc}
//                             alt={item.imgAlt}
//                             className="rounded-4 col-12 col-md-4 p-1" />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }


// {
//     SideBar.map((items, index) => (
//         <div
//             key={index}
//             className="list-group col-3 col-md-2 pt-2 sticky-top h-100">
//             {items.lists.map((list, index) => (
//                 <a href="#" key={index} className="list-group-item list-group-item-action ps-2">
//                     {list}
//                 </a>
//             ))}
//         </div>
//     ))
// }
