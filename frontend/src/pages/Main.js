import React, { useContext, useEffect } from "react";
import { Context } from "../index";
import { observer } from 'mobx-react-lite';
import { fetchPages } from "../http/pageAPI";
import PaginationPages from "../components/PaginationPages";
import { Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
const Main = observer(() => {
    const { pages } = useContext(Context);

    useEffect(() => {
        fetchPages(1, 10).then(data => {
            pages.setTitles(data.titles);
            pages.setTotalCount(data.total);
            pages.setPages(data.pages);
        })
    }, []);

    useEffect(() => {
        fetchPages(pages.page, pages.limit).then(data => {
            pages.setTitles(data.titles);
            pages.setTotalCount(data.total);
            pages.setPages(data.pages);
        })
    }, [pages.page, pages.limit]);

    return (
        <div className="container">
            <Table striped bordered className="mt-5">
                <thead >
                    <tr>
                        {pages.titles.map((title, idx) => <th className="text-uppercase" key={idx}>{title}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {pages.pages.map((row, idx) => (
                        <tr key={idx}>
                            {row.map((cell, idx) => (
                                <td key={idx}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
            <PaginationPages />
            <Form>
                <Form.Control type="number" placeholder="page" style={{width: 25 + '%', margin: 'auto'}}
                    onChange={(e)=>{
                        parseInt(e.target.value) ?
                        pages.setPage(parseInt(e.target.value)) : 
                        pages.setPage(1)
                        }}
                />
            </Form>
        </div>
    )
})

export default Main;