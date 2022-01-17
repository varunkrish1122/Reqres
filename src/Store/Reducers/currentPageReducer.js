import { UPDATE_PAGE_NUMBER, UPDATE_NUMBER_OF_PAGES } from "../Actions";

const initialState = {
    currentPage: 1,
    numberOfPages: 1
};

const reducer = (state = initialState, action) => {
    const { type = '', actionPayload = 1 } = action;
    switch (type) {
        case UPDATE_PAGE_NUMBER:
            return {
                ...state,
                currentPage: actionPayload
            }
        case UPDATE_NUMBER_OF_PAGES:
            return {
                ...state,
                numberOfPages: actionPayload
            }
        default: return state
    }
};

export default reducer