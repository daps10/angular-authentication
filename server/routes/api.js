const express = require("express")
const router = express.Router();


router.get("/", (req,res) => {
    res.send("From API module")
})

// export router to use
module.exports = router;