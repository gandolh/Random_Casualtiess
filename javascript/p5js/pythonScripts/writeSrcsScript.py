import os


def editText(text):
	newText=''
	for letter in text:
		if letter=='-' or letter=='_':newText+=' '
		elif letter.isupper():
			if letter==text[0]:
				newText+=letter.lower()
			else:
				newText=newText+' '+letter.lower();
		else: newText+=letter;
	return newText;


count=0;	

list1= [f.path for f in os.scandir('.') if f.is_dir()]
with open('srcs.txt',"w") as fl:
	fl.write('');
for d in list1:
	text=d[2:]
	print(text)
	with open('srcs.txt',"a+") as fl:
		fl.write(
			'''
case {}:{}
	document.getElementById('iframeAnimation').src='../../javascript/p5js/{}/{}/index.html'
	break;
{}
'''.format(count,'{','Cellular%20automata%20and%20L-system',text,'}'))
	count+=1