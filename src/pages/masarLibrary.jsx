import { BooksData, booksCategories } from "../components/BooksData"
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function Profile() {
    const [selectedCategory, setSelectedCategory] = useState('ShowAll');

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredBooksData = selectedCategory === 'ShowAll' ? BooksData : BooksData.filter(item => item.bookCategory === selectedCategory);


    return (
        <div className="container mt-4">
            <h3 className="c-darkOrange col-12">مكتبة مسار</h3>
            <div className="d-flex flex-wrap justify-content-between">
                <select className="form-select d-md-none" value={selectedCategory} onChange={handleChange}>
                    <option value="ShowAll">كل الكتب</option>
                    {booksCategories.map((category, index) => (
                        <option key={index} value={category} >
                            {category}
                        </option>
                    ))}
                </select>
                <ul className="d-none d-md-block list-group col-6 col-md-3 pt-2 h-100">
                    <li className={`list-group-item list-group-item-action ps-2 bg-light-gray`} onClick={() => setSelectedCategory('ShowAll')}>
                        كل الكتب
                    </li>
                    {booksCategories.map((category, index) => (
                        <li key={index} className={`list-group-item list-group-item-action ps-2 ${selectedCategory === category ? 'active' : ''}`} onClick={() => setSelectedCategory(category)}>
                            {category}
                        </li>
                    ))}
                </ul>
                <div className="d-flex flex-wrap align-content-start col-12 col-md-9 pt-1 ">
                    {filteredBooksData.map((item, index) => (
                        <div key={index} className="book-container col-12 col-sm-4 col-lg-3 col-xxl-2 my-2">
                            <Link className="text-decoration-none text-black"
                                to={item.link}>
                                <img
                                    key={index}
                                    src={item.img}
                                    alt={item.imgAlt}
                                    className="rounded-2" />
                                <div className="book-title pt-1">
                                    <p>{item.title}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



// <ul className="d-none d-md-block list-group col-6 col-md-3 pt-2 sticky-top h-100">
//     <li className={`list-group-item list-group-item-action ps-2 bg-light-gray`} onClick={() => handleClick('ShowAll')}>
//         كل الكتب
//     </li>
//     {booksCategories.map((category, index) => (
//         <li key={index} className={`list-group-item list-group-item-action ps-2 ${Category === category ? 'active' : ''}`} onClick={() => handleClick(category)}>
//             {category}
//         </li>
//     ))}
// </ul>