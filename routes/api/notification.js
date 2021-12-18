const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/hello", (req, res) => {
  res.json("hello dit me may");
});

router.post("/sendToAll", (req, res, next) => {
  //Notification content
  let notification = {
    title: req.body.title || "Thong bao",
    body: req.body.body || "Thu vien vua them sach moi",
  };

  //fcm token genrated for device
  // add multiple device fcm
  let fcmToken = [
    "e4Gg5BXcTrqSxkdDPod70j:APA91bGgE6x_bGTPBi-rFnZEuRX7mvNCuyQNjzJdu6GlwB6v5KsZbSXb19N_F8zhGuUdoxm2QjscMvsLCSlNPJVY7t1JtzS7CKY4vProy3nSkEGilO-Z3zdCmwaQZMv_cyOM1zTpV4vN",
  ];

  //https://firebase.google.com/docs/cloud-messaging/http-server-ref  <-- the api doc
  axios({
    method: "post",
    url: "https://fcm.googleapis.com/fcm/send",
    data: {
      notification: notification,
      registration_ids: fcmToken,
    },
    headers: {
      //cloud messaging firebase token
      Authorization:
        "key=" +
        "AAAAehj_uKQ:APA91bGM1yCHVq7ytr67-OIoMIegj9xeO1T_q90zjdPUGRahO-8ibklIMOoEiP1uim4GZs-Fozzu2Wb-gCDlkplHN7i_bReNCjC0KCBY23ttsJNt66gTFq6ctEFwGcdL2sd4HxWdHxh8",
      "Content-Type": "application/json",
    },
  })
    .then(() => {
      res.status(200).send("Notification sucess");
    })
    .catch((err) => {
      res.status(400).send("Something went wrong..!!", err);
      console.log(err);
    });
});

module.exports = router;
