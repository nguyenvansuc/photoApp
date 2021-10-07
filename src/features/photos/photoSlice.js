import { createSlice } from '@reduxjs/toolkit'


const initState=[
{
    id:1,
    title:"flower",
    category:"nature",
    url:"https://images.wallpaperscraft.com/image/single/flower_background_petals_49884_1280x1024.jpg"
},
{
    id:2,
    title:"cat",
    category:"nature",
    url:"https://images.wallpaperscraft.com/image/single/cat_fluffy_muzzle_119000_1280x1024.jpg"
},
{
    id:3,
    title:"girl",
    category:"person",
    url:"https://cdn.tgdd.vn/Files/2021/07/01/1364687/cac-tua-phim-hay-nhat-cua-my-nu-thai-lan-baifern-pi-1.jpg"
},
{
    id:4,
    title:"girl",
    category:"person",
    url:"https://cuongphim.com/wp-content/uploads/2017/11/gal-gadot-3-cuong-phim-1.png"
}
]
const photoSlice = createSlice({
    name : 'photo',
    initialState:initState,
    reducers:{
        addPhoto:(state,action)=>{
            state.push(action.payload);
            console.log(state);
        }
    }
})

const {reducer,actions}=photoSlice;
export const {addPhoto}=actions;
export default reducer;