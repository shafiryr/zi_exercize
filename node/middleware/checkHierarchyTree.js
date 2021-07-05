const _ = require('lodash');
const dbService = require('../db/db.service');

module.exports = async function (req, res, next) {
    try {
        console.log('---------------------------------------');
        const selfId = res.locals.account.id;
        const requestedId = parseInt(req.params.id); 
        
        //allowed to see self info
        if (selfId === requestedId) {
            next();
        } else {   
            //check if self is a parent of requestedId         
            if (await isParent(await dbService.getChildren(selfId), requestedId)) {                
                next();
            } else {                
                throw { message: 'Sorry no in parent hierarchy', status: 401 };
            }
        }
    }
    catch (err) {
        const errMessage = _.get(err, 'message', 'error occurred');
        const errCode = _.get(err, 'status', 500);       
        res.status(errCode).json({ message: 'Error occurred during hierarchy validation', error: errMessage });        
    }
};

async function isParent(children, requestedId) {    
    for (const child of children) {        
        if (child.memberId === requestedId) {            
            return true;
        }
        if (await isParent(await dbService.getChildren(child.memberId), requestedId)) {
            return true;
        }        
    }
    return false;

}

