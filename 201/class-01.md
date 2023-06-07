# Class 01

## How the web works
As a web developer (and in my opinion in all walks of life) it's important to understand how your tools work. As such lets start by delving into how the web works.

### How the web works, a poem.

Welcome to the internet, where we throw data around,  
Request from browser to server, replies are inbound,  
Looking up the website on the DNS server,  
A way to find the IP and progress things further,  
Your cat pics incoming,  
The data is running,  
Sent by fibre optic,  
Cut into small packets,  
Made of binary code,  
Don't worry, it doesn't take long to load!  
A small summary of HTTPS data transfer,  
Provided in poem as your requested answer!  

### The description

The web works by sending information from data servers to other computers. Data servers are a computer designed to host content that can be served over the world wide web.  
Each computer has an IP (internet protocol) address, like a postal address that allows information to be sent between addresses, an IP address lets information me sent via addresses over the web.  
IP addresses are comprised of numbers seperated by dots '.' and are something that we would be silly to try and memorise to access websites and services. This is where DNS (domain name system) servers come into play.  
A DNS server is like a phonebook. It will list a domain name such as www.github.com alongside it's IP address. This means when the end user wants to access github they only have to remember the domain name and the DNS server will reconcile the two.  
This also helps when one computer, with one IP address, hosts multiple websites.  
Information is then sent around the world using fibre optic cables, the data is sent in 'packets' from one computer to another. This is sent in binary code and is then translated back into it's original code once all packets are received.  

## Parsing HTML, CSS and JS.

Once the broswer receives the first chunk of data, it can being parsing the information received. Parsing is what the browser does to turn the data it receives over the network into the DOM (document object model) and the CSSOM (cascading style sheet object model).

## Finding Images for a website

You can find images in a variety of ways. You can use free stock image websites like [Unsplash](https://unsplash.com/), [Pexls](https://www.pexels.com/) and [Pixabay](https://pixabay.com/). You can also use [Google Image Search](https://images.google.com/) and under the 'tools' you can select images with creative commons license only.

## Javascript, strings & numbers

To create a string in Javascript you simply type whatever you wish contained within quotation marks. `'this is a string'`.  
To create a number in Javascript you simply type the number value without anything else. `2`.   
For example, `1` is a number but `'1'` is a string.  

## Javascript variables

Variables are a way to store data under a quick and easy to reference name.  
`const name = 'Richard'` would be a way of storing my name.  
`let age = 32` would be a way of storing my age.  
Now I have used both `const` and `let`. You would use `const` when you want the variable to remain constant. My name isn't going to change to I have used `const`.  
However, my age changes each year so we want to let the variable change by assigning it as a `let` variable.  

## What is an HTML attribute?

A HTML attribute is something that gives an HTML element more information on how it should look or behave.  
The `<IMG/>` element contains the `src` attribute that provides the source of the image.  
The `<input>` element can contain a `label` attribute that provides the element with a label so you know what it is for.

## The anatomy of a HTML element.

A HTML element comprises of a starting tag which contains any attributes as well. Next is the element content followed by the end tag as shown below.  
![HTML element anatomy](https://ianrmedia.unl.edu/images/resources/html-anatomy.png)

## `<article>` vs `<section>` elements

While `<article>` is related to `<section>`, they have different use cases.  
`<section>` is used for grouping a distinct section of a webpage. It may group up a bunch of blog posts into one section while another section contains a bunch of other content.  
`<article>` is for containing related individual standalone pieces of content such as the individual blog post. videos, images or news items.  

## What elements does a typical website include?

A typical website will contain the following tags.  
```
<!DOCTYPE html>
<html></html>
<head></head>
<title></title>
<body><body>
```

## Metadata and SEO.

Specifying a description that includes keywords relating to the content of your page is useful as it has the potential to make your page appear higher in relevant searches performed in search engines. The description is also used on search engine result pages to provide a short overview off what the website is about.   

The `<meta>` tag is used to specify metadata that cannot be represented by other HTML meta-related elements like `<base>` `<link>` `<script>` or `<title>`.  
The `<meta>` tag does not include any content and is only comprised of the tag itself and it's attributes. The attributes are what is used to definte the purpose of the tag. You may included information such as a page description, the relevant charset and many other things.  

## Designing a website

When it comes to desiging a website there are many different things to consider. A lot of people often focus on the technical side and we must be familiar with the technique of our craft but what rally matters is what you want to achieve. Projects are more likely to fail due to a lack of vision rathr than a lack of technical smarts.  

The first thing to do is a little something call project ideation. Start with these three questions.  
1. What exactly do I want to accomplish?
2. How will a website help me reach my goals?
3. What need to be done, and in what order, to reach my goals?

Write down all the answers to help create your vision and remember the 'What do I want to accomplish?' is the single most important question of them all.

## Semantics

Semantic tags are very important in HTML. They provide more information to the browser than just the content and how it should be styled. Semantic tags such as a `<h1>` will tell the broswer that is is;  
1. A heading.
2. The top level heading on the page.

This provides many benefits such as making it more accessible and providing a more pleasant user experience.

## What is Javascript.
JavaScript was initially created to “make web pages alive”, to give them functionality.
The programs in this language are called scripts. They can be written right in a web page’s HTML and run automatically as the page loads or when an event is triggered. They allow you manipulate the DOM to give the functionality desired.

You can add Javascript by using the `<script></script>` tags in HTML.