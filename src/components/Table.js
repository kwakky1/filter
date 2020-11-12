import React, {useEffect, useState} from 'react';
import MaterialTable from "material-table";
import user from "../user.json"
import {filterGender} from "../reducer/FilterReducer";

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

    useEffect(()=>{
        console.log(gender)
        filterGender(gender)
    },[])

    // 리스트에서 filter 하고 싶은 값 배열로 만들기 < ex) const gender = {남자, 여자} >
    const getGender = (data) =>{
        const genders = [];
        data.forEach((person) => {
            if(person.sex) {
                if(genders.indexOf(person.sex) === -1) {
                    genders.push(person.sex)
                }
            }
        })
        return genders;
    }

    const gender = getGender(user)


    const genderHandle = (e, gender) =>{
        const index = gender.indexOf(e.target.value)
        if(e.target.checked){
            gender.push(e.target.value);
        } else {
            gender.splice(index, 1);
            const list = [];
            user.forEach((element) => {
                if(element.sex === gender){
                    list.push(element);
                }
            })
            setUserList(list);
        }
    }

    const filteredGender = userList.sex;

    return (
        <>
            <form style={{display: "flex"}}>
                {gender.map((gender, index) => {
                    return(
                        <div key={index}>
                            <label htmlFor={gender}>{gender}</label>
                            <input
                                value={gender}
                                type="checkbox"
                                onChange={(e)=> genderHandle(e, filteredGender)}
                                defaultChecked={true}
                            />
                        </div>
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