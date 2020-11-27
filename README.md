# StreamingApp

    Using ffmpeg to convert RTSP stream to HLS. Scaling with Kubernetes and using a single Docker image. Written in Node (mostly).

NPM Version Build Status Downloads Stats

Using ffmpeg to convert RTSP stream (wyze cam source) to HLS. Scaling with Kubernetes and using a single Docker image. Written in Node.

Installation

Linux:

    yum install docker -y
    yum install -y yum-utils
    yum install -y yum-utils   device-mapper-persistent-data   lvm2
    yum-config-manager     --add-repo     https://download.docker.com/linux/centos/docker-ce.repo
    service docker start
    yum install git -y
    Git clone https://github.com/divadf/StreamingApp.git
    docker build -t divadf/streamingapp .
    docker run -d -p 8080:8080 divadf/streamingapp

Usage example

Using Wyze cam to stream RTSP output to HLS. 

make install
npm test

Release History

    0.2.1
        CHANGE: Update docs

Meta

David Figueroa – divad.figueroa@gmail.com
https://github.com/divadf


