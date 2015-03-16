'use strict';


var IndexModel = require('../models/index');
var Mi4Model = require('../models/pages/mi4');
var MiBoxModel = require('../models/pages/miBox');
var MiBandModel = require('../models/pages/miBand');


module.exports = function (router) {

    var indexModel = new IndexModel();
    var mi4Model = new Mi4Model();
    var miBoxModel = new MiBoxModel();
    var miBandModel = new MiBandModel();


    // 一个时url, 一个时
	router.get('/mi4', function (req, res) {
        console.log(mi4Model);
        res.render('pages/mi4', mi4Model);
    });

	router.get('/miBox', function (req, res) {
        res.render('pages/miBox', miBoxModel);
    });

	router.get('/miBand', function (req, res) {
        res.render('pages/miBand', miBandModel);
    });

	router.get('/*', function (req, res) {
        res.render('index', indexModel);
    });

};
