export default {
    name: 'notesCategory', 
    title: 'NotesCategory',
    type: 'document', 
    fields: [
        {
            name: 'title', 
            title: 'Title', 
            type: 'string'
        },
        {
            name: 'desc', 
            title: 'Desc', 
            type: 'string'
        },
        {
            name: 'imgUrl', 
            type: 'ImgUrl', 
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}