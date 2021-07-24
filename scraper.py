from selenium import webdriver

url = "https://bbdnitk.wixsite.com/scbm/"
browser = webdriver.Firefox()
endpoint = "events"
browser.get(url + endpoint)

# for student page, peer-reviewed-publications, faculty
# b = browser.find_element_by_class_name("_1VShg")
# for rest
b = browser.find_element_by_class_name('_2S9ms')
a = b.find_elements_by_tag_name("a")
s = ""
for i in a:
    href = i.get_attribute("href")
    inh = i.get_attribute("innerHTML")
    if "bbdnitk" not in href and "wix" not in href:
        s+=href+"\n"
        s+= inh+"\n\n"
f = open("page_hrefs/"+endpoint+".txt",'w+')
f.write(s)
f.close()
print("DONE")
