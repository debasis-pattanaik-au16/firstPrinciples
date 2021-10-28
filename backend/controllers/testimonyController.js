const Testimony = require("../models/testimonial");

exports.getAllTestimonies = async (req, res) => {
  try {
    const testimonies = await Testimony.find({});
    res.status(200).json({
      status: "success",
      length: testimonies.length,
      data: {
        testimony: testimonies,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getTestimony = async (req, res) => {
  const id = req.params.id;
  try {
    const testimony = await Testimony.findById(id);
    res.status(200).json({
      status: "success",
      data: {
        testimony,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: "Not found",
    });
  }
};

exports.createTestimony = async (req, res) => {
  const { name, post, active, description } = req.body;
  try {
    const testimony = new Testimony({
      name,
      post,
      active,
      description,
    });
    await testimony.save();
    res.status(201).json({
      status: "success",
      data: {
        testimony,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.updateTestimony = async (req, res) => {
  try {
    const update = await Testimony.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        testimony: update,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.deleteTestimony = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteTestimony = await Testimony.findByIdAndDelete(id);
    res.status(201).json({
      status: "success",
      message: "Deleted Successfully",
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
};
