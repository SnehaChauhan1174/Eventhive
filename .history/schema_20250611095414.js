const Joi = require('joi');
module.exports.eventSchema=Joi.object({
    event:Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        date:Joi.date().required(),
        time:Joi.string().required(),
        location:Joi.string().required(),
        category:Joi.string().required(),
        price:Joi.number().required(),
        image:Joi.string().allow("",null),
        attendeeCount:Joi.number().required(),
    }).required()
})


module.exports.reviewSchema=Joi.object({
    review:Joi.object({
        comment:Joi.string().required(),
        rating:Joi.number().required().min(1).max(5),
    }).required()
})