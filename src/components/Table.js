import React, {useState} from 'react';
import MaterialTable from "material-table";
import user from "../user.json"

const Table = () => {

    const [userList, setUserList] = useState(user);

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

    const onClick = (e) => {
        const {target: {name, checked}} = e;

        if(name === "male" && checked){
            let maleUserList = userList.filter((element)=>{
                return element.sex === name
            })
            setUserList(maleUserList)

        } else if(name==="female" && checked) {
            let maleUserList = userList.filter((element)=>{
                return element.sex === name
            })
            setUserList(maleUserList)
        }
    }

    return (
        <>
            <form action="">
            <label>남자</label>
            <input type="checkbox" name={"male"} onClick={onClick} />
            <label>여자</label>
            <input type="checkbox" name={"female"} onClick={onClick} />
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