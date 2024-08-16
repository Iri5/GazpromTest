import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { Pagination } from "react-bootstrap";

const PaginationPages = observer(() => {
    const { pages } = useContext(Context);
    const pageCount = Math.ceil(pages.totalCount / pages.limit);

    const Forward = (step) => {
        if (pages.page + step < pageCount)
            pages.setPage(pages.page + step);
    }
    const Back = (step) => {
        if (pages.page - step > 0)
            pages.setPage(pages.page - step)
    }

    return (
        <Pagination className="mt-5" style={{'justify-content': 'center', }}>
            <Pagination.First
                onClick={() => pages.setPage(1)}
            />

            <Pagination.Prev
                onClick={() => { Back(1) }}
            />

            {(pages.page - 3 > 0)
                ?
                <div className="d-flex">
                    <Pagination.Item
                        onClick={() => { pages.setPage(1) }}>
                        {1}
                    </Pagination.Item>
                    <Pagination.Ellipsis />
                </div>
                : null
            }

            {(pages.page - 2 > 0)
                ?
                <Pagination.Item
                    onClick={() => { Back(2) }}>
                    {pages.page - 2}
                </Pagination.Item>
                : null
            }

            {(pages.page - 1 > 0)
                ?
                <Pagination.Item
                    onClick={() => { Back(1) }}>
                    {pages.page - 1}
                </Pagination.Item>
                : null
            }

            <Pagination.Item active>{pages.page}</Pagination.Item>

            {(pages.page + 1 < pageCount)
                ?
                <Pagination.Item
                    onClick={() => { Forward(1) }}>
                    {pages.page + 1}
                </Pagination.Item>
                : null
            }

            {(pages.page + 2 < pageCount)
                ?
                <Pagination.Item
                    onClick={() => { Forward(2) }}>
                    {pages.page + 2}
                </Pagination.Item>
                : null
            }

            {(pages.page + 3 < pageCount)
                ?
                <div className="d-flex">
                    <Pagination.Ellipsis />
                    <Pagination.Item
                        onClick={() => { pages.setPage(pageCount) }}>
                        {pageCount}
                    </Pagination.Item>
                </div>
                : null
            }

            <Pagination.Next
                onClick={() => { Forward(1) }}
            />

            <Pagination.Last
                onClick={() => { pages.setPage(pageCount) }}
            />
        </Pagination>
    )
})

export default PaginationPages;