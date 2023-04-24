const db = require('../model');
const user = db.user;

module.exports = {
    create : async (req, res) => {
        try{
            const data = await user.create(req.body)
            res.json({
                message: "User created successfully!!",
                data: data,
            });
        } catch (err){
            res.status(500).json({
                message: err.message,
                data: null
            });
        }
    },
    getAll : async(req, res) => {
        try{
            const users = await user.findAll()
            res.json({
                message: "User Retrived Successfully!!!",
                data: users,
            });
        }catch(err){
            res.status(500).json({
                message: err.message || "Errors occurred while rerieving User",
                data: null
            });
        }
    },
    update: async(req, res) => {
        const id = req.params.id
        try{
            const userr = await user.findByPk(id, {rejectOnEmpty: true})
            userr.update(req.body, {
    
                where: {id}
            });
            res.json({
                message: "User Updated Successfully!!!",
                data: quiz,
            });
        }catch(err){
            res.status(500).json({
                message: err.message || "Errors occurred while rerieving User",
                data: null
            });
        }
    },
    delete : async(req, res) => {
        const id = req.params.id
        try{
            const userr = await user.findByPk(id, {rejectOnEmpty: true})
            userr.destroy()
            res.json({
                message: "User Deleted Successfully!!!",
            });
        }catch(err){
            res.status(500).json({
                message: err.message || "Errors occurred while rerieving User",
                data: null
            });
        }
    },
    findOne : async(req, res) => {
        const id = req.params.id
        try{
            const userr = await user.findByPk(id, {rejectOnEmpty: true})
            res.json({
                message: `User Retrieved Successfully!!! with id: ${id}`,
                data: userr,
            });
        }catch(err){
            res.status(500).json({
                message: err.message || "Errors occurred while rerieving User",
                data: null
            });
        }
    },
    
    
}