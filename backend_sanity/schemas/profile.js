export default{
    name: 'profile',
    title: 'Profile',
    type: 'document',

    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },

        {
            name: 'bio',
            title: 'Bio',
            type: 'text'
        },

        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
    ]
}