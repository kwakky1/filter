import React, { useState } from 'react';
import MaterialTable from "material-table";
import user from "../user.json"
import index from "material-table";

const Table = () => {

    const [userList, setUserList] = useState(user);

    const checkBox = ["male", "female"]


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

    const onChange = (e) => {

        const {target: {name, checked}} = e;
        if (name === "male") {
            let maleUserList = Array.from(user).filter((element) => {
                return element.sex === name;
            })
            if(checked){
                setUserList(maleUserList)
            } else {
                let femaleUserList = Array.from(user).filter((element) => {
                    return element.sex === "female";
                })
                let list = [];
                list.push(...userList);
                list.push(...femaleUserList);
                setUserList(list);
                /*console.log(userList)*/
            }

        } else if (name === "female") {
            let femaleUserList = Array.form(user).filter((element) => {
                return element.sex === name;
            })
            if(checked) {
                const list = [...user]
                list.push(...femaleUserList)
                setUserList(list);
            } else {
                let maleUserList = user.filter((element) => {
                    return element.sex === "male";
                })
                let list = [];
                list.push(...userList);
                list.push(...maleUserList);
                setUserList(list);
            }
        }
    }
    console.log(userList)
    return (
        <>
            <form action="">
                {checkBox.map((box, index) => {
                    return(
                        <>
                        <label>{box}</label>
                        <input type="checkbox" name={box} onChange={onChange} />
                        </>
                    )
                })}
            </form>
            <MaterialTable
                title={"회원정보"}
                columns={columns}
                data={userList}
            />
            
        </>
    );
};

export default Table;