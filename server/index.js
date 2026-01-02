import express from 'express'

const app =express()

app.get('/data',(req,res)=> {
    const dummyData ={
        users: [{id:1, name: 'Devansh', email: 'devanshpandeyji4321@gmail.com'}],
    };
    return res.json({data : dummyData})
});

app.listen(8000, () => console.log(`Server started on PORT 8000`));