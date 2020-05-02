// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

     let button1 = document.getElementById('fatture');
     var config1="";
      button1.addEventListener("click", function(event) {
		 event.preventDefault();
      
		
		chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {
			chrome.tabs.sendMessage(tab.id,"/fatture.json");
		});
      }, false);
	  
	let  button2 = document.getElementById('disponsizione');
   
      button2.addEventListener("click",function(event) {
		 event.preventDefault();
   

		chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {
			chrome.tabs.sendMessage(tab.id,"/disposizione.json");
		});
      }, false);
