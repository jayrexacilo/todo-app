const Joi = require("joi");

module.exports = {
  validateParam: (schema, name) => {
    return (req, res, next) => {
      const result = Joi.validate({ param: req["params"][name] }, schema);

      if (result.error) {
        return res.status(400).json(result.error);
      } else {
        if (!req.value) req.value = {};

        if (!req.value["params"]) req.value["params"] = {};

        req.value["params"][name] = result.value.param;
        next();
      }
    };
  },

  validateBody: schema => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);

      if (result.error) {
        return res.status(400).json(result.error);
      } else {
        if (!req.value) req.value = {};

        if (!req.value["body"]) req.value["body"] = {};

        req.value["body"] = result.value;
        next();
      }
    };
  },

  schemas: {
    todoSchema: Joi.object().keys({
      _id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
      todoName: Joi.string().required(),
      done: Joi.boolean().required(),
      __v: Joi.number()
        .integer()
        .required()
    }),

    todoPatchSchema: Joi.object().keys({
      _id: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
      todoName: Joi.string(),
      done: Joi.boolean(),
      __v: Joi.number().integer()
    }),

    idSchema: Joi.object().keys({
      param: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
    })
  }
};
