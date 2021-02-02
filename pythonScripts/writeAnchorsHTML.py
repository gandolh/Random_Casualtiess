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



list1= [f.path for f in os.scandir('.') if f.is_dir()]
for d in list1:
	text=d[2:]
	text=editText(text)
	print(text)
	with open('anchors.txt',"a+") as fl:
		fl.write('<a class="option"> {} </a>\n'.format(text))