# DBSA Symptom Tracker

The Depression and Bipolar Support Alliance (DBSA) does incredible work for their community. One of the things I was especially impressed with was the DBSA Wellness Tracker-- a free series of PDFs that can be used to track one's mood, medications, symptoms, etc.. as a means of helping a person more deeply understand their diagnosis and how it might affect-- and be affected by-- different parts of their lives. 

The only problem is, you've got to print out all the papers (or maybe edit them with a pdf editor?) Having a printer, not necessarily a given these days. And after printing it out, you'd have to color in boxes with colored pencils.. not a huge problem, but it's a barrier to using a tool that I think some people could truly benefit from. 

I made a simple replication of the Symptom Tracker using React.

<img width="1327" alt="Screen Shot 2024-03-24 at 3 24 40 PM" src="https://github.com/iklug/dbsa-symptoms/assets/110748275/dff3611b-a168-4a7f-b0ea-f6b40dd501e7">

Intensity of symptom is edited by simply clicking on the appropriate square. It will cycle through mild, medium, large, extreme and then back to none.

<img width="1316" alt="Screen Shot 2024-03-24 at 3 26 11 PM" src="https://github.com/iklug/dbsa-symptoms/assets/110748275/ac8e452c-f8ac-4fc4-a784-bdafa1eb8d65">

With this quick example, results are saved in localStorage. The idea being that at the end of the month you can save the page as a PDF for safekeeping and you reset to start a new month of symptom tracking. 
