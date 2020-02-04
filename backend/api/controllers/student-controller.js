const Student = require('../Models/Student');

exports.createStudent = (req,res,next) => {
    Student.create(req.body, (err, data) => {
        if(err) return next(err);
        console.log(data);
        res.json(data);
    });
}

exports.readStudents = (req,res, next) => {
    Student.find((err,data) => {
        if(err) return next(err);
        res.json(data);
    });
}

exports.getStudent = (req,res, next) => {
    Student.findById(req.params.id, (err, data) => {
        if(err) return next(err);
        res.json(data);
    });
}

exports.updateStudent = (req,res, next) => {
    Student.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, data) => {
        if(err) return next(err);
        console.log('Student Updated Successfully!');
        res.json(data);
    });
}

exports.deleteStudent = (req,res,next) => {
    Student.findByIdAndDelete(req.params.id, (err,data) => {
        if(err) return next(err);
        res.status(200).json({msg:'success!'});
    });
}