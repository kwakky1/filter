import React, {useEffect, useState} from 'react';
import MaterialTable from "material-table";
import user from "../user.json"
import CheckBox from "./CheckBox"

const Table = () => {

    const [userList, setUserList] = useState(user);
    const [filtering, setFiltering] = useState({
        gender: [],
        age: []
    })

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
   ];

    const [color, setColor] = useState("black")

    const selectHandle = (e) => {
        setColor(e.target.value)
    }

    const handleFilters = (filters, category) => {
        const newFilters = {...filtering}
        newFilters[category] = filters
        if(category === "age") {

        }
        if(category === "gender") {
            showFilterResults(newFilters)
            setFiltering(newFilters)
        }
    }

    const showFilterResults = (filters) => {
        console.log(filters.gender.length)
        if(filters.gender.length === 0) {
            setUserList(user)
        } else {
            const filteredResult = Array.from(user).filter((user)=>{
                return filters.gender.indexOf(user.sex) !== -1
            })
            setUserList(filteredResult);
        }
    }


    return (
        <>
            <CheckBox
                handleFilters = {filters => handleFilters(filters, "gender")}
            />
            <MaterialTable
                title={"회원정보"}
                columns={columns}
                data={userList}
            />
            <div>
                <select name="color" onChange={selectHandle}>
                    <option value="black">검정색</option>
                    <option value="yellow">노란색</option>
                    <option value="red">빨간색</option>
                    <option value="blue">파란색</option>
                </select>
            </div>
            {
                (color === 'red') &&
                <h1 style={{color: "red"}}>곽경열</h1>
            }
            {
                (color === 'blue') &&
                <h1 style={{color: "blue"}}>곽경열</h1>
            }
            {
                (color === 'yellow') &&
                <h1 style={{color: "yellow"}}>곽경열</h1>
            }
            {
                (color === 'black') &&
                <h1>곽경열</h1>
            }
            
        </>
    );
};

export default Table;