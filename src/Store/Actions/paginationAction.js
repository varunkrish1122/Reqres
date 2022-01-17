export const UPDATE_PAGE_NUMBER = 'UPDATE_PAGE_NUMBER';
export const UPDATE_NUMBER_OF_PAGES = 'UPDATE_NUMBER_OF_PAGES';

export const updatePageNumber = (actionPayload) => {
    return {
        type: UPDATE_PAGE_NUMBER,
        actionPayload
    }
};

export const updateNumberOfPages = (actionPayload) => {
    return {
        type: UPDATE_NUMBER_OF_PAGES,
        actionPayload
    }
};