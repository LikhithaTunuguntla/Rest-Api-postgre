const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req,res)=>{
    pool.query(queries.getStudents,(err,result)=>{
        if (err) throw err;
        res.send(result.rows);

    })
};

const getStudentById=(req,res)=>{
    const id = req.params.id;
    pool.query(queries.getStudentById,[id],(err,result)=>{
        if (err) throw err 
        res.send(result.rows);
    })
};

const addStudent=(req,res)=>{
    const {name,email,age,dob}=req.body;
    pool.query(queries.addStudent,[name,email,age,dob],(err,result)=>{
        if (err) throw err 
        res.send("Student Created Successfully");
    })
};

const deleteStudent=(req,res)=>{
    const id = req.params.id;
    pool.query(queries.deleteStudent,[id],(err,result)=>{
        if(err) throw err
        res.send("Student Deleted Successfully");
    })
};

const updateStudent = (req,res)=>{
    const id = req.params.id;
    const {name}=req.body;
    pool.query(queries.updateStudent,[name,id],(err,result)=>{
        if(err) throw err
        res.send("Student updated Successfully");
    })
};

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    deleteStudent,
    updateStudent,
}