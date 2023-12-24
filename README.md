
# File Transfer System.

The Project can transfer the file over Local Area Network using Standard File Transfer System Protocol(FTP).
## Quick Installation

To clone this project run

```bash
 git clone https://github.com/4m4n-x-B4w4ne/FTSREpo.git
```

You can use two different devices( 127.0.0.1(loopback) for single device test purpose).

First Compile Both server.cpp and client.cpp using

```bash
g++ client.cpp -o client
g++ server.cpp -o server
```

## Usage

The Concept behind the usage is there is one device as a server and there is another device that is client.

Server:
It is used to store our files.

Client:
It is used to send files from Client Device to Server.

Starting of server:

```bash
./server
```
This will put server in listening stage.

The client can perform 3 task,


  1.Upload file from client's directory to server's directory

```bash
./client <server's-ip-address> UPLOAD/<filename>
```

  2.Download file from server's directory to client's directory

  ```bash
  ./client <server's-ip-address> DOWNLOAD/<filename>
  ```

  3.List files from the server's directory

  ```bash
 ./client <server's-ip-address> LIST
 ```

 ## Resources 
 Socket Programming Tutorials.

1.CO560 Advanced Programming
 https://www.youtube.com/watch?v=gntyAFoZp-E
 https://youtu.be/sXW_sNGvqcU?si=p1mQNqPfkzzJf1fA

2.You can follow this channel to get your basics.
https://www.youtube.com/@PowerCertAnimatedVideos
https://www.youtube.com/@codewithryan

My favoriate:
https://www.youtube.com/@NetworkChuck

## Creator's Information.

I am Aman Bawane Pursuing my Bachelor's Degree in Computer Science And Engineering from IIT Roorkee.

You can Star the Repo if you liked it.

## ADDONS
You can make a good frontend of this project i have done some basic things.
