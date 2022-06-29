let rerender = ()=>{}

let state={
    profilePage:{
        postsData : [
            {id: 1, message: "Hi! how are you?", likeCounter: "25"},
            {id: 2, message: "It's my first post!", likeCounter: "19"},
            {id: 3, message: "It's my first post!", likeCounter: "19"},

        ],
        newPostText: 'Glav_Mi'

    },
    dialogsPage:{
        dialogsData:[
            {id:1, name:'Mikhail'},
            {id:2, name:'Nady'},
            {id:3, name:'Dmitriy'},
            {id:4, name:'Alex'}],
        messagesData:[
            {id:1, text:'Hello!'},
            {id:1, text:'How are you?'},
            {id:1, text:'I am fine!'}]
    },
    myFrends:{
        myFrends:[
            {id:1, name: 'Mikhail'},
            {id:2, name:'Nady'},
            {id:3, name:'Dmitriy'},
            {id:4, name:'Alex'}]
    }
}
                                             /*функция для добавления введенной информации пользователем в textarea*/
export let addPost = ()=>{
                                               /* создаем масив с новыми элементами*/
        let newPost = {
        id:7,
        message: state.profilePage.newPostText,
        likeCounter: "0"
    }
    state.profilePage.postsData.push(newPost)      /* пушим новый масив в обьект с данными*/
    state.profilePage.newPostText = ' '
    rerender(state)                               /*повторный вызов фунции перерисовки после изменения state, перебрасываем новый state*/
}

export let uppDateNewPostText =(newText)=>{
    state.profilePage.newPostText = newText
    rerender(state)
}

export const subscribe = (observer)=>{
    rerender = observer
}


export default state