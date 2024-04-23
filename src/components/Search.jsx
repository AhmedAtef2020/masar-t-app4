export default function Search() {
    function doSearch(data) {
        const query = data.get("query");
        alert(`You searched for '${query}'`);
    }

    return (
        <form action={doSearch}
            className="d-none d-lg-block mx-3 w-100" role="search">
            <input
                name="query"
                className="form-control-sm border-0 w-100"
                type="search"
                placeholder="بحث"
                aria-label="Search" />
        </form>
    )
};