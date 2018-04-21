// state argument for this only this reducer (state)
// ES6 setting intial param state to null
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}
