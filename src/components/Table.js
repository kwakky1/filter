import React from 'react';
import MaterialTable from "material-table";
import user from "../user.json"


const columns = [
    {
        title: "아이디", field: "userId"
    },
    {
        title: "이름", field: "name"
    },
    {
        title: "나이", field: "age"
    },
    {
        title: "성별", field: "sex"
    },
]

const data = user


const Table = () => {
    return (
        <>
            <MaterialTable
                title={"회원정보"}
                columns={columns}
                data={data}
            />
            
        </>
    );
};

export default Table;