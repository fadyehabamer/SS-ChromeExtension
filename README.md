<p align='center'>
  <img src='Repo Assets/img.png'>
</p>


# SS Chrome Extension
> Developed by world's [0] FrontEnd Developer : ME 😝

<br/>

###  Introduction
**Making a chrome extension was one of the most ambigous things for me and really want to develop one, but now it is easier than adding a click event in Javascript 😂**
<br>
**really looks like making a web page consiting of HTML , CSS , JavaScript**

<hr>


### What is a chrome extension?
**An extension is a small program that takes advantage of the web technologies that allow people to customize the web experience. Most of the time, an extension is built on top of JavaScript or HTML.**

<hr>

### Now Let's make SS chrome extension !

### 1.Create the Manifest
**The manifest file is the heart of a chrome extension. In our folder, we'll need to create a manifest.json file. Include this in your manifest file.**
```js
{
    "name": "Screenshot extension",
    "version": "1.0",
    "description": "Building a screenshot taking extension",
    "manifest_version": 2
}
```
#### We can now add the extension to our Chrome extensions tab after entering these keys. But first, let's figure out what each line means.

`name`: The name of our extension that is visible to users, such as Grammarly, honey, and so on. <br>
`version`: Version denotes the extension's version number; we'll start with 1.0. description: Your extension's description is what it says on the tin.<br>
`version manifest`: Developers should use the manifest version key in their manifests to declare which version of the manifest specification their package targets. In Chrome 18, the Manifest version 1 was deprecated. As a result, we'll be utilising version 2 of the manifest.

<hr>

### 2.Testing it in chrome
- **In development mode**, the directory containing the manifest file can now be added as an extension in its present state.
- Navigate to chrome://extensions to see the Extension Management page.

- The Extension Management page may also be accessed by hovering over **More Tools**, then selecting Extensions from the Chrome menu.
By pressing the toggle switch adjacent to **Developer mode**

- Select the extension directory by clicking the **LOAD UNPACKED** button.

<img src='Repo Assets/ssChrome.png'>

**Boom! The extension has been deployed successfully. Because no icons were specified in the manifest, the extension will be given a generic toolbar icon.**

<hr>

### 3.Adding more features in manifest.json
Let's now add some features to our extension. We'll begin by placing a `background script` in our folder and adding some other necessary elements to our manifest file, such as icons and permissions.

```js
{
    "name": "Screenshot extension",
    "version": "1.0",
    "description": "Building a screenshot taking extension",
    "background": {
        "scripts": ["background.js"],
        "persistent": false
    },
    "browser_action": {
        "default_icon": "yourImgSrcHere",
        "default_title": "Take a screen shot!" 
    },
    "icons": {
        "16": "images/yourImgSrcHere",
        "32": "images/yourImgSrcHere",
        "64": "images/yourImgSrcHere",
        "128": "images/yourImgSrcHere"
    },
    "permissions": [
        "activeTab"
    ],
    "manifest_version": 2,
}```
