const express = require('express');
const router = express.Router();
const _ = require('lodash');
const controller = require('./hierarchy.controller');

router.get('/:id', getHierarchyById);

async function getHierarchyById(req, res, next) {
    try {               
        const hierarchy = await controller.getHierarchyById(req.params.id);
        res.status(200).send(hierarchy);
    }
    catch (err) {        
        const errMessage = _.get(err, 'message', 'error occurred');
        const errCode = _.get(err, 'status', 500);
        res.status(errCode).json({message: 'error occurred', error: errMessage});
    }
}

module.exports = router;
