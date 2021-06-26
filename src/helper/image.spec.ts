import chai from "chai";

import imageHelper from "./image";

const assert = chai.assert;

const downloadFile = "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg";
const filelocation = "/tmp/sample.jpg";

describe("Runs image tests", () => {
    describe("Test successful upload", async () => {
        imageHelper.downloadImage(downloadFile, filelocation);
        const res = imageHelper.upload(filelocation, "image/jpeg");
        assert.isNotFalse(res);
    });
});
