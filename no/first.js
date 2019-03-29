const express = require('express');
const path = require('path');
var app = require('express')();
app.use("/", express.static(path.join(__dirname, "./public")));
app.get('/Storybook/page/:id', (req,res) =>{
    var PageNumber = req.params.id;
    console.log(PageNumber);
    var pageDetails = getmypage(PageNumber);
    res.send(pageDetails);
});
function getmypage(PageNumber){
    const fs = require('fs');
    if(PageNumber == 1){
       const fs = require('fs');
       var  config = require('./storybook.json');
       return('<html lang="te" dir="ltr"><head><meta charset="utf-8">  <style> *{ margin: 0px; padding: 0px;}body{width: 550px;height: 400px;}.n1{ position: relative;top:10px;left: 600px;}.n2{position: relative;left:480px;top: 80px;}.n3 {position: relative;left: 600px;top:140px;}nav{position: relative;top:220px;left:1000px;width:120px;height: 60px;}nav ul{position: relative;top:20px;background-color: transparent;left:40px;}.n4{position: relative;top: 170px;left: 120px;width:120px;height: 60px;}.n4 ul{position: relative;top:20px;background-color: transparent;left:30px;}</style></head><body><div class="n1"><h2>'+config.title_en+'</h2></div><div class="n2"><img src ='+'/'+config.cover_image+' width ="340" height="250"></div><div class="n3"><h3>'+ config.title+'</h3></div><nav><ul><a href="'+(PageNumber - 1 + 2)+'"color="transparent">Next</a></ul></nav></body></html>');
    }
    else if(PageNumber >= 2){
       let Story = fs.readFileSync('storybook.json', (err) => {if (err) throw err;});
       let StoryBook = JSON.parse(Story);
       var pages = StoryBook.pages;
       var currentPage = pages[PageNumber -2];
       if(pages[PageNumber - 2] == null){
           return('<html lang="te" dir="ltr"><head><meta charset="utf-8">  <style> *{ margin: 0px; padding: 0px;}body{width: 550px;height: 400px;}.n1{ position: relative;top: 250px;left: 600px;}</style></head><body><div class="n1"><h1>Visit Vizag..u will have fun!!!!!</h2></div></body></html>');
        }
       console.log(pages[PageNumber - 2]);  
       return('<html lang="te" dir="ltr"><head><meta charset="utf-8">  <style> *{ margin: 0px; padding: 0px;}body{width: 550px;height: 400px;}.n1{ position: relative;top:30px;left: 300px;}.n2{position: relative;left:400px;top: 80px;}.n3 {position: relative;left: 300px;top:140px;}nav{position: relative;top:180px;left:1000px;width:120px;height: 60px;}nav ul{position: relative;top:20px;background-color: transparent;left:40px;}.n4{position: relative;top: 120px;left: 120px;width:120px;height: 60px;}.n4 ul{position: relative;top:20px;background-color: transparent;left:30px;}</style></head><body><div class="n1"><h2>'+currentPage.english+'</h2></div><div class="n2"><img src ='+'/'+currentPage.image+' width ="340" height="250"></div><div class="n3"><center><h3>'+ currentPage.telugu+'</h3></center></div><nav><ul><a href="'+(PageNumber - 1 + 2)+'"color="transparent">Next</a></ul></nav><div class="n4"><ul><a href="'+(PageNumber - 1)+'">Prev</a></ul></div></body></html>');
    }
}
app.listen(3000, () => {
 console.log('server started');  
});