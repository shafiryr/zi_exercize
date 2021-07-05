const dbService = require('../db/db.service');
let parentList;

async function getHierarchyById(id) {
   parentList = [];
   let hierarchyStr = null;
   try {
      const member = await dbService.getHierarchyItemById(id);
      if (member) {
         await addToParentList(member);
      }
      hierarchyStr = parentList.join(' -> ');
   } catch (err) {

   } finally {
      console.log(`[hierarchy]: ${hierarchyStr}`);
      return { hierarchy: hierarchyStr };
   }
}

async function addToParentList(member) {
   const parent = await dbService.getHierarchyItemById(member.parentMemberId);
   if (parent) {
      parentList.unshift(parent.name);
      if (parent.level > 1) {
         await addToParentList(parent);
      }
   }
}

module.exports = {
   getHierarchyById
};

