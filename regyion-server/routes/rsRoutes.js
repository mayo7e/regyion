

module.exports = app =>{
    
app.get("/", (req, res, next)=>{
    res.json({"Hello": "world"})
})

app.post("/api/df_text_query", (req, res, next)=>{
    res.json({"do": "text_query"})
})

app.post("/api/df_event_query", (req, res, next)=>{
    res.json({"do": "event_query"})
})


}