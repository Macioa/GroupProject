

router.get('/new', (req, res)=>{
    res.render('events/New.ejs')
})

router.get('/:id/Edit', (req, res)=>{
    res.render('events/Edit.ejs', {
        event: event,
        user: user
    })
})

router.get('/:id', (req, res)=>{
    res.render('events/Show.ejs', {
        user:user,
        event:event
    })
})