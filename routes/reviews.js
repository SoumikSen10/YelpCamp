const express = require("express");
const router = express.Router({ mergeParams: true });
const Campground = require("../models/campground");
const Review = require("../models/review");
const ExpressError = require("../utils/ExpressError");
const catchAsync = require("../utils/catchAsync");
const reviews = require("../controllers/reviews");
const {
  validatedReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware");

router.post("/", isLoggedIn, validatedReview, catchAsync(reviews.createReview));

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  catchAsync(reviews.deleteReview)
);

module.exports = router;
