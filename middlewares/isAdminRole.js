module.exports = (req, res, next) => {
  if (req.session && req.session.currentUser) {
    console.log(req.session.currentUser);
    if (req.session.currentUser.role === "ADMIN_ROLE") next();
  } else res.redirect("/auth/login");
};
