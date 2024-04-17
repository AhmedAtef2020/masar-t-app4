import BooksSlider from "./BooksSlider"


export default function LatestBooks() {

    return (
        <div className="container py-4 mt-4">
            <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex justify-content-between  flex-column">
                    <h3>أحدث الكتب</h3>
                    <p>التي لدينا في منصة الكتب… قم بزيارة منصة الكتب </p>
                </div>
                <button className="btn-masar btn-light-blue">المزيد</button>
            </div>
            <BooksSlider />

        </div>
    )
}
