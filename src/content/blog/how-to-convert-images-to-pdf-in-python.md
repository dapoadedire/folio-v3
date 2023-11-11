---
title: 'How to Convert Images to PDF in Python'
description: " "
publishDate: 'Dec 10 2022'
heroImage: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1670679814459/ToreJ-kJH.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
tags: ["pypi", "python", "pdf"]
---



# How to Convert Images to PDF in Python

In this article, we'll learn how to convert images of any format to PDF in Python. We'll be using the `img2pdf` Python package to accomplish this.

Before we begin, make sure you have installed `img2pdf` by running the following command in your terminal:

`python3 -m pip install img2pdf`

Once `img2pdf` is installed, navigate to the directory that contains the images you want to convert to PDF.

To convert the images to PDF, run the following command:

`python3 -m img2pdf [image1] [image2] ... [imageN] -o [output.pdf]`

For example, if you have four images `1.jpeg`, `2.jpeg`, `3.jpeg`, and `4.png`, you can convert them to a single PDF by running the following command:

`python3 -m img2pdf 1.jpeg 2.jpeg 3.jpeg 4.png -o output.pdf`

If you have many images to convert to PDF and they are all in the same formats, you can use a wildcard to select all of them at once. For example, if you have a directory containing only JPEG images, you can convert them to a single PDF by running the following command:

`python3 -m img2pdf *.jpeg -o output.pdf`

If you have many images to convert to PDF and they are of different formats, you can specify each format using a wildcard. For example, if you have a directory containing JPEG and PNG images, you can convert them to a single PDF by running the following command:

`python3 -m img2pdf *.png *.jpeg -o output.pdf`

I hope you have learned something new. For more information on the `img2pdf` package, you can check out the [**official documentation**](https://pypi.org/project/img2pdf/).