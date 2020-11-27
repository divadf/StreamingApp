# StreamingApp

    Using ffmpeg to convert RTSP stream to HLS. Scaling with Kubernetes and using a single Docker image. Written in Node (mostly).

NPM Version Build Status Downloads Stats

Using ffmpeg to convert RTSP stream (wyze cam source) to HLS. Scaling with Kubernetes and using a single Docker image. Written in Node.

Installation

Linux:

yum install docker -y
Sudo yum install -y yum-utils
sudo yum install -y yum-utils   device-mapper-persistent-data   lvm2
sudo yum-config-manager     --add-repo     https://download.docker.com/linux/centos/docker-ce.repo
sudo service docker start
Sudo yum install git -y


Usage example

A few motivating and useful examples of how your product can be used. Spice this up with code blocks and potentially more screenshots.

For more examples and usage, please refer to the Wiki.
Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

make install
npm test

Release History

    0.2.1
        CHANGE: Update docs (module code remains unchanged)

Meta

David Figueroa – divad.figueroa@gmail.com

https://github.com/yourname/github-link


