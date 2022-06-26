let state={
    profilePage:{
        postsData : [
            {id: 1, message: "Hi! how are you?", likeCounter: "25"},
            {id: 2, message: "It's my first post!", likeCounter: "19"},
            {id: 3, message: "It's my first post!", likeCounter: "19"},
            {id: 4, message: "It's my first post!", likeCounter: "19"},
            {id: 5, message: "It's my first post!", likeCounter: "19"},
            {id: 6, message: "It's my first post!", likeCounter: "19"}
        ]
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

export let addPost = (post)=>{
    debugger
        let newPost = {
        id:7,
        message: post,
        likeCounter: "0"
    }
    state.profilePage.postsData.push(newPost)

}

export default state