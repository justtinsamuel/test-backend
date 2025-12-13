const errorResponse = (res, status, message) => {
  return res.status(status).json({
    success: false,
    message,
  });
};

const successResponse = (res, status, data) => {
  return res.status(status).json({
    success: true,
    data,
  });
};

const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = { errorResponse, successResponse, asyncHandler };