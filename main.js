const express = require("express");
const app = express();
const fs = require("fs");
const { exec } = require("child_process");
const { log } = require("console");
const port = 6969;

app.use(express.json()); // to get the data in json format
app.use(express.urlencoded({ extended: true })); // to get the form data

app.set("view engine", "ejs");
app.use(express.static("public")); // to view static files
let ip = ""

app.get("/", (req, res) => {
    res.status(200).render("start");
})

app.post("/ip", (req,res) => {
    ip = req.body.ip;
})

app.get("/list", (req, res) => {
    console.log(`yo this is the ip bro : ${ip}`);
    exec(`./script1.sh ${ip}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(stdout);
        res.status(200).render("index", { layout: false, list: stdout });
    })
});

app.post("/upload", (req, res) => {
    let file = req.body.filename;
    console.log(`Yo this is the fileName : ${file}`);
    exec(`./script2.sh ${ip} ${file}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(stdout);
    })
})

app.post("/download", (req, res) => {
    let file = req.body.filename;
    console.log(`Yo this is the fileName : ${file}`);
    exec(`./script3.sh ${ip} ${file}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(stdout);
    })
})

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
})
