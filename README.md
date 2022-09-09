# Yomunication

Yomunication is a web application that allows you to create, read, update, and delete articles. This app is powered by NodeJS, ExpressJS, MongoDB, and Restful API.

## Demo

This is how Yomunication looks :<br><br>
<img src="https://raw.githubusercontent.com/kevinadhiguna/yomunication/main/demo/PREVIEW/1.png" width="90%"></img> <br><br>

Yomunication allows CRUD actions as well, just like these :

### Create

1. Click the `New Article` button below the quote :<br>
   <img src="https://raw.githubusercontent.com/kevinadhiguna/yomunication/main/demo/create/1.png" width="90%"></img> <br><br>

2. On the `Edit Page`, insert `Title`, `Description`, and `Markdown` (acts as a main content of the article) :<br>
   <img src="https://raw.githubusercontent.com/kevinadhiguna/yomunication/main/demo/create/2.png" width="90%"></img> <br><br>

3. Having filling in all of them, click `Save` button to create your brand new article :<br>
   <img src="https://raw.githubusercontent.com/kevinadhiguna/yomunication/main/demo/create/3.png" width="90%"></img> <br><br>

4. Great! You have successfully published an article! <br>
   <img src="https://raw.githubusercontent.com/kevinadhiguna/yomunication/main/demo/create/4.png" width="90%"></img> <br><br>

### Read

1. In order to read a full article, click the `Read More` button in the article you want to have a look at :<br>
   <img src="https://raw.githubusercontent.com/kevinadhiguna/yomunication/main/demo/read/1.png" width="90%"></img> <br><br>

2. Hooray! The full article is displayed for you! <br>
   <img src="https://raw.githubusercontent.com/kevinadhiguna/yomunication/main/demo/read/2.png" width="90%"></img> <br><br>

### Update

1. Click the `Edit` button in the article you want to apply a change :<br>
   <img src="https://raw.githubusercontent.com/kevinadhiguna/yomunication/main/demo/update/1.png" width="90%"></img> <br><br>

2. After you are redirected to the `Edit Article` page, you can edit what you want. In this case, I will modify the `Title` as highlighted below :<br>
   <img src="https://raw.githubusercontent.com/kevinadhiguna/yomunication/main/demo/update/2.png" width="90%"></img> <br><br>

3. If you have finished on making changes, click the `Save` button :<br>
   <img src="https://raw.githubusercontent.com/kevinadhiguna/yomunication/main/demo/update/3.png" width="90%"></img> <br><br>

4. Voila! You have successfully updated the `Title`. Feel free to make changes on other attributes as well :) <br>
   <img src="https://raw.githubusercontent.com/kevinadhiguna/yomunication/main/demo/update/4.png" width="90%"></img> <br><br>

### Delete

1. Click the `Delete` button in the article you would like to remove :<br>
   <img src="https://raw.githubusercontent.com/kevinadhiguna/yomunication/main/demo/delete/1.png" width="90%"></img> <br><br>

2. Boom! The article has disappeared now... <br>
   <img src="https://raw.githubusercontent.com/kevinadhiguna/yomunication/main/demo/delete/2.png" width="90%"></img> <br><br>

## How to Run :

### Prerequisites :

Make sure you have [NodeJS](https://nodejs.org/en/download/) and [MongoDB](https://docs.mongodb.com/manual/installation/) installed in your computer/laptop. Please also check that MongoDB is running in the background.

### Steps :

Open your Terminal / Command Prompt to execute these commands :<br><br>

1. Clone this repository :

```
git clone https://github.com/kevinadhiguna/yomunication.git
```

2. Install Dependencies either using Yarn or NPM :

```
yarn
# or
yarn install
```

Note :

```
npm install
```

to install dependencies using NPM.

3. Run :

```
yarn run devStart
```

4. Open a browser and go to `localhost:5000` to see the app is running :)

<br />

## Format code

You can format code using prettier :
```
yarn format
```

If you want to only check whether code is formatted properly or not, run :
```
yarn run check
```

<br />

![Hello !](https://api.visitorbadge.io/api/VisitorHit?user=kevinadhiguna&repo=yomunication&label=thanks%20for%20dropping%20in%20!&labelColor=%23000000&countColor=%23FFFFFF)
