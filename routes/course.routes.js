const { createFormData, getAllFormData } = require('../controller/UserCotroller');

const router = require('express').Router();

router.post('/create', createFormData)
router.get('/get',getAllFormData )
 


module.exports = router;