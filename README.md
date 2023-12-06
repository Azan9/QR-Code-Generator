# QR-Code-Generator
A simple Node.js project to generate QR image for the URL provided by the user.

# NPM packages required

*  **_inquirer_** to get the user input
*  **_qr-image_** to convert the URL entered by the user to a QR image
*  **_fs_** to save the user input in a text file. This does not to be installed as it a build in node.js module.


# Installing the packages

Go to the project fuler and run the following two commands in the terminal to initiliaze the project and create the package.json file and install the npm packages required.

``` npm init -y ```

``` npm i inquirer qr-image ``` 

# Modifying the package.json file to using the NPM modules/packages

Add the code below to the package.json file

![image](https://github.com/Azan9/QR-Code-Generator/assets/43653409/5bb3163d-426e-45be-a73b-176cc90a8d10)

Read more about Packages and package.json [here](https://nodejs.org/api/packages.html#:~:text=Within%20a%20package%2C%20the%20package,as%20using%20ES%20module%20syntax.)

# Running the app

After installing the packages. Run the node.js app using the following command.

``` node index.js ```


# Using the app

Once the app is running, you will get a promt in the terminal to enter a URL, enter a URL and hit enter and a qr code image will be created in your project folder

![image](https://github.com/Azan9/QR-Code-Generator/assets/43653409/df26c34f-1a92-4447-a325-d79f2f5395c1)

![image](https://github.com/Azan9/QR-Code-Generator/assets/43653409/3c6bbf01-c520-43a0-b21a-4ee65622ad8e) 

![image](https://github.com/Azan9/QR-Code-Generator/assets/43653409/34117a77-e5d7-4fac-a39b-2a0b260c65b7)

Use a QR scanner in your phone to test out the QR code.

