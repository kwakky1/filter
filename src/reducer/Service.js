// 리스트에서 filter 하고 싶은 값 배열로 만들기 < ex) const gender = {남자, 여자} >
const getGender = (data) =>{
    console.log(data)
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

export default getGender;