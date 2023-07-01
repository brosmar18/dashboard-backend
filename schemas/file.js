export default {
    name: 'file',
    title: 'File', 
    type: 'document',
    fields: [
        {
            name: 'title', 
            title: 'Title', 
            type: 'string', 
        },
        {
            name: 'description', 
            title: 'Description', 
            type: 'string'
        },
        {
            name: 'file', 
            title: 'File',
            type: 'file', 
            options: {
                accpet: 'application/pdf'
            } 
        }
    ]
};