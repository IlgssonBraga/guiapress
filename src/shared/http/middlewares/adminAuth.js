const adminAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/admin/login");
  }
};

export default adminAuth;
