import React, {useState} from 'react';
import user from "../user.json";

const CheckBox = (props) => {

    const [checked, setChecked] = useState([])

    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked]

        if(currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)
        props.handleFilters(newChecked)
    }

    const getGender = (data) =>{
        const genders = [];
        data.map((person) => {
            if(genders.indexOf(person.sex) === -1) {
                genders.push(person.sex)
            }
        })
        return genders;
    }

    const gender = getGender(user)

    const renderCheckBoxLists = () => gender.map((value, index)=>
            <div key={index}>
                <span>{value}</span>
                <input
                    type="checkbox"
                    onChange={()=>handleToggle(value)}
                    checked={checked.indexOf(value) !== -1 }
                    value={value}
                />
            </div>
    );



    return (
        <>
            <form style={{display:"flex"}}>
                {renderCheckBoxLists()}
            </form>
        </>
    );
};

export default CheckBox;