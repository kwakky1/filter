const FILTER_GENDER = 'FILTER_GENDER'

export const filterGender = (gender) =>({
    type: FILTER_GENDER,
    gender
})

const filterState ={
    gender: []
}

const FilterReducer =(state = filterState, action) => {
    switch (action.type) {
        case FILTER_GENDER :
            return {
                ...state,
                gender: action.gender
            }
        default:
            return state;
    }
}

export default FilterReducer;
