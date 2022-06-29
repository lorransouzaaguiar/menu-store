import 'dotenv/config.js'

import app from './index.js'
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
