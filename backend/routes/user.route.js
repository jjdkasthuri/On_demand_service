import Router from "express";
import {
  registerHandler,
  loginController,
  profileShowController,
  updateProfileController,
  logoutController,
  showGivenWorkData,
  getChartClientDataController,
} from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

import {
  newBookingController,
  showAllBookingController,
  rateProviderController,
  changeStatusController,
} from "../controllers/booking.controllers.js";

import {
  providerRegisterController,
  allAppointmentController,
  profileProviderController,
  updateProviderDetailsController,
  makeAvailableController,
  getReviewController,
  getChartDataController,
  checkAvailController,
} from "../controllers/provider.controller.js";
import { sendEmail } from "../email.js";
import {
  sendmailController,
  emailToMeController,
} from "../controllers/email.controller.js";
const router = Router();

// user Routes

router.route("/register").post(upload.single("avatar"), registerHandler);
router.route("/login").post(loginController);
router.route("/logout/:email").get(logoutController);
router.route("/show-profile/:email").get(profileShowController);
router
  .route("/update-profile/:email")
  .patch(upload.single("avatar"), updateProfileController);
router.route("/new-booking").post(newBookingController);
router.route("/all-booking/:email").get(showAllBookingController);
router.route("/rating").patch(rateProviderController);
router.route("/analysis-client/:email").get(getChartClientDataController);

router.route("/show-booking/:work").get(showGivenWorkData);

// speacially for providers
router.route("/provider-details/:email").post(providerRegisterController);
router.route("/provider-all-appointment/:email").get(allAppointmentController);
router.route("/provider-profile/:email").get(profileProviderController);
router
  .route("/provider-update-profile/:email")
  .patch(upload.single("avatar"), updateProviderDetailsController);
router.route("/is-available/:email").patch(makeAvailableController);
router.route("/change-status").patch(changeStatusController);
router.route("/analysis-provider/:email").get(getChartDataController);
router.route("/check-avail/:email").get(checkAvailController);

// to get review
router.route("/provider-review/:email").get(getReviewController);

// email
router.route("/send-email").post(sendmailController);
router.route("/send-email-me").post(emailToMeController);

export { router };
