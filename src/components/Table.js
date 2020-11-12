import React, { useState } from 'react';
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

    /*const onChange = (e) => {

        const {target: {name, checked}} = e;
        if (name === "male") {
            let maleUserList = Array.from(user).filter((element) => {
                return element.sex === name;
            })
            if (checked) {
                setUserList(maleUserList)
            } else {
                let femaleUserList = Array.from(user).filter((element) => {
                    return element.sex === "female";
                })
                let list = [];
                list.push(...userList);
                list.push(...femaleUserList);
                setUserList(list);
                console.log(userList)
            }

        } else if (name === "female") {
            let femaleUserList = Array.form(user).filter((element) => {
                return element.sex === name;
            })
            if (checked) {
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
    }*/

    // 리스트에서 filter 하고 싶은 값 배열로 만들기 < ex) const gender = {남자, 여자} >
    const getGender = (data) =>{
        const genders = [];
        data.map((person) => {
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
        } else
            gender.splice(index, 1);
    }

    return (
        <>
            <form action="">
                {gender.map((gender, index) => {
                    return(
                        <>
                            <label htmlFor={gender}>{gender}</label>
                            <input
                                value={gender}
                                type="checkbox"
                                onChange={(e)=> genderHandle(e, gender)}
                                key={index}
                                defaultChecked={true}
                            />
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