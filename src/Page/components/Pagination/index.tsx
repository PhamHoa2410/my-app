import React from "react";

type PaginationProps = {
    page: number;
    setPage: any
}
const Pagination: React.FC<PaginationProps> = (props) => {
    const { page, setPage } = props
    const Previous = () => {
        if (page !== 1) {
            setPage(page - 1);
        } else {
            setPage(page);
        }
    };

    const Next = () => {
        if (page < 10) {
            setPage(page + 1);
        }
    };

    return (
        <>
            <div className="pagination">
                <button
                    className="secondary-button margin--0"
                    onClick={() => Previous()}
                >
                    Previous
                </button>
                <button
                    className="secondary-button margin--0"
                    onClick={() => Next()}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default Pagination;