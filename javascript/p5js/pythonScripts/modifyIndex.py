
key=str(input())
if key=='123':
	import os

	list1= [f.path for f in os.scandir('.') if f.is_dir()]
	content='''
	<!DOCTYPE html><html lang="en"><head>
	    <script src="../../p5.js"></script>
	    <link rel="stylesheet" type="text/css" href="../../../../css/SketchP5style.css">
	    <meta charset="utf-8">

	  </head>
	  <body>
	    <script src="sketch.js"></script>
	  

	</body></html>
	'''
	for d in list1:
		with open(d+'\\index.html',"w") as fl:
			fl.write(content)