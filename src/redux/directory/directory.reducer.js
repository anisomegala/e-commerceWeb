const INITIAL_STATE = {
    sections: [
        {
             title: 'Bluzka',
             imageUrl: 'https://i.ibb.co/HrGkr6S/02-Bluzka2-a-S-M-L-XL.jpg',
             id: 1,
             linkUrl: 'shop/bluzka'
           },
           {
             title: 'Tunika',
             imageUrl: 'https://i.ibb.co/ZJYth2T/03-Tunika1-c-S-M-L.jpg',
             id: 2,
             linkUrl: 'shop/tunika'
           },
           { 
             title: 'Sukienka',
             imageUrl: 'https://i.ibb.co/hXzV8Fn/04-Sukienka1-d-M-L-XL.jpg',
             id: 3,
             linkUrl: 'shop/sukienka'
           },
           {
             title: 'Spodnie',
             imageUrl: 'https://i.ibb.co/bz6kbCs/06-Spodnie1-c-M-L-XL.jpg',
             size: 'large',
             id: 4,
             linkUrl: 'shop/spodnie'
           },
           {
             title: 'Płaszcz',
             imageUrl: 'https://i.ibb.co/tJ6wrYv/09-P-aszcz1-a-S-M-L.jpg',
             size: 'large',
             id: 5,
             linkUrl: 'shop/płaszcz'
           }
         
     ]
};

const directoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
        return state;
    }

};

export default directoryReducer;

