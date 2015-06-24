/**
 * Created by pavan on 6/22/2015.
 */
Groups = new Meteor.Collection('tasks');
Categories = new Meteor.Collection('categories');
Activities = new Meteor.Collection('activities');
//Test Data
ActArrary = [
    {"title": "Books & Audible", "expanded": true, "folder": true, "children": [
        {"title": "Books", "folder": true, "children": [
            {"title": "Books"},
            {"title": "Kindle Books"},
            {"title": "Books For Study"},
            {"title": "Audiobooks"}
        ]},
        {"title": "Movies, TV, Music, Games", "folder": true, "children": [
            {"title": "Music"},
            {"title": "MP3 Downloads"},
            {"title": "Musical Instruments & DJ"},
            {"title": "Film & TV"},
            {"title": "Ble-ray"},
            {"title": "PC & Video Games"}
        ]},
        {"title": "Electronics & Computers", "expanded": true, "folder": true, "children": [
            {"title": "Electronics", "folder": true, "children": [
                {"title": "Camera & Photo"},
                {"title": "TV & Home Cinema"},
                {"title": "Audio & HiFi"},
                {"title": "Sat Nav & Car Electronics"},
                {"title": "Phones"},
                {"title": "Electronic Accessories"}
            ]},
            {"title": "Computers", "folder": true, "children": [
                {"title": "Laptops"},
                {"title": "Tablets"},
                {"title": "Computer & Accessories"},
                {"title": "Computer Components"},
                {"title": "Software"},
                {"title": "Printers & Ink"}
            ]}
        ]}
    ]}
];





