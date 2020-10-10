import {useReducer, useEffect} from 'react';

export const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const newsReducer = (state,action) => {
    switch(action.type){
        case ACTIONS.MAKE_REQUEST : return { loading: true, news: []};
        case ACTIONS.GET_DATA: return {loading: false, news: action.payload.news};
        case ACTIONS.ERROR: return {loading: false, news: [], error: true};
        default: return state;
    }
}

export default function useFetchNews(topic){
    const [state, dispatch] = useReducer(newsReducer,{news: [], loading: true});

    
    useEffect(()=>{
        dispatch({type: ACTIONS.MAKE_REQUEST});
        
        fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=4un5toLIoYvd7uZLGjfSNYEhPPPWAYLt`)
        .then(res => res.json())
        .then(data => {
            
            dispatch({
                    type: ACTIONS.GET_DATA,
                    payload: { news: data }
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({type: ACTIONS.ERROR});
        })
        
    },[topic]);

    return state;
}